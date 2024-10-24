import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Navbar = ({ isSidebarOpen, handleToggleSidebar }) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const storedLanguage = localStorage.getItem("language");
    return storedLanguage ? storedLanguage : "English";
  });

  const dropdownRefs = useRef({});

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage === "English" ? "en" : "hi");
    localStorage.setItem("language", selectedLanguage);
  }, [selectedLanguage, i18n]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isOutsideDropdown =
        !dropdownRefs.current["services"]?.contains(event.target) &&
        !dropdownRefs.current["pricing"]?.contains(event.target) &&
        !dropdownRefs.current["language"]?.contains(event.target) &&
        !dropdownRefs.current["mobileServices"]?.contains(event.target) &&
        !dropdownRefs.current["mobilePricing"]?.contains(event.target) &&
        !dropdownRefs.current["mobileLanguage"]?.contains(event.target);

      if (isOutsideDropdown) {
        setDropdownOpen({}); // Close all dropdowns
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    if (isSidebarOpen) {
      handleToggleSidebar();
    }
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (dropdownKey) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownKey]: !prevState[dropdownKey],
    }));
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  const handleLinkClick = (dropdownKey, isMobile = false) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdownKey]: false, // Close the dropdown when a link is clicked
    }));
  
    if (isMobile) {
      setIsOpen(false); // Close mobile menu if it was open
    }
  };

  return (
    <nav className="bg-base-100 sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex">
              <NavLink to="/" className="text-black font-bold text-xl m-3">
                {t("TEN HR Consulting")}
              </NavLink>
            </div>
          </div>
          <div className="flex items-center ml-auto space-x-4 text-black hidden lg:flex">
            <NavLink
              to="/aboutUs"
              className={({ isActive }) => 
                `text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-orange-100 text-orange-400' : ''}`
              }>
              {t("About")}
            </NavLink>

            {/* Services Dropdown */}
            <div className="relative flex items-center">
              <button
                onClick={() => toggleDropdown("services")}
                className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {t("Services")}
                <IoMdArrowDropdown
                  className={`inline-block ml-2 transition-transform ${
                    dropdownOpen["services"] ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {dropdownOpen["services"] && (
                <div
                  className="absolute top-full right-0 mt-1 w-48 bg-base-100 rounded-md shadow-lg"
                  ref={(el) => (dropdownRefs.current["services"] = el)}
                >
                  <NavLink
                    to="/services/peo&eor"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? 'bg-orange-100 text-orange-400' : ''
                      }`
                    }
                    onClick={() => handleLinkClick("services")}
                  >
                    {t("PEO & EoR")}
                  </NavLink>
                  <NavLink
                    to="/services/recruitment"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? 'bg-orange-100 text-orange-400' : ''
                      }`
                    }
                    onClick={() => handleLinkClick("services")}
                  >
                    {t("Recruitment")}
                  </NavLink>
                  <NavLink
                    to="/services/hrConsulting"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? 'bg-orange-100 text-orange-400' : ''
                      }`
                    }
                    onClick={() => handleLinkClick("services")}
                  >
                    {t("HR Consulting")}
                  </NavLink>
                  <NavLink
                    to="/services/managedServices"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? 'bg-orange-100 text-orange-400' : ''
                      }`
                    }
                    onClick={() => handleLinkClick("services")}
                  >
                    {t("Managed Services")}
                  </NavLink>
                  <NavLink
                    to="/services/payrollProcessing"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? 'bg-orange-100 text-orange-400' : ''
                      }`
                    }
                    onClick={() => handleLinkClick("services")}
                  >
                    {t("PayrollProcessing")}
                  </NavLink>
                </div>
              )}
            </div>

            {/* Pricing Dropdown */}
            <div className="relative flex items-center">
              <button
                onClick={() => toggleDropdown("pricing")}
                className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {t("Pricing")}
                <IoMdArrowDropdown
                  className={`inline-block ml-2 transition-transform ${
                    dropdownOpen["pricing"] ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {dropdownOpen["pricing"] && (
                <div
                  className="absolute top-full right-0 mt-1 w-48 bg-base-100 rounded-md shadow-lg"
                  ref={(el) => (dropdownRefs.current["pricing"] = el)}
                >
                  <NavLink
                    to="/pricing/peo&eor"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? 'bg-orange-100 text-orange-400' : ''
                      }`
                    }
                    onClick={() => handleLinkClick("pricing")}
                  >
                    {t("PEO & EoR")}
                  </NavLink>
                  <NavLink
                    to="/pricing/recruitment"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? 'bg-orange-100 text-orange-400' : ''
                      }`
                    }
                    onClick={() => handleLinkClick("pricing")}
                  >
                    {t("Recruitment")}
                  </NavLink>
                  <NavLink
                    to="/pricing/hrConsulting"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? 'bg-orange-100 text-orange-400' : ''
                      }`
                    }
                    onClick={() => handleLinkClick("pricing")}
                  >
                    {t("HR Consulting")}
                  </NavLink>
                  <NavLink
                    to="/pricing/managedServices"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? 'bg-orange-100 text-orange-400' : ''
                      }`
                    }
                    onClick={() => handleLinkClick("pricing")}
                  >
                    {t("Managed Services")}
                  </NavLink>
                  <NavLink
                    to="/pricing/payrollProcessing"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? 'bg-orange-100 text-orange-400' : ''
                      }`
                    }
                    onClick={() => handleLinkClick("pricing")}
                  >
                    {t("PayrollProcessing")}
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink
              to="/calculator"
              className={({ isActive }) => 
                `text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-orange-100 text-orange-400' : ''}`
              }
            >
              {t("Calculator")}
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) => 
                `text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-orange-100 text-orange-400' : ''}`
              }
            >
              {t("Resources")}
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive }) => 
                `text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-orange-100 text-orange-400' : ''}`
              }
            >
              {t("Contact Us")}
            </NavLink>

            {/* Language Selector */}
            {/* <div className="relative flex items-center ">
              <button
                onClick={() => toggleDropdown("language")}
                className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium flex"
              >
                {selectedLanguage} <IoMdArrowDropdown />
              </button>
              {dropdownOpen["language"] && (
                <div
                  className="absolute top-full right-0 mt-1 w-32 bg-base-100 rounded-md shadow-lg"
                  ref={(el) => (dropdownRefs.current["language"] = el)}
                >
                  <button
                    onClick={() => handleLanguageChange("English")}
                    className="block w-full text-left px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t("English")}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("हिंदी")}
                    className="block w-full text-left px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t("Hindi")}
                  </button>
                </div>
              )}
            </div> */}
            <NavLink
            to="/jobVacancies"
            className={({ isActive }) =>
              `btn btn-warning text-black-300 hover:bg-warning-600 hover:text-white rounded-md text-sm font-small cursor-pointer ${isActive ? 'bg-warning-600 text-white' : ''}`
            }
          >
            {t("Job Vacancies")}
          </NavLink>

          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              {isOpen ? <IoMdClose size={24} /> : <FaBarsStaggered size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden ">
          <div className="flex flex-col fixed top-0 left-0 mt-16 w-full bg-base-100 p-4">
          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              `text-black-300 hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-orange-100 text-orange-400' : ''}`
            }
            onClick={() => handleLinkClick("aboutUs", true)}
          >
            {t("About")}
          </NavLink>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("mobileServices")}
                className="block text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium w-full text-left focus:outline-none"
              >
                {t("Services")}
                <IoMdArrowDropdown
                  className={`inline-block ml-2 transition-transform ${
                    dropdownOpen["mobileServices"] ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {dropdownOpen["mobileServices"] && (
                <div
                  className="mt-1 w-full bg-base-100 rounded-md shadow-lg"
                  ref={(el) => (dropdownRefs.current["mobileServices"] = el)}
                >
                  <NavLink
                    to="/services/peo&eor"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? "bg-orange-100 text-orange-400" : ""
                      }`
                    }
                    onClick={() => handleLinkClick("mobileServices", true)}
                  >
                    {t("PEO & EoR")}
                  </NavLink>
                  <NavLink
                    to="/services/recruitment"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? "bg-orange-100 text-orange-400" : ""
                      }`
                    }
                    onClick={() => handleLinkClick("mobileServices", true)}
                  >
                    {t("Recruitment")}
                  </NavLink>
                  <NavLink
                    to="/services/hrConsulting"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? "bg-orange-100 text-orange-400" : ""
                      }`
                    }
                    onClick={() => handleLinkClick("mobileServices", true)}
                  
                  >
                    {t("HR Consulting")}
                  </NavLink>
                  <NavLink
                    to="/services/managedServices"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? "bg-orange-100 text-orange-400" : ""
                      }`
                    }
                    onClick={() => handleLinkClick("mobileServices", true)}
                  >
                    {t("Managed Services")}
                  </NavLink>
                  <NavLink
                    to="/services/payrollProcessing"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? "bg-orange-100 text-orange-400" : ""
                      }`
                    }
                    onClick={() => handleLinkClick("mobileServices", true)}
                  >
                    {t("PayrollProcessing")}
                  </NavLink>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown("mobilePricing")}
                className="block text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium w-full text-left focus:outline-none"
              >
                {t("Pricing")}
                <IoMdArrowDropdown
                  className={`inline-block ml-2 transition-transform ${
                    dropdownOpen["mobilePricing"] ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {dropdownOpen["mobilePricing"] && (
                <div
                  className="bg-base-100 rounded-md shadow-lg mt-1 w-full"
                  ref={(el) => (dropdownRefs.current["mobilePricing"] = el)}
                >
                  <NavLink
                    to="/pricing/peo&eor"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? "bg-orange-100 text-orange-400" : ""
                      }`
                    }
                    onClick={() => handleLinkClick("mobilePricing", true)}
                  >
                    {t("PEO & EoR")}
                  </NavLink>
                  <NavLink
                    to="/pricing/recruitment"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? "bg-orange-100 text-orange-400" : ""
                      }`
                    }
                    onClick={() => handleLinkClick("mobilePricing", true)}
                  >
                    {t("Recruitment")}
                  </NavLink>
                  <NavLink
                    to="/pricing/hrConsulting"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? "bg-orange-100 text-orange-400" : ""
                      }`
                    }
                    onClick={() => handleLinkClick("mobilePricing", true)}
                  >
                    {t("HR Consulting")}
                  </NavLink>
                  <NavLink
                    to="/pricing/managedServices"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? "bg-orange-100 text-orange-400" : ""
                      }`
                    }
                    onClick={() => handleLinkClick("mobilePricing", true)}
                  >
                    {t("Managed Services")}
                  </NavLink>
                  <NavLink
                    to="/pricing/payrollProcessing"
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600 ${
                        isActive ? "bg-orange-100 text-orange-400" : ""
                      }`
                    }
                    onClick={() => handleLinkClick("mobilePricing", true)}
                  >
                    {t("PayrollProcessing")}
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink
              to="/calculator"
              className={({ isActive }) =>
                `text-black-300 hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-orange-100 text-orange-400' : ''}`
              }
              onClick={() => handleLinkClick("calculator", true)}
            >
              {t("Calculator")}
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `text-black-300 hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-orange-100 text-orange-400' : ''}`
              }
              onClick={() => handleLinkClick("resources", true)}
            >
              {t("Resources")}
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                `text-black-300 hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-orange-100 text-orange-400' : ''}`
              }
              onClick={() => handleLinkClick("contactUs", true)}
            >
              {t("Contact Us")}
            </NavLink>

            {/* Language Selector */}
            {/* <div className="relative">
              <button
                onClick={() => toggleDropdown("mobileLanguage")}
                className="text-black-300 hover:bg-orange-200 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium flex"
              >
                {selectedLanguage} <IoMdArrowDropdown />
              </button>
              {dropdownOpen["mobileLanguage"] && (
                <div
                  className="bg-base-100 rounded-md shadow-lg mt-1 w-full"
                  ref={(el) => (dropdownRefs.current["mobileLanguage"] = el)}
                >
                  <button
                    onClick={() => handleLanguageChange("English")}
                    className="block w-full text-left px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t("English")}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("हिंदी")}
                    className="block w-full text-left px-4 py-2 text-sm text-black-300 hover:bg-orange-200 hover:text-orange-600"
                  >
                    {t("Hindi")}
                  </button>
                </div>
              )}
            </div> */}

            <NavLink
            to="/jobVacancies"
            className={({ isActive }) =>
              `text-black-300 hover:bg-orange-200 hover:text-orange-600 block px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-orange-100 text-orange-400' : ''}`
            }
            onClick={() => handleLinkClick("jobVacancies", true)}
          >
            {t('Job Vacancies')}
          </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;









