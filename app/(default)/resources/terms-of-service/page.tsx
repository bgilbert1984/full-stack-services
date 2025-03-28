export const metadata = {
  title: "Terms of Service | Legal Information | Acrapt.us",
  description: "Our terms of service outline the rules, guidelines, and legal agreements for using Acrapt.us services, products, and platforms.",
};

import PageIllustration from "@/components/page-illustration";

export default function TermsOfServicePage() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Terms of Service
              </h1>
              <p className="text-xl text-indigo-200/65">
                Last updated: March 28, 2025
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none text-indigo-200/65">
              <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Acrapt.us website or any services provided by Acrapt.us ("we", "us", or "our").</p>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-200">1. Acceptance of Terms</h2>
              <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.</p>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-200">2. Description of Services</h2>
              <p>Acrapt.us provides various technology services including but not limited to WebXR development, API integrations, SaaS solutions, medical imaging software, RF sensing technology, and Three.js development services. The specific services provided to you will be outlined in separate agreements or statements of work.</p>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-200">3. User Accounts</h2>
              <p>When you create an account with us, you must provide accurate, complete, and current information. You are responsible for safeguarding the password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-200">4. Intellectual Property</h2>
              <p>Our services and all related content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by Acrapt.us, its licensors, or other providers and are protected by copyright, trademark, patent, trade secret, and other intellectual property laws.</p>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-200">5. User Content</h2>
              <p>You retain all rights to any content you submit, post, or display on or through our services. By providing content to us, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media formats.</p>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-200">6. Prohibited Activities</h2>
              <p>When using our services, you agree not to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to interfere with or disrupt our services</li>
                <li>Attempt to access data that is not intended for you</li>
                <li>Use our services for any purpose that is unlawful or prohibited by these Terms</li>
              </ul>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-200">7. Limitation of Liability</h2>
              <p>To the maximum extent permitted by law, in no event shall Acrapt.us, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.</p>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-200">8. Termination</h2>
              <p>We may terminate or suspend your account and access to our services immediately, without prior notice or liability, for any reason, including without limitation if you breach the Terms. Upon termination, your right to use the services will immediately cease.</p>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-200">9. Changes to Terms</h2>
              <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
              
              <h2 className="mt-8 text-xl font-semibold text-gray-200">10. Contact Us</h2>
              <p>If you have any questions about these Terms, please contact us at legal@acrapt.us.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}