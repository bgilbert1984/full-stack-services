export const metadata = {
  title: "Knowledge Base | Technical Articles & Documentation | Acrapt.us",
  description: "Access our comprehensive knowledge base with detailed articles, documentation, and guides on WebXR, Three.js, API development, and more.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function KnowledgeBasePage() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Knowledge Base
              </h1>
              <p className="text-xl text-indigo-200/65">
                Your central resource for in-depth technical articles, documentation, and reference guides on our technologies and services.
              </p>
            </div>

            {/* Search bar */}
            <div className="mb-12">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search knowledge base..."
                  className="w-full rounded-lg border border-gray-700 bg-gray-900/50 px-4 py-3 text-indigo-200 placeholder-indigo-200/40 focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600"
                />
                <button className="absolute right-3 top-3 rounded-md bg-indigo-700 px-4 py-1 text-sm text-indigo-100 transition hover:bg-indigo-600">
                  Search
                </button>
              </div>
            </div>
            
            {/* Categories */}
            <div className="mb-12 grid gap-8 md:grid-cols-3">
              {/* Category 1 */}
              <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <h3 className="mb-4 text-xl font-semibold text-gray-200">WebXR Development</h3>
                <ul className="mb-4 space-y-2 text-indigo-200/65">
                  <li><a href="#" className="hover:text-indigo-300">• WebXR API Reference</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• AR vs VR Mode Configuration</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• Performance Optimization</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• Device Compatibility</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• Input Handling in XR</a></li>
                </ul>
                <a href="#" className="inline-block text-sm font-medium text-indigo-300 hover:text-indigo-400">View all WebXR articles →</a>
              </div>
              
              {/* Category 2 */}
              <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <h3 className="mb-4 text-xl font-semibold text-gray-200">API Integration</h3>
                <ul className="mb-4 space-y-2 text-indigo-200/65">
                  <li><a href="#" className="hover:text-indigo-300">• REST API Best Practices</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• OAuth 2.0 Implementation</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• API Rate Limiting Strategies</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• GraphQL vs REST APIs</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• API Security Guidelines</a></li>
                </ul>
                <a href="#" className="inline-block text-sm font-medium text-indigo-300 hover:text-indigo-400">View all API articles →</a>
              </div>
              
              {/* Category 3 */}
              <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-6 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                <h3 className="mb-4 text-xl font-semibold text-gray-200">Three.js</h3>
                <ul className="mb-4 space-y-2 text-indigo-200/65">
                  <li><a href="#" className="hover:text-indigo-300">• Scene Setup & Management</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• Material Types & Properties</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• 3D Model Import & Export</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• Animation System</a></li>
                  <li><a href="#" className="hover:text-indigo-300">• Post-Processing Effects</a></li>
                </ul>
                <a href="#" className="inline-block text-sm font-medium text-indigo-300 hover:text-indigo-400">View all Three.js articles →</a>
              </div>
            </div>
            
            {/* Popular Articles */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-semibold text-gray-200">Popular Articles</h2>
              <div className="divide-y divide-gray-800">
                <div className="flex py-4">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-900/30 text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-gray-200">
                      <a href="#" className="hover:text-indigo-300">WebXR Device API: A Comprehensive Guide</a>
                    </h3>
                    <p className="text-sm text-indigo-200/65">Learn about the core components of the WebXR Device API and how to implement them in your web applications.</p>
                  </div>
                </div>
                
                <div className="flex py-4">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-900/30 text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-gray-200">
                      <a href="#" className="hover:text-indigo-300">Optimizing Three.js Performance for Large Scenes</a>
                    </h3>
                    <p className="text-sm text-indigo-200/65">Techniques for improving rendering performance in complex Three.js scenes with numerous objects and effects.</p>
                  </div>
                </div>
                
                <div className="flex py-4">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-900/30 text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-gray-200">
                      <a href="#" className="hover:text-indigo-300">Secure Authentication for SaaS Applications</a>
                    </h3>
                    <p className="text-sm text-indigo-200/65">Best practices for implementing secure authentication and authorization in modern SaaS platforms.</p>
                  </div>
                </div>
                
                <div className="flex py-4">
                  <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-900/30 text-indigo-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-medium text-gray-200">
                      <a href="#" className="hover:text-indigo-300">Implementing WebAR for Product Visualization</a>
                    </h3>
                    <p className="text-sm text-indigo-200/65">A step-by-step guide to creating web-based augmented reality experiences for e-commerce product visualization.</p>
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