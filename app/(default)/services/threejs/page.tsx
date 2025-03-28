export const metadata = {
  title: "Three.js Development | 3D Web Graphics & Animation | Acrapt.us",
  description: "Professional Three.js development services for stunning 3D web graphics, animations, and interactive experiences. Create immersive 3D content for your website.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function ThreejsPage() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Three.js Development
              </h1>
              <p className="text-xl text-indigo-200/65">
                Elevate your web experiences with stunning 3D graphics, animations, and interactive visualizations powered by Three.js.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">Bringing the Web to Life with 3D</h2>
                <p className="mb-8 text-indigo-200/65">
                  Three.js is a powerful JavaScript library that makes it possible to create stunning 3D experiences that run directly in the web browser. Our Three.js development services help businesses create engaging, interactive 3D content that captivates users and showcases products, data, or concepts in ways that traditional 2D websites cannot match.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Our Three.js Services</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• 3D product configurators and showcases</li>
                  <li>• Interactive data visualizations</li>
                  <li>• Animated 3D landing pages and hero sections</li>
                  <li>• Virtual exhibition spaces and galleries</li>
                  <li>• 3D modeling and texture creation</li>
                  <li>• Custom shader development</li>
                  <li>• WebGL-based games and interactive experiences</li>
                  <li>• Performance optimization for 3D web content</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">Technical Expertise</h3>
                <p className="mb-8 text-indigo-200/65">
                  Our team has deep expertise in Three.js and related technologies, including advanced rendering techniques, physics simulations, GLSL shaders, and performance optimization. We combine these technical skills with creative design to create experiences that are not only visually impressive but also performant and accessible across devices.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Development Process</h3>
                <p className="mb-8 text-indigo-200/65">
                  Our Three.js development process begins with understanding your vision and objectives. We create concepts and prototypes to refine the user experience before full implementation. Throughout development, we optimize for performance, ensuring smooth experiences across desktop and mobile devices. We also provide thorough documentation and support for maintaining and extending your 3D web applications.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="mb-8 rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Why Choose Three.js?</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Stand Out from Competitors</strong>: Create memorable web experiences that differentiate your brand and impress visitors.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Showcase Products in 3D</strong>: Allow users to view, rotate, and customize products in 3D, increasing engagement and conversions.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">No Plugins Required</strong>: Three.js runs natively in modern web browsers without requiring users to install plugins or apps.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Mobile Compatible</strong>: When properly optimized, Three.js experiences can run smoothly on mobile devices as well as desktops.
                    </li>
                  </ul>
                </div>
                
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Featured Project</h4>
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img src="/images/threejs-project.jpg" alt="Three.js Project" className="w-full" />
                  </div>
                  <h5 className="mb-2 text-base font-medium text-gray-200">Interactive 3D Data Dashboard</h5>
                  <p className="mb-4 text-sm text-indigo-200/65">
                    We created an immersive 3D data visualization dashboard for a fintech company, transforming complex financial data into intuitive, interactive 3D visualizations that helped clients understand market trends at a glance.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-indigo-200/50">Results: 82% improvement in data comprehension</span>
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