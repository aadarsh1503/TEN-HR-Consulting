import { useState } from "react";
import "./ContactForm.css"; // Ensure that your CSS styles are ready
import { useTranslation } from "react-i18next";
import FAQSection from "../FAQ/FAQSection"; // Assuming this is a section in your app

function ContactForm() {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91 IN",
        phone: "",
        company: "",
        inquiry: "PEO & EoR",
        message: "",
    });
    const [formStatus, setFormStatus] = useState(null);

    const countryCodes = [
        { code: "+93", label: "AF" }, // Afghanistan
        { code: "+355", label: "AL" }, // Albania
        { code: "+213", label: "DZ" }, // Algeria
        { code: "+1", label: "AS" }, // American Samoa
        { code: "+376", label: "AD" }, // Andorra
        { code: "+244", label: "AO" }, // Angola
        { code: "+1-264", label: "AI" }, // Anguilla
        { code: "+672", label: "AQ" }, // Antarctica
        { code: "+1-268", label: "AG" }, // Antigua and Barbuda
        { code: "+54", label: "AR" }, // Argentina
        { code: "+374", label: "AM" }, // Armenia
        { code: "+297", label: "AW" }, // Aruba
        { code: "+61", label: "AU" }, // Australia
        { code: "+43", label: "AT" }, // Austria
        { code: "+994", label: "AZ" }, // Azerbaijan
        { code: "+1-242", label: "BS" }, // Bahamas
        { code: "+973", label: "BH" }, // Bahrain
        { code: "+880", label: "BD" }, // Bangladesh
        { code: "+1-246", label: "BB" }, // Barbados
        { code: "+375", label: "BY" }, // Belarus
        { code: "+32", label: "BE" }, // Belgium
        { code: "+501", label: "BZ" }, // Belize
        { code: "+229", label: "BJ" }, // Benin
        { code: "+1-441", label: "BM" }, // Bermuda
        { code: "+975", label: "BT" }, // Bhutan
        { code: "+591", label: "BO" }, // Bolivia
        { code: "+387", label: "BA" }, // Bosnia and Herzegovina
        { code: "+267", label: "BW" }, // Botswana
        { code: "+55", label: "BR" }, // Brazil
        { code: "+246", label: "IO" }, // British Indian Ocean Territory
        { code: "+1-284", label: "VG" }, // British Virgin Islands
        { code: "+673", label: "BN" }, // Brunei
        { code: "+359", label: "BG" }, // Bulgaria
        { code: "+226", label: "BF" }, // Burkina Faso
        { code: "+257", label: "BI" }, // Burundi
        { code: "+855", label: "KH" }, // Cambodia
        { code: "+237", label: "CM" }, // Cameroon
        { code: "+1", label: "CA" }, // Canada
        { code: "+238", label: "CV" }, // Cape Verde
        { code: "+599", label: "CW" }, // Curaçao
        { code: "+61", label: "CX" }, // Christmas Island
        { code: "+61", label: "CC" }, // Cocos (Keeling) Islands
        { code: "+57", label: "CO" }, // Colombia
        { code: "+269", label: "KM" }, // Comoros
        { code: "+243", label: "CD" }, // Congo (Kinshasa)
        { code: "+242", label: "CG" }, // Congo (Brazzaville)
        { code: "+682", label: "CK" }, // Cook Islands
        { code: "+506", label: "CR" }, // Costa Rica
        { code: "+225", label: "CI" }, // Côte d'Ivoire
        { code: "+385", label: "HR" }, // Croatia
        { code: "+53", label: "CU" }, // Cuba
        { code: "+357", label: "CY" }, // Cyprus
        { code: "+420", label: "CZ" }, // Czech Republic
        { code: "+45", label: "DK" }, // Denmark
        { code: "+253", label: "DJ" }, // Djibouti
        { code: "+1-767", label: "DM" }, // Dominica
        { code: "+1-809", label: "DO" }, // Dominican Republic
        { code: "+670", label: "TL" }, // East Timor
        { code: "+593", label: "EC" }, // Ecuador
        { code: "+20", label: "EG" }, // Egypt
        { code: "+503", label: "SV" }, // El Salvador
        { code: "+240", label: "GQ" }, // Equatorial Guinea
        { code: "+291", label: "ER" }, // Eritrea
        { code: "+372", label: "EE" }, // Estonia
        { code: "+268", label: "SZ" }, // Eswatini
        { code: "+251", label: "ET" }, // Ethiopia
        { code: "+500", label: "FK" }, // Falkland Islands
        { code: "+298", label: "FO" }, // Faroe Islands
        { code: "+679", label: "FJ" }, // Fiji
        { code: "+358", label: "FI" }, // Finland
        { code: "+33", label: "FR" }, // France
        { code: "+594", label: "GF" }, // French Guiana
        { code: "+689", label: "PF" }, // French Polynesia
        { code: "+241", label: "GA" }, // Gabon
        { code: "+220", label: "GM" }, // Gambia
        { code: "+995", label: "GE" }, // Georgia
        { code: "+49", label: "DE" }, // Germany
        { code: "+233", label: "GH" }, // Ghana
        { code: "+350", label: "GI" }, // Gibraltar
        { code: "+30", label: "GR" }, // Greece
        { code: "+299", label: "GL" }, // Greenland
        { code: "+1-473", label: "GD" }, // Grenada
        { code: "+590", label: "GP" }, // Guadeloupe
        { code: "+1-671", label: "GU" }, // Guam
        { code: "+502", label: "GT" }, // Guatemala
        { code: "+44-1481", label: "GG" }, // Guernsey
        { code: "+224", label: "GN" }, // Guinea
        { code: "+245", label: "GW" }, // Guinea-Bissau
        { code: "+592", label: "GY" }, // Guyana
        { code: "+509", label: "HT" }, // Haiti
        { code: "+504", label: "HN" }, // Honduras
        { code: "+852", label: "HK" }, // Hong Kong
        { code: "+36", label: "HU" }, // Hungary
        { code: "+354", label: "IS" }, // Iceland
        { code: "+91", label: "IN" }, // India
        { code: "+62", label: "ID" }, // Indonesia
        { code: "+98", label: "IR" }, // Iran
        { code: "+964", label: "IQ" }, // Iraq
        { code: "+353", label: "IE" }, // Ireland
        { code: "+44-1624", label: "IM" }, // Isle of Man
        { code: "+972", label: "IL" }, // Israel
        { code: "+39", label: "IT" }, // Italy
        { code: "+1-876", label: "JM" }, // Jamaica
        { code: "+81", label: "JP" }, // Japan
        { code: "+44-1534", label: "JE" }, // Jersey
        { code: "+962", label: "JO" }, // Jordan
        { code: "+7", label: "KZ" }, // Kazakhstan
        { code: "+254", label: "KE" }, // Kenya
        { code: "+686", label: "KI" }, // Kiribati
        { code: "+383", label: "XK" }, // Kosovo
        { code: "+965", label: "KW" }, // Kuwait
        { code: "+996", label: "KG" }, // Kyrgyzstan
        { code: "+856", label: "LA" }, // Laos
        { code: "+371", label: "LV" }, // Latvia
        { code: "+961", label: "LB" }, // Lebanon
        { code: "+266", label: "LS" }, // Lesotho
        { code: "+231", label: "LR" },

    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formSubmission = {
            access_key: "85452267-67f4-414e-851c-4c986fdfcc3b", // Replace with your actual access key
            ...formData,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formSubmission),
            });

            const result = await response.json();
            if (response.status === 200) {
                setFormStatus("Your form has been submitted successfully.");
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    countryCode: "+91 IN",
                    phone: "",
                    company: "",
                    inquiry: "PEO & EoR",
                    message: "",
                });
            } else {
                setFormStatus(`Failed to submit: ${result.message}`);
            }
        } catch (error) {
            setFormStatus("An error occurred while submitting the form.");
        }
    };

    return (

        <div className="ContactForm">
            <h2 className="contactform-heading">Contact Us</h2>
            <div className="contactform-form-container">
                <div className='contactform-form-section'>
                    <form onSubmit={handleSubmit}>
                        <div className='contactform-form-row'>
                            <div className='contactform-form-group'>
                                <label>{t("First Name *")}</label>
                                <input
                                    type='text'
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='contactform-form-group'>
                                <label>{t("Last Name *")}</label>
                                <input
                                    type='text'
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className='contactform-form-group'>
                            <label>{t("Email *")}</label>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='contactform-form-row'>
                            <div className='contactform-form-group'>
                                <label>{t("Country Code *")}</label>
                                <select
                                    name='countryCode'
                                    value={formData.countryCode}
                                    onChange={handleChange}
                                    required
                                >
                                    {countryCodes.map((country) => (
                                        <option
                                            key={country.code}
                                            value={`${country.code} ${country.label}`}
                                        >
                                            {`${country.code} ${country.label}`}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className='contactform-form-group'>
                                <label>{t("Personal Telephone *")}</label>
                                <input
                                    type='tel'
                                    name='phone'
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className='contactform-form-group'>
                            <label>{t("Company *")}</label>
                            <input
                                type='text'
                                name='company'
                                value={formData.company}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='contactform-form-group'>
                            <label>{t("Reason for inquiry *")}</label>
                            <select
                                name='inquiry'
                                value={formData.inquiry}
                                onChange={handleChange}
                                required
                            >
                                <option value='PEO & EoR'>{t("PEO & EoR")}</option>
                                <option value='Recruitment'>{t("Recruitment")}</option>
                                <option value='HR Consulting'>{t("HR Consulting")}</option>
                                <option value='Payroll Payment'>{t("Payroll Payment")}</option>
                                <option value='Managed Services'>{t("Managed Services")}</option>
                            </select>
                        </div>

                        <div className='contactform-form-group'>
                            <label>{t("How can we help you ?")}</label>
                            <textarea
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type='submit' className='contactform-submit-button'>
                            {t("Submit Enquiry")}
                        </button>
                        {formStatus && <p>{formStatus}</p>}
                    </form>

                </div>
                <div className="contactform-intro-section">
                    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 72 72" fill="none"><g id="carbon:email-new"><path id="Vector" d="M42.75 54H9L8.99325 20.0385L34.7197 37.8495C35.0959 38.1098 35.5425 38.2492 36 38.2492C36.4575 38.2492 36.9041 38.1098 37.2803 37.8495L63 20.0475V40.5H67.5V18C67.4982 16.8071 67.0235 15.6635 66.18 14.82C65.3365 13.9765 64.1929 13.5018 63 13.5H9C7.80689 13.5012 6.66299 13.9757 5.81934 14.8193C4.97568 15.663 4.50119 16.8069 4.5 18V54C4.50179 55.1929 4.97646 56.3365 5.81999 57.18C6.66352 58.0235 7.80707 58.4982 9 58.5H42.75V54ZM58.0477 18L36 33.264L13.9523 18H58.0477Z" fill="#FFBD59"></path><path id="Vector_2" d="M58.5 63C63.4706 63 67.5 58.9706 67.5 54C67.5 49.0294 63.4706 45 58.5 45C53.5294 45 49.5 49.0294 49.5 54C49.5 58.9706 53.5294 63 58.5 63Z" fill="#FFBD59"></path></g></svg>
                    <b>Let us help you with your HR Needs</b>
                    <p>
                        Whether you’re looking to hire top-notch India talent, navigate the complexities of local employment laws, or seeking expert HR advice, Recruitindo is your gateway to business success in India.
                    </p>
                    <p>
                        Don’t let legal hurdles or recruiting challenges slow you down. Our comprehensive services are designed to streamline your operations and fuel your growth.
                    </p>
                    <p>
                        Get Started Today! Fill out the form and one of our experts will get in touch to discuss how we can tailor our services to your unique business needs.
                    </p>
                    <p>
                        With Recruitindo, your journey to expanding your team and scaling your business in India begins with just a click.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default ContactForm;

