export type FeedbackEntry = {
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

const LOCAL_STORAGE_KEY = 'feedbacks';

const getApiUrl = (): string | null => {
  const url = (import.meta as any).env?.VITE_FEEDBACK_API_URL as string | undefined;
  return url && typeof url === 'string' && url.trim().length > 0 ? url : null;
};

const readFromLocalStorage = (): FeedbackEntry[] => {
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
    const parsed = stored ? JSON.parse(stored) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const writeToLocalStorage = (entries: FeedbackEntry[]) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // ignore
  }
};

export async function getFeedbacks(): Promise<FeedbackEntry[]> {
  const apiUrl = getApiUrl();
  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, { method: 'GET' });
      if (!res.ok) throw new Error('Failed to fetch');
      const data = (await res.json()) as FeedbackEntry[];
      // Optionally sync to localStorage as cache
      writeToLocalStorage(data);
      return data;
    } catch {
      // fall back to localStorage if API fails
      return readFromLocalStorage();
    }
  }
  return readFromLocalStorage();
}

type NewFeedback = Omit<FeedbackEntry, 'createdAt'>;

export async function addFeedback(entry: NewFeedback): Promise<FeedbackEntry> {
  const complete: FeedbackEntry = { ...entry, createdAt: new Date().toISOString() };
  const apiUrl = getApiUrl();

  if (apiUrl) {
    try {
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(complete),
      });
      if (!res.ok) throw new Error('Failed to post');
      const saved = (await res.json()) as FeedbackEntry;
      // sync local cache (prepend newest)
      const existing = readFromLocalStorage();
      writeToLocalStorage([saved, ...existing]);
      return saved;
    } catch {
      // fall back to localStorage if API fails
      const existing = readFromLocalStorage();
      const updated = [complete, ...existing];
      writeToLocalStorage(updated);
      return complete;
    }
  }

  const existing = readFromLocalStorage();
  const updated = [complete, ...existing];
  writeToLocalStorage(updated);
  return complete;
}


