export const metadata = {
  title: "Learn | Educational Resources & Learning Paths | Acrapt.us",
  description: "Structured learning paths, video courses, and educational resources to help you master WebXR, Three.js, and other cutting-edge web technologies.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function LearnPage() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Learn
              </h1>
              <p className="text-xl text-indigo-200/65">
                Structured learning paths, courses, and educational resources to help you master cutting-edge web technologies and development techniques.
              </p>
            </div>

            {/* Learning Paths */}
            <div className="mb-16">
              <h2 className="mb-8 text-2xl font-semibold text-gray-200">Learning Paths</h2>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {/* Path 1 */}
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <div className="h-3 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-200">WebXR Development</h3>
                    <p className="mb-4 text-sm text-indigo-200/65">
                      Master the fundamentals of creating immersive AR and VR experiences for the web, from basic principles to advanced techniques.
                    </p>
                    <div className="mb-5">
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-indigo-300">Beginner to Advanced</span>
                        <span className="text-indigo-200/50">15 Modules</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-800">
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600" style={{width: '90%'}}></div>
                      </div>
                    </div>
                    <a href="#" className="inline-block rounded-md bg-indigo-700/25 px-4 py-2 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Start Learning Path</a>
                  </div>
                </div>
                
                {/* Path 2 */}
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <div className="h-3 bg-gradient-to-r from-teal-500 to-emerald-500"></div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-200">Three.js Mastery</h3>
                    <p className="mb-4 text-sm text-indigo-200/65">
                      Learn to create stunning 3D graphics for the web, from basic scenes to complex interactive experiences with Three.js.
                    </p>
                    <div className="mb-5">
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-indigo-300">Beginner to Advanced</span>
                        <span className="text-indigo-200/50">12 Modules</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-800">
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500" style={{width: '75%'}}></div>
                      </div>
                    </div>
                    <a href="#" className="inline-block rounded-md bg-indigo-700/25 px-4 py-2 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Start Learning Path</a>
                  </div>
                </div>
                
                {/* Path 3 */}
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <div className="h-3 bg-gradient-to-r from-pink-500 to-red-500"></div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-gray-200">API Development</h3>
                    <p className="mb-4 text-sm text-indigo-200/65">
                      Build robust, secure, and scalable APIs using modern techniques, from basic REST principles to advanced architecture patterns.
                    </p>
                    <div className="mb-5">
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-indigo-300">Intermediate to Advanced</span>
                        <span className="text-indigo-200/50">10 Modules</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-gray-800">
                        <div className="h-1.5 rounded-full bg-gradient-to-r from-pink-500 to-red-500" style={{width: '60%'}}></div>
                      </div>
                    </div>
                    <a href="#" className="inline-block rounded-md bg-indigo-700/25 px-4 py-2 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Start Learning Path</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Featured Courses */}
            <div className="mb-16">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-200">Featured Courses</h2>
                <a href="#" className="text-sm font-medium text-indigo-300 hover:text-indigo-400">View All Courses →</a>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2">
                {/* Course 1 */}
                <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <div className="h-48 bg-gray-800 bg-[url('/images/course-webxr.jpg')] bg-cover bg-center"></div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center">
                      <span className="mr-3 rounded bg-indigo-900/25 px-2 py-1 text-xs font-medium text-indigo-300">WebXR</span>
                      <span className="text-xs text-indigo-200/50">8 Hours</span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-200">Advanced WebXR Interactions</h3>
                    <p className="mb-5 flex-1 text-sm text-indigo-200/65">
                      Learn techniques for creating natural, intuitive interactions in WebXR applications, including hand tracking, controller inputs, and spatial UI design.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img src="/images/testimonial-01.jpg" alt="Instructor" className="mr-3 h-8 w-8 rounded-full" />
                        <span className="text-sm text-indigo-200/80">Dr. Maya Patterson</span>
                      </div>
                      <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Enroll Now</a>
                    </div>
                  </div>
                </div>
                
                {/* Course 2 */}
                <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <div className="h-48 bg-gray-800 bg-[url('/images/course-threejs.jpg')] bg-cover bg-center"></div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center">
                      <span className="mr-3 rounded bg-indigo-900/25 px-2 py-1 text-xs font-medium text-indigo-300">Three.js</span>
                      <span className="text-xs text-indigo-200/50">10 Hours</span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-gray-200">Three.js for Creative Developers</h3>
                    <p className="mb-5 flex-1 text-sm text-indigo-200/65">
                      Create stunning visual experiences with Three.js. Learn advanced shaders, particle systems, animations, and post-processing techniques.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <img src="/images/testimonial-02.jpg" alt="Instructor" className="mr-3 h-8 w-8 rounded-full" />
                        <span className="text-sm text-indigo-200/80">Thomas Reeves</span>
                      </div>
                      <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">Enroll Now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Free Resources */}
            <div>
              <h2 className="mb-8 text-2xl font-semibold text-gray-200">Free Resources</h2>
              
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
                  <h3 className="mb-2 font-medium text-gray-200">WebXR Starter Kit</h3>
                  <p className="mb-3 text-sm text-indigo-200/65">A collection of code samples and boilerplates to jumpstart your WebXR projects.</p>
                  <a href="#" className="text-xs font-medium text-indigo-300 hover:text-indigo-400">Download →</a>
                </div>
                
                <div className="rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
                  <h3 className="mb-2 font-medium text-gray-200">Three.js Shader Collection</h3>
                  <p className="mb-3 text-sm text-indigo-200/65">50+ ready-to-use GLSL shaders with examples and documentation.</p>
                  <a href="#" className="text-xs font-medium text-indigo-300 hover:text-indigo-400">Download →</a>
                </div>
                
                <div className="rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
                  <h3 className="mb-2 font-medium text-gray-200">API Development Checklist</h3>
                  <p className="mb-3 text-sm text-indigo-200/65">Comprehensive checklist for building secure, scalable, and well-documented APIs.</p>
                  <a href="#" className="text-xs font-medium text-indigo-300 hover:text-indigo-400">Download →</a>
                </div>
                
                <div className="rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
                  <h3 className="mb-2 font-medium text-gray-200">SaaS Architecture Guide</h3>
                  <p className="mb-3 text-sm text-indigo-200/65">Learn the fundamentals of building scalable SaaS platforms with this comprehensive PDF guide.</p>
                  <a href="#" className="text-xs font-medium text-indigo-300 hover:text-indigo-400">Download →</a>
                </div>
                
                <div className="rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
                  <h3 className="mb-2 font-medium text-gray-200">ML Model Deployment Toolkit</h3>
                  <p className="mb-3 text-sm text-indigo-200/65">Tools and scripts for deploying machine learning models to production environments.</p>
                  <a href="#" className="text-xs font-medium text-indigo-300 hover:text-indigo-400">Download →</a>
                </div>
                
                <div className="rounded-lg bg-gray-900/50 p-5 backdrop-blur-sm">
                  <h3 className="mb-2 font-medium text-gray-200">React Component Library</h3>
                  <p className="mb-3 text-sm text-indigo-200/65">A collection of reusable React components for building modern web applications.</p>
                  <a href="#" className="text-xs font-medium text-indigo-300 hover:text-indigo-400">Download →</a>
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