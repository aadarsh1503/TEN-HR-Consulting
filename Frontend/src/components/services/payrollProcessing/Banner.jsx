import React, { useState } from 'react';
import './Banner.css';

export default function Banner() {
    // State for popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        countryCode: '+1',
        phone: '',
        company: '',
        reason: '',
        message: ''
    });

    // Open popup
    const handlePopupOpen = () => {
        setIsPopupOpen(true);
    };

    // Close popup
    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
    };

    return (
        <div className="payroll-landing">
            <div className="content-section">
                <h2 className="subtitle">PAYROLL SERVICES</h2>
                <h1 className="title">Payroll Services You Can Run in Your Sleep</h1>
                <p className="description">
                    Run payroll in Indonesia with one platform to streamline international
                    operations and eliminate the ongoing admin of local compliance, taxes,
                    benefits, and more.
                </p>
                <button className="schedule-button" onClick={handlePopupOpen}>
                    Schedule Now
                    <span className="arrow">→</span>
                </button>
            </div>
            <div className="image-section">
                <img
                    src="https://recruitindo.com/wp-content/uploads/2023/12/payroll-process.png"
                    alt="Payroll Process"
                    className="main-image"
                />
            </div>

            {/* Popup Modal */}
            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <button className="close-button" onClick={handlePopupClose}>
                            ×
                        </button>
                        <div className="form-container">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="firstName">First Name *</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            placeholder="John"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="lastName">Last Name *</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Deo"
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="countryCode">Country Code *</label>
                                        <select
                                            id="countryCode"
                                            name="countryCode"
                                            value={formData.countryCode}
                                            onChange={handleChange}
                                            required
                                        >
                                            <option value="+1">+1 (US)</option>
                                            <option value="+44">+44 (UK)</option>
                                            <option value="+91">+91 (IN)</option>
                                            {/* Add more country codes as needed */}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Personal Telephone *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="company">Company *</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reason">Reason to inquiry *</label>
                                    <select
                                        id="reason"
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="PEO & EoR">PEO & EoR</option>
                                        <option value="Payroll">Recruitment</option>
                                        <option value="HR Consulting">HR Consulting</option>
                                        <option value="Payroll Payment">Payroll Payment</option>
                                        <option value="Managed Services">Managed Services</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">How can we help you?</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                    ></textarea>
                                </div>
                                <button type="submit" className="submit-button">Submit Enquiry</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

