import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Feedback = () => {
	// Scroll to top when component mounts
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		// Persist feedback locally; integrate backend later if needed
		try {
			const stored = localStorage.getItem('feedbacks');
			const existing: Array<{ name: string; email: string; message: string; createdAt: string }> = stored ? JSON.parse(stored) : [];
			const newEntry = { name, email, message, createdAt: new Date().toISOString() };
			localStorage.setItem('feedbacks', JSON.stringify([newEntry, ...existing]));
			setSubmitted(true);
			setName('');
			setEmail('');
			setMessage('');
		} catch (err) {
			console.error('Failed to save feedback', err);
			setSubmitted(true);
		}
	};

	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			<section className="py-20">
				<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center">Surag's portfolio</h1>
					<p className="text-gray-600 text-center mb-10">Share your feedback about working with me.</p>

					<div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
						{submitted ? (
							<div className="text-center">
								<h2 className="text-2xl font-semibold text-green-600 mb-2">Thank you!</h2>
								<p className="text-gray-600">Your feedback has been recorded.</p>
							</div>
						) : (
							<form onSubmit={handleSubmit} className="space-y-6">
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
									<input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
									<input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
								</div>
								<div>
									<label htmlFor="message" className="block text-sm font-medium text-gray-700">Feedback</label>
									<textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
								</div>
								<button type="submit" className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">Submit Feedback</button>
							</form>
						)}
					</div>

					<div className="text-center mt-6">
						<a href="/home" className="text-blue-600 hover:underline">Back to Home</a>
					</div>
				</div>
			</section>
			<Footer />
		</div>
	);
};

export default Feedback;
