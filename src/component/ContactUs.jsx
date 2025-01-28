import React from "react";

const ContactUs = () => {
  const containerStyles = "max-w-3xl mx-auto p-6 bg-gray-50 rounded shadow";
  const headingStyles = "text-2xl font-bold text-gray-800 mb-4";
  const subHeadingStyles = "text-xl font-semibold text-gray-800 mt-6 mb-2";
  const paragraphStyles = "text-gray-700 mb-4 leading-relaxed";
  const linkStyles = "text-blue-600 hover:underline";

  return (
    <div className={containerStyles}>
      <img
        src="/logo2.png" // Replace with your logo URL
        alt="Automate Channels Logo"
        className="h-[25vh] mx-auto "
      />
      <h1 className={headingStyles}>Contact Us</h1>
      <p className={paragraphStyles}>
        Reach out to us via the following methods:
      </p>

      <div>
        <h2 className={subHeadingStyles}>Phone</h2>
        <p className={paragraphStyles}>
          <a href="tel:+919501752810" className={linkStyles}>
            +91 95017-52810
          </a>
        </p>

        <h2 className={subHeadingStyles}>Email</h2>
        <p className={paragraphStyles}>
          <a href="mailto:priyanshumankotia@gmail.com" className={linkStyles}>
            priyanshumankotia@gmail.com
          </a>
        </p>

        <h2 className={subHeadingStyles}>Address</h2>
        <p className={paragraphStyles}>
          c/o Reenu, Shivalik Avenue, Phase-1B, Anandpur Sahib, Punjab, India -
          140126
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
