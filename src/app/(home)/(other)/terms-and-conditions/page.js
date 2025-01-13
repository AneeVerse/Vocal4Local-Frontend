import Head from 'next/head';

const TermsAndConditions = () => {
  return (
    <>
      <Head>
        <title>Terms and Conditions | Vocal4Local</title>
      </Head>

      <div className="min-h-screen bg-gray-100 text-gray-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-green-600 mb-6">Terms and Conditions</h1>
          <p className="mb-6 text-gray-700">
            These Terms and Conditions govern your use of the Vocal4Local website, services, and activities. By accessing our website, you agree to comply with these terms. Please read them carefully before using the website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Vocal4Local! We are committed to promoting local causes and supporting communities through our platform. These terms outline your rights and obligations while using our website.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">2. Acceptance of Terms</h2>
          <p className="mb-4">
            By using our website, you agree to be bound by these terms. If you do not agree with any part of these terms, please do not use our website. These terms may be updated from time to time, and your continued use of the website constitutes acceptance of any changes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">3. Our Mission</h2>
          <p className="mb-4">
            Vocal4Local is an NGO dedicated to promoting local businesses, artisans, and communities. Our mission is to empower local talent and foster a sense of community support through various initiatives, including donations, volunteering, and campaigns.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">4. User Responsibilities</h2>
          <ul className="list-disc ml-6 mb-4 text-gray-700">
            <li>Ensure that the information you provide is accurate and up to date.</li>
            <li>Use the website for lawful purposes only.</li>
            <li>Respect the rights and privacy of other users.</li>
            <li>Avoid posting any harmful, offensive, or inappropriate content.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">5. Donations and Contributions</h2>
          <p className="mb-4">
            Vocal4Local accepts donations to support our initiatives. All contributions made through the website are voluntary and will be used for community projects. We do not offer refunds for donations made through our platform.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">6. Intellectual Property Rights</h2>
          <p className="mb-4">
            All content on this website, including text, images, graphics, logos, and other materials, is the property of Vocal4Local. You may not use, copy, or distribute any content without our permission.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">7. Privacy Policy</h2>
          <p className="mb-4">
            Your privacy is important to us. Please refer to our <a href="/privacy-policy" className="text-green-600 underline">Privacy Policy</a> for details on how we collect, use, and protect your personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            Vocal4Local will not be held liable for any damages arising from the use of our website. We do not guarantee uninterrupted access to the website or the accuracy of the information provided. Users are responsible for their own use of the platform.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">9. External Links</h2>
          <p className="mb-4">
            Our website may contain links to third-party websites. We are not responsible for the content or practices of any linked sites. Users should exercise caution when visiting external websites.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">10. Changes to Terms</h2>
          <p className="mb-4">
            Vocal4Local reserves the right to modify these terms at any time. We will notify users of significant changes through our website or via email. Continued use of the website after changes are posted constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">11. Governing Law</h2>
          <p className="mb-4">
            These terms are governed by the laws of india. Any disputes arising from the use of our website will be subject to the exclusive jurisdiction of the courts in Maharashtra.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">12. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these terms, please contact us at:
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

export default TermsAndConditions;
