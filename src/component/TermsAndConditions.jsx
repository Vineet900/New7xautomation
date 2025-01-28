import React from "react";

const TermsAndConditions = () => {
  const containerStyles =
    "max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg";
  const headingStyles = "text-2xl font-bold text-gray-800 mb-4";
  const subheadingStyles = "text-xl font-semibold text-gray-800 mt-6 mb-3";
  const paragraphStyles = "text-gray-700 mb-4 leading-relaxed";
  const linkStyles = "text-blue-600 hover:underline";

  return (
    <div className={containerStyles}>
      <img
        src="/logo2.png" // Replace with your logo URL
        alt="Automate Channels Logo"
        className="h-[25vh] mx-auto "
      />
      <h1 className={headingStyles}>Terms and Conditions</h1>
      <p className={paragraphStyles}>
        These Terms and Conditions ("Terms") govern your access to and use of
        our website, services, and products offered by Automate Channels and
        7xautomation ("us," "we," or "our"). By accessing or using our website,
        you agree to be bound by these Terms. If you do not agree with any part
        of these Terms, you must not use our website.
      </p>

      <h2 className={subheadingStyles}>1. General Terms of Use</h2>
      <p className={paragraphStyles}>
        You must be at least 13 years old to use our website. By using our
        website, you represent and warrant that you are over the age of 13. If
        you are under the age of 13, you must not use our website or services.
      </p>
      <p className={paragraphStyles}>
        We reserve the right to modify, suspend, or terminate our website or
        services at any time, without notice or liability.
      </p>

      <h2 className={subheadingStyles}>2. User Responsibilities</h2>
      <p className={paragraphStyles}>
        You agree to use our website and services in accordance with all
        applicable laws and regulations. You are responsible for all activities
        that occur under your account and agree not to engage in any prohibited
        activities, such as:
      </p>
      <ul className="list-disc pl-8 mb-6">
        <li>Violating any local, state, or international laws</li>
        <li>Using the website for fraudulent purposes</li>
        <li>Distributing harmful or malicious software</li>
        <li>Impersonating another person or entity</li>
      </ul>

      <h2 className={subheadingStyles}>3. Intellectual Property</h2>
      <p className={paragraphStyles}>
        All content on our website, including text, graphics, logos, images, and
        software, is the property of Automate Channels or its content suppliers
        and is protected by intellectual property laws. You are granted a
        limited, non-exclusive license to access and use the website for
        personal, non-commercial use only.
      </p>

      <h2 className={subheadingStyles}>4. Limitation of Liability</h2>
      <p className={paragraphStyles}>
        In no event will Automate Channels, its affiliates, or its employees be
        liable for any indirect, incidental, special, consequential, or punitive
        damages arising out of or in connection with the use of our website,
        services, or products.
      </p>

      <h2 className={subheadingStyles}>5. Privacy and Data Collection</h2>
      <p className={paragraphStyles}>
        Your use of our website is governed by our{" "}
        <a href="/privacy-policy" className={linkStyles}>
          Privacy Policy
        </a>
        , which outlines how we collect, use, and protect your personal data.
      </p>

      <h2 className={subheadingStyles}>
        6. Termination and Suspension of Accounts
      </h2>
      <p className={paragraphStyles}>
        We reserve the right to suspend or terminate your access to our website
        or services at our discretion, without notice or liability, if you
        violate these Terms.
      </p>

      <h2 className={subheadingStyles}>7. Governing Law</h2>
      <p className={paragraphStyles}>
        These Terms are governed by and construed in accordance with the laws of
        [Your Country/State]. Any disputes arising from these Terms will be
        resolved in the appropriate courts of [Your Jurisdiction].
      </p>

      <h2 className={subheadingStyles}>8. Changes to Terms</h2>
      <p className={paragraphStyles}>
        We may update these Terms from time to time. When we do, we will update
        the "Last Updated" date at the top of this page. By continuing to use
        our website after any changes, you agree to be bound by the updated
        Terms.
      </p>

      <h2 className={subheadingStyles}>9. Contact Us</h2>
      <p className={paragraphStyles}>
        If you have any questions about these Terms, please contact us at{" "}
        <a href="mailto:support@yourcompany.com" className={linkStyles}>
          support@yourcompany.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsAndConditions;
