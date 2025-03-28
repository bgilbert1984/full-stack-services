export const metadata = {
  title: "Logjam | Advanced Logging & Monitoring Solution | Acrapt.us",
  description: "Logjam is a comprehensive logging and monitoring platform for modern applications. Collect, analyze, and visualize logs and metrics with our powerful observability solution.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function LogjamProject() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Logjam
              </h1>
              <p className="text-xl text-indigo-200/65">
                A comprehensive observability platform designed to collect, process, and analyze logs and metrics from distributed systems, providing actionable insights into application performance and behavior.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">Modern Logging Infrastructure</h2>
                <p className="mb-8 text-indigo-200/65">
                  Logjam is our solution to the challenges of monitoring complex, distributed applications. It provides a unified platform for aggregating logs and metrics from various sources, enabling teams to troubleshoot issues faster, detect anomalies, and gain insights into application behavior.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Core Capabilities</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• High-performance log ingestion and processing</li>
                  <li>• Real-time log streaming and alerting</li>
                  <li>• Advanced search and filtering capabilities</li>
                  <li>• Custom dashboards and visualization tools</li>
                  <li>• Anomaly detection using machine learning</li>
                  <li>• Distributed tracing for request flows</li>
                  <li>• Multi-tenancy support for organizations</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">Technical Architecture</h3>
                <p className="mb-8 text-indigo-200/65">
                  Logjam is built with scalability in mind, leveraging a microservices architecture and stream processing to handle massive log volumes efficiently. The platform uses a combination of technologies including Elasticsearch for storage, Kafka for message processing, and a React-based frontend for visualizations. Deployment options include self-hosted installations and our managed cloud service.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Benefits for Teams</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Reduced MTTR</strong>: Significantly reduce mean time to resolution with powerful search and correlation features that help pinpoint the root cause of issues.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Proactive Monitoring</strong>: Set up alerts based on log patterns and metrics to identify potential issues before they affect users.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Cross-Team Visibility</strong>: Create role-specific dashboards that give each team member the insights they need, from developers to operations and business stakeholders.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Regulatory Compliance</strong>: Meet compliance requirements with secure log storage, retention policies, and audit trails for sensitive data.
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