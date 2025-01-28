import React from "react";

const RefundPolicy = () => {
  const containerStyles =
    "max-w-4xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg";
  const headingStyles = "text-2xl font-bold text-gray-800 mb-4";
  const paragraphStyles = "text-gray-700 mb-4 leading-relaxed";
  const linkStyles = "text-blue-600 hover:underline";

  return (
    <div className={containerStyles}>
      <img
        src="/logo2.png" // Replace with your logo URL
        alt="Automate Channels Logo"
        className="h-[25vh] mx-auto "
      />
      <h1 className={headingStyles}>Refund and Cancellation Policy</h1>
      <p className={paragraphStyles}>
        Refunds will be processed within <strong>5-7 working days</strong> and
        credited to the customer's <strong>bank account</strong>.
      </p>
      <p className={paragraphStyles}>
        Refunds and cancellations must comply with the specific terms and
        conditions associated with the products and services available on the
        website.
      </p>
      <p className={paragraphStyles}>
        To request a refund or cancellation, please contact our support team at
        <a
          href="mailto:support@yourcompany.com" // Replace with your support email
          className={linkStyles}
        >
          support@yourcompany.com
        </a>
        . Provide your order details to help us process your request.
      </p>
      <p className={paragraphStyles}>
        Certain products or services may not be eligible for refunds or
        cancellations. Please refer to the specific terms and conditions during
        the purchase process for more details.
      </p>
    </div>
  );
};

export default RefundPolicy;
