export const metadata = {
  title: "Medical Imaging Solutions | Healthcare Visualization Technology | Acrapt.us",
  description: "Advanced medical imaging solutions leveraging AI and 3D visualization. We develop custom medical imaging software for healthcare professionals and medical device manufacturers.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function MedicalImagingServices() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Medical Imaging Solutions
              </h1>
              <p className="text-xl text-indigo-200/65">
                Cutting-edge medical imaging software and visualization solutions that improve diagnostic accuracy, streamline workflows, and enhance patient care through advanced technology.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">Advanced Medical Visualization</h2>
                <p className="mb-8 text-indigo-200/65">
                  We develop sophisticated medical imaging software that transforms complex data from CT, MRI, ultrasound, and other imaging modalities into actionable insights. Our solutions leverage the latest in 3D rendering, artificial intelligence, and machine learning technologies.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Our Medical Imaging Capabilities:</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• DICOM-compliant medical imaging viewers</li>
                  <li>• 3D volumetric rendering and visualization</li>
                  <li>• AI-assisted diagnostic tools and image analysis</li>
                  <li>• Medical image segmentation and quantitative analysis</li>
                  <li>• Web-based medical imaging platforms</li>
                  <li>• VR/AR solutions for medical education and planning</li>
                  <li>• Teleradiology and remote diagnostics platforms</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">Regulatory Compliance & Security</h3>
                <p className="mb-8 text-indigo-200/65">
                  Our medical imaging solutions are built with regulatory requirements in mind. We develop software that complies with HIPAA, GDPR, and FDA regulations while implementing stringent security measures to protect sensitive patient data and maintain privacy.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Innovation in Medical Imaging</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">AI-Driven Diagnostics</strong>: Machine learning algorithms that assist radiologists in identifying anomalies in medical scans, improving accuracy and reducing interpretation time.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Surgical Planning Systems</strong>: Interactive 3D visualization tools that help surgeons plan complex procedures with greater precision and confidence.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Research Applications</strong>: Custom imaging software for research institutions conducting advanced studies in medical imaging and analysis.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Patient Education</strong>: Interactive visualization tools that help patients better understand their conditions and treatment options.
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