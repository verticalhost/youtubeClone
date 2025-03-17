import React from 'react';

const TermsPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
      
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p>By accessing and using NewTube, you agree to be bound by these Terms and Conditions. If you do not agree with these terms, please do not use our platform.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">2. User Account</h2>
        <ul className="list-disc pl-6">
          <li>You must provide accurate and complete information when creating an account.</li>
          <li>You are responsible for maintaining the confidentiality of your account.</li>
          <li>You agree to accept responsibility for all activities that occur under your account.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">3. Content Guidelines</h2>
        <ul className="list-disc pl-6">
          <li>You retain ownership of the content you upload.</li>
          <li>You grant NewTube a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to use your content.</li>
          <li>You may not upload content that is illegal, offensive, or violates third-party rights.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">4. Intellectual Property</h2>
        <p>All original content, design, and software on NewTube are the property of NewTube and protected by intellectual property laws.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">5. Limitation of Liability</h2>
        <p>NewTube is not liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the platform.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">6. Modifications to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of the platform constitutes acceptance of the updated terms.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">7. Termination</h2>
        <p>We may terminate or suspend your account at our discretion, with or without notice, for violations of these terms.</p>
      </section>

      <div className="text-sm text-muted-foreground">
        <p>Last Updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default TermsPage;
