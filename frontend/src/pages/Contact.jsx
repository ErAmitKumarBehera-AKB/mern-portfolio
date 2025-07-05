import React, { useState } from 'react';
import Seo from '../components/Seo';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("https://portfolio-backend-5nxi.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting contact form:", err);
      alert("⚠️ Server error. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <Seo
        title="Contact | Amit Kumar Behera"
        description="Get in touch with Amit Kumar Behera – MERN developer and data science enthusiast. Use the contact form to send a message."
        keywords="Contact Amit Kumar Behera, Reach Out, Contact Form"
        url="https://amit-portfolio-two.vercel.app/contact"
      />

      <section id="contact" className="contact">
        <div className="contact-content">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleChange} required />
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
