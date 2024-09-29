// pages/contact.js
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess('Message sent successfully!');
      setFormData({ name: '', phone: '', message: '' });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-dark">
      <h1 className="mb-8 text-4xl font-bold text-center dark:text-light">Contact Us</h1>
      <p className="mb-6 text-lg text-center dark:text-light">
        We’d love to hear from you! Please fill out the form below with your details and message.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md border-t-2 border-solid border-dark dark:bg-dark dark:border-light"
      >
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-light" htmlFor="name">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 dark:border-light"
          />
        </div>
        <div className="mb-4">
        <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-light" htmlFor="phone">Your Phone Number</label>
        <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="123-456-7890"
            value={formData.phone}
            onChange={handleChange}
            required
            pattern="[0-9]*" // Accepts only numeric values
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 dark:border-light"
        />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-light" htmlFor="message">Your Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Type your message here..."
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300 dark:border-light"
            rows="4"
          />
        </div>
        <button type="submit" className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
          Send Message
        </button>
        {success && <p className="mt-4 text-green-600">{success}</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
      </form>
    </div>
  );
};

export default Contact;
