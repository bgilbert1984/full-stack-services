export const metadata = {
  title: "Tutorials | Learn WebXR, Three.js & More | Acrapt.us",
  description: "Step-by-step tutorials for WebXR, Three.js, API integrations, and more. Learn through practical examples from beginner to advanced levels.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function TutorialsPage() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Tutorials
              </h1>
              <p className="text-xl text-indigo-200/65">
                Learn through practical, step-by-step tutorials covering everything from WebXR basics to advanced Three.js and API integrations.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-12 flex flex-wrap gap-3">
              <button className="rounded-full bg-indigo-700/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">All Tutorials</button>
              <button className="rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">WebXR</button>
              <button className="rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">Three.js</button>
              <button className="rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">API Development</button>
              <button className="rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">Beginner</button>
              <button className="rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">Advanced</button>
            </div>

            {/* Tutorials Grid */}
            <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Tutorial 1 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-indigo-600/90 px-2 py-1 text-xs font-medium text-white">WebXR</span>
                  <span className="absolute right-3 top-3 rounded bg-green-600/90 px-2 py-1 text-xs font-medium text-white">Beginner</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">Getting Started with WebXR</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    Learn the fundamentals of WebXR and create your first augmented reality experience.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">WebXR API</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">JavaScript</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Three.js</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-indigo-300">45 min</span>
                      <span className="mx-2 text-indigo-300/50">•</span>
                      <span className="text-sm text-indigo-300">Mar 15, 2025</span>
                    </div>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Read</a>
                  </div>
                </div>
              </div>

              {/* Tutorial 2 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-teal-600/90 px-2 py-1 text-xs font-medium text-white">Three.js</span>
                  <span className="absolute right-3 top-3 rounded bg-green-600/90 px-2 py-1 text-xs font-medium text-white">Beginner</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">Building 3D Scenes with Three.js</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    Learn how to create interactive 3D scenes with lighting, materials, and camera controls.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Three.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">JavaScript</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">WebGL</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-indigo-300">60 min</span>
                      <span className="mx-2 text-indigo-300/50">•</span>
                      <span className="text-sm text-indigo-300">Mar 10, 2025</span>
                    </div>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Read</a>
                  </div>
                </div>
              </div>

              {/* Tutorial 3 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-pink-600/90 px-2 py-1 text-xs font-medium text-white">API</span>
                  <span className="absolute right-3 top-3 rounded bg-yellow-600/90 px-2 py-1 text-xs font-medium text-white">Intermediate</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">Building Secure RESTful APIs</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    Learn best practices for creating secure, scalable RESTful APIs with authentication and validation.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Node.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Express</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">JWT</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-indigo-300">75 min</span>
                      <span className="mx-2 text-indigo-300/50">•</span>
                      <span className="text-sm text-indigo-300">Mar 5, 2025</span>
                    </div>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Read</a>
                  </div>
                </div>
              </div>

              {/* Tutorial 4 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-indigo-600/90 px-2 py-1 text-xs font-medium text-white">WebXR</span>
                  <span className="absolute right-3 top-3 rounded bg-purple-600/90 px-2 py-1 text-xs font-medium text-white">Advanced</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">Advanced AR with WebXR and GLSL</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    Create advanced augmented reality effects using WebXR, Three.js, and custom GLSL shaders.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">WebXR</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">GLSL</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Three.js</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-indigo-300">90 min</span>
                      <span className="mx-2 text-indigo-300/50">•</span>
                      <span className="text-sm text-indigo-300">Feb 25, 2025</span>
                    </div>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Read</a>
                  </div>
                </div>
              </div>

              {/* Tutorial 5 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-teal-600/90 px-2 py-1 text-xs font-medium text-white">Three.js</span>
                  <span className="absolute right-3 top-3 rounded bg-yellow-600/90 px-2 py-1 text-xs font-medium text-white">Intermediate</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">Performance Optimization in Three.js</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    Learn techniques to optimize your Three.js applications for better performance across devices.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Three.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">WebGL</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Performance</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-indigo-300">60 min</span>
                      <span className="mx-2 text-indigo-300/50">•</span>
                      <span className="text-sm text-indigo-300">Feb 20, 2025</span>
                    </div>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Read</a>
                  </div>
                </div>
              </div>

              {/* Tutorial 6 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-blue-600/90 px-2 py-1 text-xs font-medium text-white">React</span>
                  <span className="absolute right-3 top-3 rounded bg-green-600/90 px-2 py-1 text-xs font-medium text-white">Beginner</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">Integrating Three.js with React</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    Learn how to effectively combine Three.js with React to create reusable 3D components.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">React</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Three.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">React Three Fiber</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="text-sm text-indigo-300">55 min</span>
                      <span className="mx-2 text-indigo-300/50">•</span>
                      <span className="text-sm text-indigo-300">Feb 15, 2025</span>
                    </div>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Read</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center space-x-2"></div>
              <a href="#" className="rounded-md border border-indigo-700/50 bg-indigo-800/10 px-4 py-2 text-indigo-300 transition hover:bg-indigo-800/20">&lt; Previous</a>
              <a href="#" className="rounded-md border border-indigo-700/50 bg-indigo-700/25 px-4 py-2 text-indigo-300 transition hover:bg-indigo-800/20">1</a>
              <a href="#" className="rounded-md border border-indigo-700/50 bg-indigo-800/10 px-4 py-2 text-indigo-300 transition hover:bg-indigo-800/20">2</a>
              <a href="#" className="rounded-md border border-indigo-700/50 bg-indigo-800/10 px-4 py-2 text-indigo-300 transition hover:bg-indigo-800/20">3</a>
              <span className="text-indigo-300">...</span>
              <a href="#" className="rounded-md border border-indigo-700/50 bg-indigo-800/10 px-4 py-2 text-indigo-300 transition hover:bg-indigo-800/20">12</a>
              <a href="#" className="rounded-md border border-indigo-700/50 bg-indigo-800/10 px-4 py-2 text-indigo-300 transition hover:bg-indigo-800/20">Next &gt;</a>
            </div>
          </div>
        </div>
      </section>
      
      <Cta />
    </>
  );
}