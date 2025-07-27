import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Correct import for EmailJS

const Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    alternatePhone: '',
    category: '', // This will map to 'title' in EmailJS template
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submissionError, setSubmissionError] = useState(false);

  // Handles changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    setIsSubmitting(true); // Set submitting state to true
    setSubmitted(false); // Reset submitted status
    setSubmissionError(false); // Reset any previous submission errors

    try {
      // IMPORTANT: Replace with your actual EmailJS Service ID, Template ID, and Public Key
      // These values appear to be correct based on your code:
      const serviceId = 'service_9yil5um';
      const templateId = 'template_uk98q0i';
      const publicKey = '3wr2pUfBBCDDVcI54';

      // EmailJS requires an object for template parameters.
      // The keys in this object MUST match the template variables in your EmailJS template.
      const templateParams = {
        name: form.name, // Maps to {{name}} in EmailJS template
        email: form.email, // Not directly used in your template, but good to send
        phone: form.phone, // Maps to {{phone}} in EmailJS template
        alternatePhone: form.alternatePhone, // Maps to {{alternatePhone}} in EmailJS template
        title: form.category, // Maps to {{title}} in EmailJS template (your 'category' is the 'title')
        message: form.message, // Maps to {{message}} in EmailJS template (if you add it)
      };

      // Send the email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitted(true); // Set submitted status to true on success
      setSubmissionError(false); // Clear any errors
      // Reset the form fields
      setForm({
        name: '',
        email: '',
        phone: '',
        alternatePhone: '',
        category: '',
        message: '',
      });
      // Clear the success message after 4 seconds
      setTimeout(() => setSubmitted(false), 4000);

    } catch (error) {
      console.error("Failed to send email:", error);
      setSubmissionError(true); // Set submission error to true on failure
      setSubmitted(false); // Ensure success message is not shown
      // Clear the error message after 5 seconds
      setTimeout(() => setSubmissionError(false), 5000);
    } finally {
      setIsSubmitting(false); // Always reset submitting state
    }
  };

  return (
    <div className="form-container">
      {/* Moved CSS into a standard <style> tag for broader React compatibility */}
      <style>{`
        .form-container {
          max-width: 600px;
          margin: 50px auto;
          padding: 30px;
          background-color: #383e32; /* Darker background like your image */
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          color: #e0e0e0; /* Light text color */
          font-family: Arial, sans-serif;
        }

        .form-container h2 {
          text-align: center;
          color: #f0f0f0;
          margin-bottom: 25px;
        }

        .contact-form .form-group {
          margin-bottom: 20px;
        }

        .contact-form label {
          display: block;
          margin-bottom: 8px;
          font-weight: bold;
          color: #c0c0c0;
        }

        .contact-form .required {
          color: #ff6b6b; /* Red color for required asterisk */
        }

        .contact-form input[type="text"],
        .contact-form input[type="email"],
        .contact-form input[type="tel"],
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #5a5a5a; /* Darker border */
          border-radius: 6px;
          background-color: #ffffff; /* White input background */
          color: #333; /* Dark text in inputs */
          font-size: 16px;
          box-sizing: border-box; /* Include padding and border in the element's total width and height */
          transition: border-color 0.3s ease;
        }

        .contact-form input[type="text"]:focus,
        .contact-form input[type="email"]:focus,
        .contact-form input[type="tel"]:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          outline: none;
          border-color: #88b04b; /* A subtle focus color */
          box-shadow: 0 0 0 2px rgba(136, 176, 75, 0.3);
        }

        .contact-form select {
          -webkit-appearance: none; /* Remove default arrow on WebKit browsers */
          -moz-appearance: none;    /* Remove default arrow on Firefox */
          appearance: none;
          background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-6.7%200-13.3%202.6-18.4%207.6-5.1%205.1-7.7%2011.7-7.7%2018.4s2.6%2013.3%207.7%2018.4L137.2%20275c5.1%205.1%2011.7%207.7%2018.4%207.7s13.3-2.6%2018.4-7.7l133.4-133.4c5.1-5.1%207.7-11.7%207.7-18.4s-2.6-13.3-7.7-18.4z%22%2F%3E%3C%2Fsvg%3E');
          background-repeat: no-repeat;
          background-position: right 12px top 50%;
          background-size: 12px auto;
        }

        .contact-form textarea {
          resize: vertical; /* Allow vertical resizing only */
          min-height: 100px;
        }

        .contact-form button[type="submit"] {
          display: block;
          width: 150px;
          padding: 12px 20px;
          background-color: #e0e0d1; /* Light beige like your submit button */
          color: #383e32; /* Dark text for the button */
          border: none;
          border-radius: 25px; /* More rounded corners for the button */
          font-size: 18px;
          font-weight: bold;
          cursor: pointer;
          margin: 25px auto 0; /* Center the button */
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .contact-form button[type="submit"]:hover {
          background-color: #d1d1c0; /* Slightly darker on hover */
          transform: translateY(-2px);
        }

        .contact-form button[type="submit"]:disabled {
          background-color: #a0a090;
          cursor: not-allowed;
        }

        .success-message {
          color: #4CAF50; /* Green for success */
          text-align: center;
          margin-top: 20px;
          font-weight: bold;
        }

        .error-message {
          color: #f44336; /* Red for error */
          text-align: center;
          margin-top: 20px;
          font-weight: bold;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .form-container {
            margin: 30px 15px;
            padding: 20px;
          }
        }
      `}</style>
      <h2>Get Your Free Design Consultation</h2>
      <form id ="contact" onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name <span className="required">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email <span className="required">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number <span className="required">*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="alternatePhone">Alternate Phone Number <span className="required">*</span></label>
          <input
            type="tel"
            id="alternatePhone"
            name="alternatePhone"
            value={form.alternatePhone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category <span className="required">*</span></label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select...</option>
            <option value="Electrical Contract">Electrical Contract</option> {/* Updated values to match template text */}
            <option value="Interior Design">Interior Design</option>
            <option value="Construction">Construction</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">How Can We Help? </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
          ></textarea>
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>

        {submitted && (
          <p className="success-message">Your message has been sent successfully!</p>
        )}
        {submissionError && (
          <p className="error-message">Failed to send your message. Please try again later.</p>
        )}
      </form>
    </div>
  );
};

export default Form;