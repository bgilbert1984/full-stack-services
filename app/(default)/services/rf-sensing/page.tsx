export const metadata = {
  title: "RF Sensing Solutions | Radio Frequency Technology | Acrapt.us",
  description: "Advanced RF sensing technology and solutions for security, surveillance, and industrial applications. Custom radio frequency systems for detecting and analyzing RF signals.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function RfSensingServices() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                RF Sensing Solutions
              </h1>
              <p className="text-xl text-indigo-200/65">
                Cutting-edge radio frequency (RF) sensing technology and software solutions for detecting, monitoring, and analyzing RF signals across security, defense, and commercial applications.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">RF Technology Innovation</h2>
                <p className="mb-8 text-indigo-200/65">
                  We develop advanced RF sensing systems that detect and analyze radio frequency signals across the electromagnetic spectrum. Our solutions combine specialized hardware with powerful software to provide real-time signal intelligence and analysis for various applications.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Our RF Sensing Capabilities:</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• Custom RF detection and monitoring systems</li>
                  <li>• Signal intelligence (SIGINT) software development</li>
                  <li>• Drone detection and counter-UAS solutions</li>
                  <li>• Spectrum analysis and visualization tools</li>
                  <li>• RF-based security and surveillance systems</li>
                  <li>• IoT device tracking and monitoring</li>
                  <li>• Wireless communication protocol analysis</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">Applications & Industries</h3>
                <p className="mb-8 text-indigo-200/65">
                  Our RF sensing solutions serve diverse sectors including defense, security, telecommunications, industrial monitoring, and research. We develop customized systems that address specific challenges in signal detection, analysis, and response across complex RF environments.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">RF Technology Applications</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Threat Detection</strong>: Identify unauthorized RF emissions and potential security threats in sensitive environments.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Drone Swarm Management</strong>: Coordinate and control multiple UAVs using advanced RF communication systems.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Signal Mapping</strong>: Create comprehensive maps of RF environments for telecommunications planning and optimization.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Wireless Security</strong>: Monitor and protect wireless networks from unauthorized access and interference.
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