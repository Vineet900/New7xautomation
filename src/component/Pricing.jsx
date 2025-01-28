import React from "react";

const Pricing = () => {
  const containerStyles = "max-w-4xl mx-auto p-6 bg-gray-50 rounded shadow";
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
      <h1 className={headingStyles}>Pricing</h1>
      <p className={paragraphStyles}>
        All prices are listed in INR and are subject to change without prior notice.
      </p>

      <h2 className={subHeadingStyles}>About 7xautomation LLP</h2>
      <p className={paragraphStyles}>
        7xautomation LLP is a Limited Liability Partnership incorporated on <strong>19 June 2023</strong> 
        and registered with the Registrar of Companies, Chandigarh. The LLP Identification Number (LLPIN) 
        is <strong>ACB-6530</strong>.
      </p>
      <p className={paragraphStyles}>
        <strong>Designated Partners:</strong> Suman Devi and Priyanshu Mankotia.
      </p>
      <p className={paragraphStyles}>
        <strong>Registered Address:</strong>  
        c/o Reenu, Shivalik Avenue, Phase-1B, Anandpur Sahib, Punjab, India - 140126
      </p>
      <p className={paragraphStyles}>
        <strong>Contact Email:</strong>  
        <a href="mailto:Priyanshumankotia@gmail.com" className={linkStyles}>
          Priyanshumankotia@gmail.com
        </a>
      </p>
      <p className={paragraphStyles}>
        As per the Ministry of Corporate Affairs (MCA), financial statements and annual returns 
        are yet to be filed.
      </p>
    </div>
  );
};

export default Pricing;
