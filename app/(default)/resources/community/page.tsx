export const metadata = {
  title: "Community | Join Our Developer Network | Acrapt.us",
  description: "Join our community of developers, engineers, and creators. Access forums, events, and resources to connect with like-minded professionals in technology.",
};

import PageIllustration from "@/components/page-illustration";
import Cta from "@/components/cta";

export default function CommunityPage() {
  return (
    <>
      <PageIllustration />
      
      <section className="relative">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/* Page header */}
            <div className="max-w-3xl pb-12 md:pb-20">
              <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-4xl font-semibold text-transparent md:text-5xl">
                Community
              </h1>
              <p className="text-xl text-indigo-200/65">
                Connect with a global network of developers, engineers, and technology enthusiasts. Our community brings together professionals passionate about creating innovative solutions with cutting-edge technologies.
              </p>
            </div>

            {/* Content */}
            <div className="md:flex md:gap-16">
              <div className="md:w-7/12">
                <h2 className="mb-4 font-nacelle text-2xl font-semibold text-gray-200">Join Our Community</h2>
                <p className="mb-8 text-indigo-200/65">
                  The Acrapt.us community is a vibrant ecosystem of professionals spanning various specialties including WebXR, 3D technologies, AI, and RF sensing. Connect with peers, share knowledge, collaborate on projects, and stay up-to-date with the latest technological advancements.
                </p>
                
                <h3 className="mb-3 text-xl font-medium text-gray-200">Community Resources</h3>
                <ul className="mb-8 space-y-2 text-indigo-200/65">
                  <li>• Discussion forums for technical topics and project collaboration</li>
                  <li>• Regular virtual meetups and workshops</li>
                  <li>• Annual developer conference with industry speakers</li>
                  <li>• Open-source project contributions</li>
                  <li>• Job board for specialized technical roles</li>
                  <li>• Mentorship programs for emerging developers</li>
                </ul>

                <h3 className="mb-3 text-xl font-medium text-gray-200">How to Participate</h3>
                <p className="mb-8 text-indigo-200/65">
                  Getting involved is easy. Sign up for our community portal to access forums, join our Discord server for real-time discussions, follow us on social media for announcements, and check our events calendar for upcoming meetups and workshops. Whether you're a seasoned professional or just starting out, there's a place for you in our community.
                </p>
              </div>

              <div className="md:w-5/12">
                <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-xs transition-opacity before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
                  <h4 className="mb-3 text-lg font-medium text-gray-200">Upcoming Community Events</h4>
                  <ul className="mb-4 space-y-4">
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">WebXR Developer Summit</strong>: Join our annual conference featuring workshops, presentations, and networking opportunities with leaders in immersive web technology.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Monthly Code Jams</strong>: Collaborative coding sessions focusing on specific technologies and problem domains.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Tech Talk Tuesdays</strong>: Weekly webinars featuring community members sharing their expertise and project experiences.
                    </li>
                    <li className="text-indigo-200/65">
                      <strong className="text-indigo-300">Hackathons</strong>: Quarterly themed hackathons with prizes and opportunities to showcase innovative solutions.
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