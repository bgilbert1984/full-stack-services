export const metadata = {
  title: "ThreeJS React Components | 3D React Component Library | Acrapt.us",
  description: "Pre-built React components powered by Three.js for easy integration of 3D graphics and animations into your web applications. Reusable, customizable 3D UI elements.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function ThreejsReactComponentsProject() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                ThreeJS React Components
              </h1>
              <p className="text-xl text-indigo-200/65">
                A powerful library of reusable React components built with Three.js, designed to simplify the integration of high-quality 3D graphics into modern web applications.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">Simplifying 3D Web Development</h2>
                <p className="mb-8 text-indigo-200/65">
                  Our ThreeJS React Components project bridges the gap between complex 3D graphics programming and modern React development. These components encapsulate common 3D visualization patterns and interactions, allowing developers to implement sophisticated three-dimensional experiences with the same ease as working with standard UI elements.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Component Library Features</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• Ready-to-use 3D scene containers with optimal defaults</li>
                  <li>• Interactive object viewers with built-in controls</li>
                  <li>• Animation components with timeline and sequence support</li>
                  <li>• Material and lighting presets for professional rendering</li>
                  <li>• Physics integration for realistic object behavior</li>
                  <li>• Performance-optimized loading and rendering</li>
                  <li>• Responsive design support for all device types</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">Developer Experience</h3>
                <p className="mb-8 text-indigo-200/65">
                  Each component in our library is thoroughly documented and includes examples to accelerate development. Props follow consistent patterns, making them intuitive to use once you're familiar with the basic concepts. Our components are designed to work seamlessly with modern React patterns including hooks, context, and server components where applicable.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Component Showcase</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">ModelViewer</strong>: A versatile component for displaying 3D models with customizable controls, lighting, and environments. Supports GLTF, GLB, OBJ, and other popular formats.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">SceneComposer</strong>: A higher-order component for creating complex 3D scenes with multiple objects, cameras, and interactive elements.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">ParticleSystem</strong>: Create dynamic particle effects for everything from subtle background animations to complex simulations.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Text3D</strong>: Generate and animate 3D text with precise typographic control and material options.
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