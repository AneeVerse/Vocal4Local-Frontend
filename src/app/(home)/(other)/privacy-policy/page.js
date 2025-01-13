import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Vocal4Local</title>
      </Head>

      <div className="min-h-screen bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-6">Privacy Policy</h1>
          <p className="mb-6 text-gray-700">
            At Vocal4Local, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services. By using our website, you agree to the terms of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect the following types of information from you:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-700">
            <li>Personal Information: Name, email address, phone number, and other contact details provided by you.</li>
            <li>Donation Information: Details of your donations, including payment information (processed securely).</li>
            <li>Usage Data: Information about how you interact with our website, including your IP address, browser type, and pages visited.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">
            The information we collect is used for the following purposes:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-700">
            <li>To provide and improve our services.</li>
            <li>To process donations and issue receipts.</li>
            <li>To communicate with you about our activities, events, and updates.</li>
            <li>To ensure the security of our website and services.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Sharing Your Information</h2>
          <p className="mb-4">
            We do not sell, rent, or share your personal information with third parties for their marketing purposes. However, we may share your information with:
          </p>
          <ul className="list-disc ml-6 mb-4 text-gray-700">
            <li>Service providers that help us operate our website and services (e.g., payment processors).</li>
            <li>Legal authorities if required by law or to protect our rights and safety.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. Data Security</h2>
          <p className="mb-4">
            We take appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            Our website uses cookies and other tracking technologies to enhance your browsing experience. You can choose to disable cookies through your browser settings, but some features of our website may not function properly without them.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Third-Party Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of those websites before providing any personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Your Rights</h2>
          <p className="mb-4">
            You have the right to access, update, and delete your personal information. If you wish to exercise these rights, please contact us at:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> <a href="mailto:support@vocal4local.com" className="text-green-600 underline">support@vocal4local.com</a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Children's Privacy</h2>
          <p className="mb-4">
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal information, we will take steps to delete it.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the updated policy will be effective immediately upon posting. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions or concerns about our Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> <a href="mailto:support@vocal4local.com" className="text-green-600 underline">support@vocal4local.com</a>
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong> +91-12345-67890
          </p>

        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
