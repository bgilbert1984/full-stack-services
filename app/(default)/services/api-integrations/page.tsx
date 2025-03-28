export const metadata = {
  title: "API Integration Services | Custom API Development | Acrapt.us",
  description: "Expert API integration and custom API development services. Connect systems, automate workflows, and build powerful, scalable application interfaces.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function ApiIntegrationsPage() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                API Integrations
              </h1>
              <p className="text-xl text-indigo-200/65">
                Connect systems, automate workflows, and build seamless experiences with our custom API integration and development services.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">Connecting Digital Ecosystems</h2>
                <p className="mb-8 text-indigo-200/65">
                  In today's interconnected digital landscape, APIs (Application Programming Interfaces) are the foundation that enables systems to communicate and share data seamlessly. Our API integration services help businesses connect disparate systems, streamline operations, and create cohesive user experiences across platforms and devices.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Our API Services</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• Custom API development for your unique business requirements</li>
                  <li>• Third-party API integrations with popular platforms and services</li>
                  <li>• API strategy and architecture design</li>
                  <li>• RESTful API development and implementation</li>
                  <li>• GraphQL API development for flexible data querying</li>
                  <li>• API gateway setup and configuration</li>
                  <li>• API documentation and developer resources</li>
                  <li>• API performance optimization and scaling solutions</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">Integration Expertise</h3>
                <p className="mb-8 text-indigo-200/65">
                  Our team has extensive experience integrating with a wide range of third-party APIs and services, including payment gateways, CRM systems, e-commerce platforms, marketing automation tools, social media platforms, and more. We follow industry best practices for security, authentication, error handling, and performance optimization.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Development Approach</h3>
                <p className="mb-8 text-indigo-200/65">
                  We take a strategic approach to API development, beginning with understanding your business requirements and mapping out data flows. We design APIs that are not only functional but also developer-friendly, well-documented, and built to scale. Our development process includes thorough testing and validation to ensure reliability and optimal performance.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="mb-8 rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Benefits of Our API Solutions</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Streamlined Operations</strong>: Automate workflows and eliminate manual data transfer between systems, reducing errors and saving time.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Enhanced User Experience</strong>: Create seamless experiences across platforms by integrating services and data sources.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Scalability</strong>: Build APIs designed to handle growing transaction volumes and evolving business needs.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Innovation Enablement</strong>: Unlock new features and capabilities by connecting with specialized services and platforms.
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Featured Project</h4>
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img src="/images/api-project.jpg" alt="API Integration Project" className="w-full" />
                  </div>
                  <h5 className="mb-2 text-base font-medium text-gray-200">Unified E-commerce Ecosystem</h5>
                  <p className="mb-4 text-sm text-indigo-200/65">
                    We developed a custom API gateway that integrated multiple e-commerce platforms, payment processors, inventory systems, and shipping providers into a unified ecosystem, creating a seamless omnichannel experience.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-indigo-200/50">Results: 65% reduction in operational costs</span>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">View Case Study</a>
                  </div>
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