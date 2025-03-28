export const metadata = {
  title: "WebXR Development | Immersive AR & VR Experiences | Acrapt.us",
  description: "Custom WebXR development services for immersive AR and VR experiences. Create engaging virtual and augmented reality applications for the web.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function WebXRPage() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                WebXR Development
              </h1>
              <p className="text-xl text-indigo-200/65">
                Create immersive, interactive experiences that blend virtual and physical worlds using cutting-edge WebXR technologies.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">Immersive Web Experiences</h2>
                <p className="mb-8 text-indigo-200/65">
                  Our WebXR development services empower businesses to create engaging virtual and augmented reality experiences that run directly in modern web browsers. By leveraging the WebXR API, we build immersive applications that work across devices, from high-end VR headsets to smartphones, without requiring users to download separate apps.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Our WebXR Services</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• Virtual product showcases and configurators</li>
                  <li>• Immersive educational and training simulations</li>
                  <li>• Interactive virtual tours and real estate visualizations</li>
                  <li>• Augmented reality product try-ons and previews</li>
                  <li>• Virtual collaboration environments</li>
                  <li>• Immersive data visualization</li>
                  <li>• WebXR games and entertainment experiences</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">Technology Stack</h3>
                <p className="mb-8 text-indigo-200/65">
                  We utilize the latest web technologies to create seamless WebXR experiences, including Three.js for 3D rendering, React for UI components, and custom WebGL shaders for visual effects. Our solutions are built with performance optimization in mind, ensuring smooth experiences even on mobile devices.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Development Process</h3>
                <p className="mb-8 text-indigo-200/65">
                  Our WebXR development process begins with understanding your business goals and user needs. We create detailed prototypes to refine the user experience before full implementation. Throughout development, we conduct rigorous testing across different devices and platforms to ensure compatibility, performance, and accessibility.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="mb-8 rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Why Choose WebXR?</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Cross-Platform Accessibility</strong>: Create once, deploy everywhere. WebXR experiences work across VR headsets, smartphones, tablets, and desktop browsers.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">No App Installation</strong>: Users can access experiences instantly through a web browser without downloading apps or software.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Easy Updates</strong>: Update content and features instantly without requiring users to download updates.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">SEO Benefits</strong>: WebXR content can be indexed by search engines, unlike native apps.
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Featured Project</h4>
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img src="/images/webxr-project.jpg" alt="WebXR Project" className="w-full" />
                  </div>
                  <h5 className="mb-2 text-base font-medium text-gray-200">Virtual Showroom for Luxury Automotive Brand</h5>
                  <p className="mb-4 text-sm text-indigo-200/65">
                    We created an immersive virtual showroom allowing customers to explore vehicle models in detail, customize options, and even test drive in virtual environments.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-indigo-200/50">Results: 40% increase in engagement</span>
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