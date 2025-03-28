export const metadata = {
  title: "SaaS & Licensing Solutions | Software Licensing Services | Acrapt.us",
  description: "Custom SaaS development and software licensing solutions for businesses. Secure, scalable, and customizable subscription-based software and licensing systems.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function SaasLicensingServices() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                SaaS & Licensing Solutions
              </h1>
              <p className="text-xl text-indigo-200/65">
                From custom SaaS application development to comprehensive software licensing systems, we deliver scalable solutions that protect your intellectual property while creating recurring revenue streams.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">Custom SaaS Development</h2>
                <p className="mb-8 text-indigo-200/65">
                  We build cloud-based software solutions that deliver value through the subscription model. Our team handles everything from architecture design to ongoing maintenance, allowing you to focus on growing your customer base rather than infrastructure management.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Licensing & Subscription Management</h3>
                <p className="mb-8 text-indigo-200/65">
                  Protect your software investments with robust licensing systems. We develop custom licensing solutions that prevent unauthorized use, enable flexible pricing tiers, and manage subscription lifecycles to maximize revenue and customer satisfaction.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Our SaaS & Licensing Services Include:</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• End-to-end SaaS application development</li>
                  <li>• Multi-tenant architecture implementation</li>
                  <li>• Subscription billing and payment processing integration</li>
                  <li>• License key generation and validation systems</li>
                  <li>• Feature-based access control and licensing</li>
                  <li>• Usage analytics and reporting dashboards</li>
                  <li>• SaaS migration for existing software products</li>
                </ul>
              </div>

              <div className="md:w-5/12">
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Benefits of Our SaaS Solutions</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Scalable Infrastructure</strong>: Cloud-native architectures that grow with your customer base without sacrificing performance.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Predictable Revenue</strong>: Subscription models that generate reliable monthly recurring revenue while enhancing customer lifetime value.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Enhanced Security</strong>: Comprehensive security measures protecting both your intellectual property and customer data.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Continuous Improvement</strong>: Agile development methodologies delivering regular updates and feature enhancements to drive retention.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Cta />
    </>
  );
}