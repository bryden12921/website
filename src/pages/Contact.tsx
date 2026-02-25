import React, { useState } from 'react';
import Map from '../components/Map';
import '../styles/contact.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const officeLatitude = -1.9536;
  const officeLongitude = 29.8739;

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">Get in touch with Olivier Mudagiri</p>

        <div className="contact-content">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            {submitted && (
              <div className="success-message">
                <p>✓ Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+250 788 123 456"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please share your inquiry or message..."
                  rows={5}
                />
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-section">
            <h2>Contact Information</h2>

            <div className="info-box">
              <h3>📧 Email</h3>
              <p>
                <a href="mailto:olivier@mudagiri.rw">olivier@mudagiri.rw</a>
              </p>
            </div>

            <div className="info-box">
              <h3>📱 Phone</h3>
              <p>
                <a href="tel:+250788123456">+250 788 123 456</a>
              </p>
            </div>

            <div className="info-box">
              <h3>📍 Office Address</h3>
              <p>
                Kigali<br />
                Rwanda
              </p>
            </div>

            <div className="info-box">
              <h3>⏰ Office Hours</h3>
              <p>
                Monday - Friday: 8:00 AM - 5:00 PM<br />
                Saturday: 9:00 AM - 1:00 PM<br />
                Sunday: Closed
              </p>
            </div>

            <div className="map-section">
              <h3>📌 Office Location</h3>
              <Map 
                latitude={officeLatitude}
                longitude={officeLongitude}
                title="Olivier Mudagiri Office"
                address="Kigali, Rwanda"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;