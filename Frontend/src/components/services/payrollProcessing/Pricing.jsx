import React, { useState } from 'react';
import './Pricing.css';

export default function Pricing() {

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

    const handlePopupOpen = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="pricing-container">
            <div className="pricing-card">
                <div className="pricing-card-content">
                    <h2 className="pricing-title">PRICING</h2>
                    <h1 className="pricing-headline">
                        Reach out to us for a detailed quote for Payroll Processing
                    </h1>

                    <button className="contactt-button" onClick={handlePopupOpen}>
                        Schedule Now <span className="arrow">→</span>
                    </button>
                </div>
            </div>

            <div className="pricing-info">
                <p className="pricing-description">
                    Our Payroll Processing charges vary based on the volume of requests
                    we are processing. The monthly cost per employee decreases as we
                    process more volume.
                </p>
                <p className="pricing-description">
                    Here is some illustrative pricing, please contact us directly for a detailed
                    quote:
                </p>

                <div className="pricing-tier">
                    <h3 className="pricing-tier-title">0-10 employees:</h3>
                    <p className="pricing-tier-price">Starting at IDR 250,000</p>
                    <p className="pricing-tier-description">per employee per month</p>
                </div>

                <div className="pricing-tier">
                    <h3 className="pricing-tier-title">50 - 100 employees:</h3>
                    <p className="pricing-tier-price">Starting at IDR 150,000</p>
                    <p className="pricing-tier-description">per employee per month</p>
                </div>

                <div className="pricing-tier">
                    <h3 className="pricing-tier-title">300+ employees:</h3>
                    <p className="pricing-tier-price">Starting at IDR 75,000</p>
                    <p className="pricing-tier-description">per employee per month</p>
                </div>
            </div>

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