"use client";

import { useState } from 'react';

export default function ContactCTA() {
  // 1. Form state aur loading state define kari hai
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Phone: '',
    TypeOfWebsite: '',
    Budget: '',
    Message: ''
  });
  const [loading, setLoading] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const closeModal = () => setShowThankYouModal(false);

  // 2. Input change handle karne ke liye function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 3. Form submit aur Google Sheet me bhejne ke liye function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // !! APNA GOOGLE APPS SCRIPT URL YAHA PASTE KAREIN !!
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8iuYz2DscC1Qz7c3do5uZYf4N4P1zUoxkmDAH-yC9MYrz_73zK_nkdK5LWpazwis0/exec"; 

    const formPayload = new FormData();
    Object.keys(formData).forEach(key => {
      formPayload.append(key, formData[key]);
    });

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formPayload,
        mode: 'no-cors' // CORS error se bachne ke liye
      });

      setShowThankYouModal(true);
      
      // Form fields ko reset karna
      setFormData({
        Name: '',
        Email: '',
        Phone: '',
        TypeOfWebsite: '',
        Budget: '',
        Message: ''
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }

  };

  return (
    <section id="contact" className="py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Container ko flex-col layout diya hai taaki Content aur Form aamne-saamne dikhein */}
        <div className="bg-gradient-to-r from-purple-900 to-[#0f172a] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-start justify-between">
          
          {/* Left Side: Text Details */}
          <div className="lg:max-w-md w-full">
            <p className="text-purple-400 uppercase tracking-widest mb-3 text-sm font-semibold">
              Let s Work Together
            </p>
            <h2 className="text-4xl font-bold mb-4">
              Have A Project In Mind?
            </h2>
            <p className="text-gray-300 leading-8 mb-6">
              I m always open to discussing new projects, creative ideas or opportunities to be part of your vision. Fill out the form and let s build something amazing together.
            </p>
          </div>

          {/* Right Side: Interactive Form */}
          <div className="w-full lg:max-w-xl bg-[#1e293b]/50 p-6 md:p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" name="Name" required value={formData.Name} onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full bg-[#0f172a] text-white placeholder-gray-500 border border-gray-700 focus:border-purple-500 rounded-xl px-4 py-3 outline-none duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" name="Email" required value={formData.Email} onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-[#0f172a] text-white placeholder-gray-500 border border-gray-700 focus:border-purple-500 rounded-xl px-4 py-3 outline-none duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Phone No.</label>
                  <input 
                    type="tel" name="Phone" required value={formData.Phone} onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full bg-[#0f172a] text-white placeholder-gray-500 border border-gray-700 focus:border-purple-500 rounded-xl px-4 py-3 outline-none duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">Type of Website</label>
                  <select 
                    name="TypeOfWebsite" required value={formData.TypeOfWebsite} onChange={handleChange}
                    className="w-full bg-[#0f172a] text-gray-300 border border-gray-700 focus:border-purple-500 rounded-xl px-4 py-3 outline-none duration-200 apperance-none"
                  >
                    <option value="" className="text-gray-500">-- Select Option --</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Business Portfolio">Business Portfolio</option>
                    <option value="Blog">Blog/News</option>
                    <option value="Custom Web App">Custom Web App</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Budget</label>
                <input 
                  type="text" name="Budget" value={formData.Budget} onChange={handleChange}
                  placeholder="e.g. ₹20,000 or $500"
                  className="w-full bg-[#0f172a] text-white placeholder-gray-500 border border-gray-700 focus:border-purple-500 rounded-xl px-4 py-3 outline-none duration-200"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea 
                  name="Message" rows="4" value={formData.Message} onChange={handleChange}
                  placeholder="Tell me more about your website requirements..."
                  className="w-full bg-[#0f172a] text-white placeholder-gray-500 border border-gray-700 focus:border-purple-500 rounded-xl px-4 py-3 outline-none duration-200 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-purple-600 text-white font-semibold py-4 rounded-xl hover:bg-purple-700 active:scale-[0.98] duration-200 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending Details...' : 'Submit Inquiry'}
              </button>

            </form>
          </div>

        </div>
      </div>

      {showThankYouModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6">
          <div className="max-w-md w-full bg-slate-950 rounded-3xl border border-purple-500/30 p-8 shadow-2xl">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-purple-400 font-semibold mb-2">Thank You</p>
                <h3 className="text-3xl font-bold text-white">Submission Received</h3>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 hover:text-white rounded-full p-2 transition"
                aria-label="Close thank you modal"
              >
                ×
              </button>
            </div>

            <p className="text-gray-300 leading-7 mb-6">
              Your message has been successfully sent. I will review your inquiry and get back to you soon.
            </p>

            <button
              type="button"
              onClick={closeModal}
              className="w-full bg-purple-600 text-white font-semibold py-3 rounded-2xl hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
