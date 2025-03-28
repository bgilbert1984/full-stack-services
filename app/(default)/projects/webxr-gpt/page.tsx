export const metadata = {
  title: "WebXR-GPT | AI-Powered 3D Web Experiences | Acrapt.us",
  description: "WebXR-GPT combines artificial intelligence with 3D web experiences to create intelligent, interactive virtual environments powered by GPT technology.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function WebXrGptProject() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                WebXR-GPT
              </h1>
              <p className="text-xl text-indigo-200/65">
                Combining the immersive capabilities of WebXR with the intelligence of GPT language models to create responsive, interactive 3D environments that understand and react to natural language.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">AI-Powered Immersive Experiences</h2>
                <p className="mb-8 text-indigo-200/65">
                  WebXR-GPT represents our innovative fusion of large language models with 3D web technologies. This project enables natural language interaction within virtual and augmented reality environments, creating more intuitive and engaging user experiences.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Key Features</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• Voice-controlled virtual environments and objects</li>
                  <li>• AI-driven virtual assistants that understand spatial context</li>
                  <li>• Natural language generation of 3D content and scenes</li>
                  <li>• Contextual awareness of user location and interaction history</li>
                  <li>• Real-time language translation in shared VR spaces</li>
                  <li>• Adaptive narratives that respond to user behavior</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">Technology Stack</h3>
                <p className="mb-8 text-indigo-200/65">
                  WebXR-GPT leverages WebXR APIs, Three.js, and custom integration layers with OpenAI's GPT models. Our architecture optimizes for low-latency interactions even with complex AI processing, ensuring smooth and responsive experiences across devices, from high-end VR headsets to mobile AR.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Applications & Use Cases</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Interactive Training</strong>: AI-powered virtual instructors that can answer questions and guide users through complex procedures in 3D space.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Virtual Showrooms</strong>: Intelligent product demonstrations that respond to natural language queries about features and specifications.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Educational Environments</strong>: Interactive learning spaces where students can ask questions about 3D models and receive contextually appropriate explanations.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Virtual Collaboration</strong>: AI-enhanced meetings where virtual assistants can take notes, find information, and facilitate interactions between participants.
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