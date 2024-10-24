import React from 'react';
import './Footer.css';
import "./PrivacyPolicy";

const Footer = () => {
  return (
   <>
   <div id="footer">
   <div className="Footer_info">
    <p1>TEN-HR-Consulting</p1>
    <br />
    <br />
   <p2> Our expertise lies on assisting small to medium-sized enterprises in adhering to Indian labour rules and regulations while optimising their human resources processes.</p2>
    <br />
    <br />
    <p3>New Delhi ,  India</p3>
   </div>
   
   <div id="footer_link">
    <div className="footer_links1">
<ul>


  <l1>Company</l1>
  <br />
  <br />
  <li><a href="/faq">Frequently Asked Questions</a></li>
  <li><a href="/aboutUs">About TEN HR Consulting</a></li>
  <li><a href="#">Terms of Service</a></li>
  <li><a href="/privacy-policy">Privacy Policy</a></li>
</ul>
</div>
<div className="footer_links2">
  <ul>

    <l2>Services</l2>
    <br />
    <br />
    <li><a href="/services/peo&eor">PEO & EoR</a></li>
    <li><a href="/services/recruitment">Recruitment</a></li>
    <li><a href="/services/hrConsulting">HR Consulting</a></li>
    <li><a href="/services/payrollProcessing">Payroll Processing</a></li>
    <li><a href="/services/managedServices">Managed Services</a></li>
  </ul>
</div>


<div className="footer_links3">
<ul>
  <l3>Contact</l3>
  <br />
  <br />
  <li><a href="mailto:
info@recruitindo.com">
info@recruitindo.com</a></li>
  <li>+(62) 21 570-0415</li>
  <button><a href="https://www.linkedin.com/company/ten-hr-consulting/"> Follow Our Linkedin</a></button>
</ul>


</div>
   </div>

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </div>
   </>
  )
}

export default Footer
