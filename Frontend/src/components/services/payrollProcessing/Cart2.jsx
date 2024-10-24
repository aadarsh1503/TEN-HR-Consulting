
import React from 'react';
import './Cart2.css';

export default function Cart2() {
    return (
        <div className="payroll-services">
            <div className='Payroll-header'>
                <h1 className='h1'>More than Payroll</h1>
                <p className="subtitle">
                    Unlike other payroll processors we also ensure local compliance with all HR regulations in Indonesia.
                </p>
            </div>

            <div className="content-wrapper">
                <div className="features-grid">
                    <div className="feature-box blue">
                        <h2>Save time and money</h2>
                        <p>Reduce the need for internal payroll teams, software and ongoing training by outsourcing payroll processing to us.</p>
                    </div>
                    <div className="feature-box gray">
                        <h2>Compliance and Accuracy</h2>
                        <p>We are experts in regulatory compliance and tax laws for Indonesia and will ensure you remain compliant and up-to-date with the changing regulations.</p>
                    </div>
                    <div className="feature-box gray">
                        <h2>Security and Data Protection</h2>
                        <p>Our robust systems for data management and security will ensure your information remains secure and confidential.</p>
                    </div>
                    <div className="feature-box blue">
                        <h2>Reliable Customer Support</h2>
                        <p>Our locally based team is on hand to handle any customer support issues. We aim to resolve 90% of all issues within 24 hours and have a strong track record and reputation with our clients.</p>
                    </div>
                </div>
                <div className="dashboard-image">
                    <img src="https://recruitindo.com/wp-content/uploads/2023/12/more-than-payroll.png" alt="Dashboard" />
                </div>
            </div>

            <button className="contact-button">
                Contact Us <span className="arrow">→</span>
            </button>
        </div>
    );
}