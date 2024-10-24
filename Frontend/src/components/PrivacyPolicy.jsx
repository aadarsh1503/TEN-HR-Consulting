import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <h1 className="privacy-policy-title">Privacy Policy</h1>

      <h2 className="privacy-policy-section">Who We Are</h2>
      <p className="privacy-policy-text">
        Welcome to HR Consultancy (referred to as "we," "our," or "us"). We are
        committed to protecting and respecting your privacy. This Privacy Policy
        explains how we collect, use, disclose, and safeguard your information
        when you visit our website:{" "}
        <a href="https://www.entrepreneurshipnetwork.net/">
          www.entrepreneurshipnetwork.net
        </a>{" "}
        or use our services. Please read this policy carefully to understand our
        views and practices regarding your personal data and how we will treat
        it.
      </p>

      <h2 className="privacy-policy-section">Comments</h2>
      <p className="privacy-policy-text">
        When visitors leave comments on our site, we collect the data shown in
        the comments form, including IP addresses and browser information. This
        helps us combat spam and improve your experience.
      </p>
      <p className="privacy-policy-text">
        For users utilizing Gravatar, a hash of your email address may be sent
        to check for a profile picture. You can review Gravatar’s privacy policy
        <a
          href="https://automattic.com/privacy/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          here
        </a>
        . Approved comments will display your profile picture publicly alongside
        your comment.
      </p>

      <h2 className="privacy-policy-section">Media</h2>
      <p className="privacy-policy-text">
        If you upload images to the website, you should avoid uploading images
        with embedded location data (EXIF GPS). Visitors to the site can
        download and extract any location data from images on the site.
      </p>

      <h2 className="privacy-policy-section">Cookies</h2>
      <p className="privacy-policy-text">
        We use cookies to enhance your experience on our site. For example, when
        you leave a comment, we offer the option to save your name, email, and
        website in cookies for your convenience. These cookies will last for one
        year.
      </p>
      <p className="privacy-policy-text">
        When you log in, we use cookies to store your login credentials and
        preferences. If you choose "Remember Me," your login will persist for
        two weeks. When you log out, login cookies will be removed.
      </p>

      <h2 className="privacy-policy-section">
        Embedded Content from Other Sites
      </h2>
      <p className="privacy-policy-text">
        Articles on this site may include embedded content (e.g., videos,
        images, articles). Embedded content from other websites behaves the same
        way as if you visited the other website directly. These websites may
        collect data about you, use cookies, and monitor your interactions with
        their content, especially if you're logged in to those websites.
      </p>

      <h2 className="privacy-policy-section">Sharing Your Data</h2>
      <p className="privacy-policy-text">
        We may share your personal information with any member of our group,
        including subsidiaries, holding companies, and business partners for the
        performance of contracts. We may also disclose your personal data if HR
        Consultancy is sold or merges with another company. Additionally, we may
        disclose information to comply with legal obligations or protect the
        rights, property, or safety of the company, customers, or others.
      </p>

      <h2 className="privacy-policy-section">How Long We Keep Your Data</h2>
      <p className="privacy-policy-text">
        If you leave a comment, both the comment and its metadata are stored
        indefinitely. This helps us recognize and approve any future comments
        automatically, without putting them in a moderation queue.
      </p>
      <p className="privacy-policy-text">
        For users who register on our website, we store the personal information
        provided in your profile. You can view, edit, or delete this information
        at any time, except for your username. Administrators can also view and
        edit your profile data as needed.
      </p>

      <h2 className="privacy-policy-section">Your Rights Over Your Data</h2>
      <p className="privacy-policy-text">
        Access information held about you. Request correction of inaccurate or
        incomplete information. Request deletion of personal data when there is
        no compelling reason for its continued processing. Object to the
        processing of your personal data based on legitimate interests. Request
        restriction of your data processing. Request the transfer of your
        personal data to another party.
      </p>

      <h2 className="privacy-policy-section">Where Your Data Goes</h2>
      <p className="privacy-policy-text">
        We have implemented measures designed to secure your personal data from
        accidental loss and from unauthorized access, use, alteration, and
        disclosure. All information you provide is stored on our secure servers.
      </p>

      <h2 className="privacy-policy-section">Contact Us</h2>
      <p className="privacy-policy-text">
        If you have any questions or complaints about this Privacy Policy,
        please contact us at:{" "}
        <a href="mailto:tech@entrepreneurshipnetwork.net">
          tech@entrepreneurshipnetwork.net
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
