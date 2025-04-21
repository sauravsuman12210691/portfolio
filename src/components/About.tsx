import React from 'react';
import { Briefcase, GraduationCap, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-r from-[#89c4df] via-[#3B82F6] to-[#9333EA] text-white p-8 rounded-2xl shadow-lg text-center text-2xl font-semibold">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-white mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Bio */}
          <div className="space-y-6 text-white text-lg leading-relaxed">
            <p>
              Hello! I'm <span className="font-semibold text-portfolio-purple">Saurav Suman</span>, a full-stack developer currently in my third year at Lovely Professional University, Punjab. I specialize in building scalable and intelligent web applications using the MERN stack, often integrating AI features for a smarter user experience.
            </p>
            <p>
              My tech journey started with curiosity and grew into a passion for solving real-world problems through code. I'm particularly enthusiastic about system design, microservices, and integrating AI to build efficient solutions.
            </p>
            <p>
              When I’m not coding, I love working on personal projects, helping peers through workshops, or enhancing my skills via online certifications and competitive programming.
            </p>
          </div>

          {/* Right: Education & Experience */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Education & Experience</h3>

            <div className="space-y-6">
              {/* Education */}
              <div className="flex items-start gap-4">
                <GraduationCap size={24} className="text-portfolio-purple mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">B.Tech in Computer Science and Engineering</h4>
                  <p className="text-gray-600">Lovely Professional University</p>
                  <p className="text-sm text-gray-500">2022 - Present</p>
                </div>
              </div>

              {/* Internship */}
              <div className="flex items-start gap-4">
                <Briefcase size={24} className="text-portfolio-purple mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Full-Stack Developer Intern</h4>
                  <p className="text-gray-600">Mock Master • Print Sathi</p>
                  <p className="text-sm text-gray-500">Summer 2024</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-portfolio-purple mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Location</h4>
                  <p className="text-gray-600">Punjab, India</p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Interests</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Full-Stack Development',
                  'AI Integration',
                  'System Design',
                  'Cloud & DevOps',
                  'Open Source',
                  'Startup Projects',
                ].map((interest) => (
                  <span
                    key={interest}
                    className="bg-white px-4 py-1.5 rounded-full text-sm border border-gray-300 text-gray-700"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
