import React from 'react';
import './Cart.css';

const FeatureCard = ({ title, items }) => (
  <div className="feature-card">
    <div className="checkmark">✓</div>
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

export default function Cart() {
  const features = [
    {
      title: "Payroll Calculations",
      items: [
        "Payroll tax calculation",
        "Social security deductions (BPJS)",
        "Non-FTE employment adjustments",
        "Bonuses and incentives",
        "and more!"
      ]
    },
    {
      title: "Statutory Filings",
      items: [
        "We will manage all statutory filing requirements with the relevant local authorities."
      ]
    },
    {
      title: "Direct Employee Payments",
      items: [
        "Manage payroll transfers directly to employee bank accounts",
        "Salary status updates to employees",
        "Manage multiple payment schedules (i.e. weekly, bimonthly, etc.)",
        "Employee payslips"
      ]
    },
    {
      title: "Payslip Creation and Delivery",
      items: [
        "Fast and accurate payslip creation and distribution",
        "Easy and secure access to payslip documents",
        "Secure and confidential"
      ]
    },
    {
      title: "Custom Solutions",
      items: [
        "Our team can work with you to create customized solutions to cater to any payroll related need you have in Indonesia."
      ]
    },
    {
      title: "SMB Focus",
      items: [
        "We understand the unique challenges faced by SMBs in Indonesia. Our team of experts has experience managing payroll for hundreds of SMB clients and can assist you so you can focus on your business."
      ]
    }
  ];

  return (
    <div className="payroll-expertise">
      <header>PAYROLL PROCESSING</header>
      <h1>Unmatched Indonesian Payroll Expertise</h1>
      <div className="feature-grid">
        {features.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} items={feature.items} />
        ))}
      </div>
    </div>
  );
}