import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // reset form
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-12 px-6 md:px-16 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">Contact Us</h2>

      <div className="max-w-xl mx-auto">
        {submitted && (
          <p className="mb-4 text-green-600 font-medium text-center">
            ✅ Thanks for contacting us! We’ll get back to you soon.
          </p>
        )}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-xl shadow-md"
        >
          <div className="mb-3">
            <label className="block mb-1 font-medium text-sm">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="mb-3">
            <label className="block mb-1 font-medium text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium text-sm">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="3"
              className="w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>
          <div className="flex justify-center">
            <button
             type="submit"
             className="bg-indigo-600 text-white px-5 py-2 rounded-md hover:bg-indigo-700 transition text-sm"
            >
             Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
