export const metadata = {
  title: "Drone Swarm RF SCYTHE | Advanced Drone Signal Technology | Acrapt.us",
  description: "Cutting-edge drone swarm technology with advanced RF signal processing. Our Drone Swarm RF SCYTHE platform enables coordinated multi-drone operations for various applications.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function DroneSwarmRfScytheProject() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Drone Swarm RF SCYTHE
              </h1>
              <p className="text-xl text-indigo-200/65">
                A groundbreaking platform for coordinating multiple UAVs through advanced radio frequency technology, enabling synchronized drone operations for data collection, surveillance, and environmental monitoring.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">Advanced Drone Swarm Technology</h2>
                <p className="mb-8 text-indigo-200/65">
                  The Drone Swarm RF SCYTHE project represents our cutting-edge work in coordinating multiple unmanned aerial vehicles (UAVs) using sophisticated radio frequency communication systems. This technology enables drones to operate as a cohesive unit, sharing data and coordinating movements for complex missions.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Key Capabilities</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• Real-time coordination of multiple drone platforms</li>
                  <li>• Secure, encrypted RF communication protocols</li>
                  <li>• Distributed task allocation algorithms</li>
                  <li>• Autonomous mission planning and execution</li>
                  <li>• Fault tolerance and redundancy mechanisms</li>
                  <li>• Advanced signal processing for interference mitigation</li>
                  <li>• Mission analytics and data visualization</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">Technical Innovation</h3>
                <p className="mb-8 text-indigo-200/65">
                  Our RF SCYTHE system employs a unique approach to swarm coordination, using adaptive mesh networking and dynamic spectrum allocation to maintain reliable connections even in challenging environments. Custom protocols ensure low-latency communication while sophisticated algorithms enable collaborative decision-making among swarm members.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Applications</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Environmental Monitoring</strong>: Coordinated drone swarms that can rapidly map and monitor large ecosystems, tracking changes and collecting data across vast areas.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Search and Rescue</strong>: Swarm deployments that can efficiently search large areas, using coordinated patterns and shared intelligence to locate missing persons.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Agricultural Mapping</strong>: Precision agriculture solutions that employ multiple drones to monitor crop health, soil conditions, and irrigation needs across large farms.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Infrastructure Inspection</strong>: Coordinated inspection of large facilities, power lines, or transportation networks using multiple specialized drones working in unison.
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