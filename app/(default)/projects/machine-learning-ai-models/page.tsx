export const metadata = {
  title: "Machine Learning & AI Models | Custom AI Solutions | Acrapt.us",
  description: "Custom machine learning and AI model development for businesses. From predictive analytics to computer vision, we build tailored AI solutions to solve complex problems.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function MlAiModelsProject() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Machine Learning & AI Models
              </h1>
              <p className="text-xl text-indigo-200/65">
                Custom AI and machine learning solutions designed to solve specific business challenges, extract insights from data, and automate complex processes through intelligent algorithms.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">Tailored AI Solutions</h2>
                <p className="mb-8 text-indigo-200/65">
                  Our machine learning and AI development team builds custom models that address specific business needs across industries. From predictive analytics to computer vision, we focus on creating practical AI solutions that deliver measurable results and competitive advantages.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Our AI Specializations</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• Computer vision and image recognition systems</li>
                  <li>• Natural language processing and generation</li>
                  <li>• Predictive analytics and forecasting models</li>
                  <li>• Recommender systems and personalization engines</li>
                  <li>• Anomaly detection for security and quality control</li>
                  <li>• Time-series analysis for operational optimization</li>
                  <li>• Reinforcement learning for autonomous systems</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">Development Approach</h3>
                <p className="mb-8 text-indigo-200/65">
                  We follow a rigorous development methodology that begins with understanding your business requirements and data landscape. From there, we progress through model selection, training, validation, and deployment, working collaboratively to ensure that the final solution integrates seamlessly with your existing systems and processes.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Project Highlights</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Medical Diagnosis Assistant</strong>: Developed a computer vision system that helps radiologists identify abnormalities in medical images with 94% accuracy.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Inventory Optimization</strong>: Created a predictive model that reduced inventory costs by 22% while maintaining service levels for a retail chain.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Fraud Detection System</strong>: Built a real-time transaction monitoring system that increased fraud detection by 38% while reducing false positives.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Content Recommendation Engine</strong>: Designed a personalization system that increased user engagement by 45% for a digital media platform.
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