import { useState } from "react";

const ApplicationForm = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileValidation = (file) => {
    const validExtensions = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const maxSize = 1 * 1024 * 1024; // 1MB
    if (!validExtensions.includes(file.type)) {
      return "Invalid file type. Only PDF, DOC, and DOCX are allowed.";
    }
    if (file.size > maxSize) {
      return "File size exceeds the limit of 1MB.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const file = e.target.resume.files[0];
    const fileValidationMessage = handleFileValidation(file);

    if (fileValidationMessage) {
      setErrorMessage(fileValidationMessage);
      setSuccessMessage("");
      return;
    }

    const formData = new FormData(e.target); // Collect the form data

    try {
      const response = await fetch("http://localhost:3000/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorResult = await response.json();
        throw new Error(errorResult.message || "Network response was not ok.");
      }

      const result = await response.json();
      setSuccessMessage(
        result.message || "Application submitted successfully!"
      );
      setErrorMessage("");
    } catch (error) {
      console.error("Error:", error); // Logs error to the console
      setErrorMessage(
        "An error occurred while submitting your application. Please try again."
      );
      setSuccessMessage("");
    }
  };

  return (
    <div className='application-form-container'>
      <h2>Submit Your Job Application</h2>
      <form
        id='jobApplicationForm'
        onSubmit={handleSubmit}
        encType='multipart/form-data'
      >
        {/* First Name and Last Name */}
        <div className='frm-r1'>
          <div className='frm-grp1'>
            <label htmlFor='firstName'>First Name:</label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              placeholder='John'
              required
            />
          </div>
          <div className='frm-grp1'>
            <label htmlFor='lastName'>Last Name:</label>
            <input
              type='text'
              id='lastName'
              name='lastName'
              placeholder='Doe'
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className='frm-grp1'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            placeholder='Email'
            required
          />
        </div>

        {/* Country Code and Personal Telephone */}
        <div className='frm-r1'>
          <div className='frm-grp1'>
            <label htmlFor='countryCode'>Country Code:</label>
            <select id='countryCode' name='countryCode' required>
              <option value='+1'>(+1) CA</option>
              <option value='+91'>(+91) IN</option>
              <option value='+44'>(+44) UK</option>
              {/* Add more options as necessary */}
            </select>
          </div>
          <div className='frm-grp1'>
            <label htmlFor='phone'>Personal Telephone:</label>
            <input
              type='tel'
              id='phone'
              name='phone'
              placeholder='Enter phone'
              required
            />
          </div>
        </div>

        {/* Current Company */}
        <div className='frm-grp1'>
          <label htmlFor='currentCompany'>Current Company (Optional):</label>
          <input
            type='text'
            id='currentCompany'
            name='currentCompany'
            placeholder='Enter company'
          />
        </div>

        {/* Upload Resume */}
        <div className='frm-grp1'>
          <label htmlFor='resume'>Upload CV (PDF/DOC/DOCX):</label>
          <input
            type='file'
            id='resume'
            name='resume'
            accept='.pdf, .doc, .docx'
            required
          />
        </div>

        {/* Submit Button */}
        <button type='submit' className='submit-btn'>
          Submit Enquiry
        </button>
      </form>

      {/* Success/Failure Messages */}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};
export default ApplicationForm;
