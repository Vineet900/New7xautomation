import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 py-10 px-6 sm:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <div className="text-center">
          <img
            src="/logo2.png" // Replace with your logo URL
            alt="Automate Channels Logo"
            className="h-[25vh] mx-auto "
          />
        </div>
        <h1 className="text-2xl font-bold text-center mt-6 mb-4">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Last Updated: January 28th, 2023
        </p>
        <section className="text-gray-700 leading-relaxed mb-6">
          <p>
            Automate Channels, and{" "}
            <a
              href="https://7xautomation.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              7xautomation
            </a>{" "}
            (“Automate Channels,” “us,” “we,” or “our”) thank you for visiting
            the online and mobile resources we publish. We use the words “you”
            and “your” to refer to you, the reader, and other visitors to our
            online and mobile resources, who must be over the age of 13.
          </p>
          <p>
            Our privacy statement (“this statement,” “this privacy statement,”
            and “our statement”) informs you about the types of personal
            information we collect, how we use it, who we share it with, and
            what we do to protect it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mt-6 mb-4">
            Who We Collect Personal Information From
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may collect personal information from the following groups of
            individuals:
          </p>
          <ul className="list-disc pl-8 mb-6">
            <li>Visitors to, and users of, our online and mobile resources</li>
            <li>Our customers</li>
            <li>
              Current members of our workforce and those who apply for posted
              jobs
            </li>
            <li>Third-party vendors and business partners</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-6">
            "Personal information" generally means data that can be used to
            identify you or that can be easily linked to you (e.g., your name,
            address, telephone number, email address, social security number,
            and date of birth). Privacy laws in some jurisdictions may include
            unique elements in what they consider to be personal information.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            If those laws apply to us, such as the California Consumer Privacy
            Act (“CCPA”) or the European General Data Protection Regulation
            (“GDPR”), our use of "personal information" includes the unique
            elements required by those laws.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            The types of information we collect from each group and how we use
            it can vary. Also, an individual may fall into more than one of
            these groups.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
