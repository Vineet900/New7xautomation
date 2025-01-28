import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8 px-4 text-sm flex flex-col items-center">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          ©2025-2030 Copyright Automate Channels. All Rights Reserved
          <br />
          <Link
            to="/Privacy"
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link
            to="/Refund"
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            Refund
          </Link>{" "}
          |{" "}
          <Link
            to="/TermsAndCondition"
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            Terms and Condition
          </Link>{" "}
          |{" "}
          <Link
            to="/Pricing"
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            Pricing
          </Link>{" "}
          |{" "}
          <Link
            to="/ContactUs"
            className="text-blue-500 hover:underline"
            rel="noopener noreferrer"
          >
            Contact Us
          </Link>
        </p>

        <p className="mb-4 text-xs leading-relaxed">
          This site is not a part of the Facebook, Google, or YouTube website or
          Facebook/Google/YouTube Inc. Additionally, this site is NOT endorsed
          by those platforms.
        </p>

        <p className="text-xs font-bold leading-relaxed">
          <strong>Disclaimer:</strong> Results not typical. Your results will
          vary based on many factors like timing, work ethic, trends, team,
          budget, etc. From October 2022 - October 2023 our research suggests
          the average client made $9,444 per month. This average does not mean
          guarantee of your result, simply what others have been able to do.
          Joining a program or building a side hustle can be risky and does not
          always work out, so you should do your own research beforehand. Caleb
          Boxx & Automate Channels is also NOT affiliated or partnered with
          YouTube (or Google) the company.
        </p>
      </div>
    </footer>
  );
};

export default Footer;