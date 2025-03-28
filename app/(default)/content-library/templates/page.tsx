export const metadata = {
  title: "Templates | Ready-to-Use Project Starters | Acrapt.us",
  description: "Browse our collection of ready-to-use templates for WebXR, Three.js, API integrations, and more. Jump-start your project with our professionally designed starter kits.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function TemplatesPage() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Templates
              </h1>
              <p className="text-xl text-indigo-200/65">
                Jump-start your projects with our collection of professionally designed, thoroughly tested templates and starter kits.
              </p>
            </div>

            {/* Filters */}
            <div className="mb-12 flex flex-wrap gap-3">
              <button className="rounded-full bg-indigo-700/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">All Templates</button>
              <button className="rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">WebXR</button>
              <button className="rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">Three.js</button>
              <button className="rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">API Starters</button>
              <button className="rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">SaaS</button>
              <button className="rounded-full bg-gray-800/40 px-4 py-2 text-sm font-medium text-indigo-200 transition hover:bg-indigo-700/60">E-commerce</button>
            </div>

            {/* Templates Grid */}
            <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Template 1 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-[url('/images/template-webxr.jpg')] bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-indigo-600/90 px-2 py-1 text-xs font-medium text-white">WebXR</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">WebXR Product Viewer</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    A complete template for creating interactive 3D product visualization experiences with AR capabilities.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Three.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">React</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">WebXR API</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-indigo-300">$49</span>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">View Template</a>
                  </div>
                </div>
              </div>

              {/* Template 2 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-[url('/images/template-threejs.jpg')] bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-teal-600/90 px-2 py-1 text-xs font-medium text-white">Three.js</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">3D Portfolio Starter</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    A beautiful Three.js portfolio template with interactive 3D elements, perfect for creative professionals.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Three.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">GSAP</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Vite</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-indigo-300">$39</span>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">View Template</a>
                  </div>
                </div>
              </div>

              {/* Template 3 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-[url('/images/template-api.jpg')] bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-pink-600/90 px-2 py-1 text-xs font-medium text-white">API</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">REST API Boilerplate</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    A comprehensive starter kit for building secure, scalable RESTful APIs with authentication and documentation.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Node.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Express</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">MongoDB</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-indigo-300">$59</span>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">View Template</a>
                  </div>
                </div>
              </div>

              {/* Template 4 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-[url('/images/template-saas.jpg')] bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-blue-600/90 px-2 py-1 text-xs font-medium text-white">SaaS</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">SaaS Starter Kit</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    A complete SaaS application template with authentication, billing, user management, and admin dashboard.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Next.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Stripe</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Prisma</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-indigo-300">$79</span>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">View Template</a>
                  </div>
                </div>
              </div>

              {/* Template 5 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-[url('/images/template-ecommerce.jpg')] bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-green-600/90 px-2 py-1 text-xs font-medium text-white">E-commerce</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">3D E-commerce Store</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    An e-commerce template with 3D product previews, AR try-ons, and all the essential shopping features.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">React</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Three.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">WebXR</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-indigo-300">$69</span>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">View Template</a>
                  </div>
                </div>
              </div>

              {/* Template 6 */}
              <div className="flex flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 overflow-hidden transition-all hover:translate-y-[-4px] hover:shadow-md backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <div className="h-48 bg-gray-800 bg-[url('/images/template-dashboard.jpg')] bg-cover bg-center relative">
                  <span className="absolute left-3 top-3 rounded bg-purple-600/90 px-2 py-1 text-xs font-medium text-white">Dashboard</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-200">3D Analytics Dashboard</h3>
                  <p className="mb-4 flex-1 text-sm text-indigo-200/65">
                    A modern analytics dashboard template with interactive 3D data visualizations and real-time updates.
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Vue.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">Three.js</span>
                      <span className="rounded-full bg-gray-800 px-2 py-1 text-xs text-indigo-300">D3.js</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-indigo-300">$59</span>
                    <a href="#" className="rounded-md bg-indigo-700/25 px-3 py-1 text-sm text-indigo-300 transition hover:bg-indigo-700/40">View Template</a>
                  </div>
                </div>
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center">
              <a href="#" className="rounded-md border border-indigo-700/50 bg-indigo-800/10 px-6 py-3 text-indigo-300 transition hover:bg-indigo-800/20">View All Templates</a>
            </div>
          </div>
        </div>
      </section>
      
      <Cta />
    </>
  );
}