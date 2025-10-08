import React from 'react';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8" style={{ fontSize: '9.5px', lineHeight: '1.3' }}>
      {/* Header with side accent */}
      <div className="mb-3 flex items-start gap-3">
        <div className="w-1 bg-blue-600 h-16 flex-shrink-0"></div>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 mb-1">Archana K</h1>
          <p className="text-xs text-gray-600 mb-1 italic">Application Security Engineer | IT Operations Specialist</p>
          <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-600">
            <span className="flex items-center gap-1"><Phone size={11} /> 91-9113691052</span>
            <span className="flex items-center gap-1"><Mail size={11} /> archanakgowda99@gmail.com</span>
            <span className="flex items-center gap-1"><Linkedin size={11} /> linkedin.com/in/archanakgowda</span>
            <span className="flex items-center gap-1"><MapPin size={11} /> Bengaluru / Mysore</span>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-3 bg-gray-50 p-3 rounded">
        <h2 className="text-sm font-bold text-blue-700 mb-1.5 uppercase tracking-wide">Professional Summary</h2>
        <p className="text-justify leading-relaxed">
          Security-focused IT professional with <strong>3+ years of specialized experience</strong> in application security at Amazon and enterprise IT operations at NTT DATA. Currently pursuing <strong>MBA in Operations Management & Business Analytics</strong> from Amrita Vishwa Vidyapeetham. Demonstrated expertise in building security frameworks, automating infrastructure, and driving operational excellence. <strong>GATE qualifier, AWS certified, and award-winning innovator</strong> with proven ability to deliver transformative solutions in high-stakes environments. Seeking to leverage technical depth and strategic acumen to drive innovation at industry-leading organizations.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-3 gap-4">
        {/* Left Column - Main Content */}
        <div className="col-span-2 space-y-3">
          {/* Experience */}
          <div>
            <h2 className="text-sm font-bold text-blue-700 mb-2 uppercase tracking-wide flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blue-600"></div>
              Experience
            </h2>
            
            <div className="mb-2.5">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-bold text-gray-900">Information Technology Sr. Associate</h3>
                <span className="text-xs text-gray-500">11/2024 - Present</span>
              </div>
              <p className="text-xs italic text-blue-600 mb-1">NTT DATA</p>
              <ul className="space-y-0.5">
                <li className="flex text-gray-700"><span className="text-blue-600 mr-1.5 font-bold">▪</span><span>Spearheaded <strong>development and IT operational excellence</strong> across enterprise environments, ensuring <strong>99%+ system reliability</strong> for business-critical applications</span></li>
                <li className="flex text-gray-700"><span className="text-blue-600 mr-1.5 font-bold">▪</span><span>Engineered automated solutions reducing <strong>manual intervention by 40%</strong> while maintaining infrastructure scalability and performance standards</span></li>
                <li className="flex text-gray-700"><span className="text-blue-600 mr-1.5 font-bold">▪</span><span>Resolved complex technical challenges through <strong>root cause analysis</strong> and infrastructure optimization, ensuring operational continuity</span></li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-bold text-gray-900">Security Engineer - Application Security</h3>
                <span className="text-xs text-gray-500">07/2022 - 10/2024</span>
              </div>
              <p className="text-xs italic text-blue-600 mb-1">Amazon</p>
              <ul className="space-y-0.5">
                <li className="flex text-gray-700"><span className="text-blue-600 mr-1.5 font-bold">▪</span><span>Partnered with <strong>cross-functional development teams</strong> to architect secure applications, conducting comprehensive code reviews and <strong>vulnerability assessments</strong></span></li>
                <li className="flex text-gray-700"><span className="text-blue-600 mr-1.5 font-bold">▪</span><span>Designed and deployed <strong>security frameworks</strong> enabling developers to accelerate delivery by <strong>30%</strong> while maintaining security posture</span></li>
                <li className="flex text-gray-700"><span className="text-blue-600 mr-1.5 font-bold">▪</span><span>Integrated security into <strong>SDLC from design to deployment</strong>, performing threat modeling and implementing proactive risk mitigation strategies</span></li>
                <li className="flex text-gray-700"><span className="text-blue-600 mr-1.5 font-bold">▪</span><span>Reduced security incidents by <strong>35%</strong> through implementation of automated security testing and continuous monitoring solutions</span></li>
              </ul>
            </div>
          </div>

          {/* Leadership */}
          <div>
            <h2 className="text-sm font-bold text-blue-700 mb-2 uppercase tracking-wide flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blue-600"></div>
              Leadership & Entrepreneurship
            </h2>
            
            <div className="mb-2">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-bold text-gray-900">Founder & CEO</h3>
                <span className="text-xs text-gray-500">08/2019 - 2022</span>
              </div>
              <p className="text-xs italic text-blue-600 mb-1">ARK Foundation</p>
              <ul className="space-y-0.5">
                <li className="flex text-gray-700"><span className="text-blue-600 mr-1.5 font-bold">▪</span><span><strong>R&D:</strong> Developed emergency service drones for Mysore Police Department and University of Mysore</span></li>
                <li className="flex text-gray-700"><span className="text-blue-600 mr-1.5 font-bold">▪</span><span><strong>Training:</strong> Delivered customized programs and internships, training 100+ students in emerging technologies</span></li>
                <li className="flex text-gray-700"><span className="text-blue-600 mr-1.5 font-bold">▪</span><span><strong>Social Impact:</strong> Established NGO supporting orphans and underprivileged communities</span></li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-bold text-gray-900">Secretary</h3>
                <span className="text-xs text-gray-500">01/2021 - 2022</span>
              </div>
              <p className="text-xs italic text-blue-600 mb-1">Cyber Cadet Corps</p>
              <p className="text-gray-700">Led cyber law awareness initiatives partnering with National Legal Services Authority and Bengaluru Police Cyber Crime Branch</p>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-sm font-bold text-blue-700 mb-2 uppercase tracking-wide flex items-center gap-2">
              <div className="w-8 h-0.5 bg-blue-600"></div>
              Selected Projects
            </h2>
            
            <div className="space-y-1.5">
              <div>
                <h3 className="font-bold text-gray-900">Hybrid Agricultural Robot <span className="text-xs text-gray-500 font-normal">| 2022-23</span></h3>
                <p className="text-gray-700">Engineered advanced agricultural robot with disease detection, NPK soil analysis, pH testing, and automated farming capabilities, enhancing crop yield by <strong>25%</strong></p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">DBMS Unicard System <span className="text-xs text-gray-500 font-normal">| 2020-21</span></h3>
                <p className="text-gray-700">Developed unified card consolidation system using MySQL and Python3, streamlining data management for multiple card types</p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Precision 3D Printer <span className="text-xs text-gray-500 font-normal">| 2021</span></h3>
                <p className="text-gray-700">Designed 3D printer using Arduino Mega and RepRap architecture, demonstrating expertise in additive manufacturing and embedded systems</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="space-y-3">
          {/* Education */}
          <div className="bg-blue-50 p-2.5 rounded">
            <h2 className="text-xs font-bold text-blue-700 mb-2 uppercase tracking-wide">Education</h2>
            <div className="space-y-2">
              <div>
                <p className="font-bold text-gray-900 text-xs leading-tight">MBA – Operations Management & Business Analytics</p>
                <p className="text-xs text-gray-600 italic">Amrita Vishwa Vidyapeetham</p>
                <p className="text-xs text-gray-500">2023 - Present</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs leading-tight">B.E. – Computer Science</p>
                <p className="text-xs text-gray-600 italic">MITT Thandavapura</p>
                <p className="text-xs text-gray-500">2018 - 2022</p>
                <p className="text-xs font-semibold text-blue-700">CGPA: 7.5/10</p>
              </div>
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <h2 className="text-xs font-bold text-blue-700 mb-2 uppercase tracking-wide">Core Skills</h2>
            <div className="space-y-2">
              <div>
                <p className="font-bold text-gray-900 text-xs mb-0.5">Security</p>
                <p className="text-gray-700 leading-tight">Application Security, Threat Modeling, Vulnerability Assessment, DevSecOps, Secure SDLC</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs mb-0.5">Development</p>
                <p className="text-gray-700 leading-tight">Python, C/C++, SQL, Cloud Computing (AWS), IoT, Automation</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs mb-0.5">Operations</p>
                <p className="text-gray-700 leading-tight">Infrastructure Optimization, Process Automation, Performance Monitoring</p>
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs mb-0.5">Leadership</p>
                <p className="text-gray-700 leading-tight">Strategic Planning, Cross-functional Collaboration, Project Management</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-gray-50 p-2.5 rounded">
            <h2 className="text-xs font-bold text-blue-700 mb-2 uppercase tracking-wide">Certifications</h2>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-1 text-xs">✓</span><span className="leading-tight">AWS Certified DevOps Engineer - Professional</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 text-xs">✓</span><span className="leading-tight">Microsoft Azure AI-100/102 Cognitive Services</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 text-xs">✓</span><span className="leading-tight">ISRO: Remote Sensing, GIS, Python Geoprocessing</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 text-xs">✓</span><span className="leading-tight">Embedded Systems - Texas Instruments</span></li>
            </ul>
          </div>

          {/* Key Achievements */}
          <div>
            <h2 className="text-xs font-bold text-blue-700 mb-2 uppercase tracking-wide">Key Achievements</h2>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-start"><span className="text-blue-600 mr-1 font-bold">→</span><span className="leading-tight"><strong>GATE 2022</strong> Qualifier</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 font-bold">→</span><span className="leading-tight">Selected: <strong>C-DOT</strong> Project Engineer</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 font-bold">→</span><span className="leading-tight"><strong>DRDO</strong> Research Fellow Opportunity</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 font-bold">→</span><span className="leading-tight"><strong>World Skills</strong> India Finalist</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 font-bold">→</span><span className="leading-tight"><strong>DRDO Winner:</strong> Dare to Dream</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 font-bold">→</span><span className="leading-tight"><strong>2nd Place:</strong> DST-TI Innovation</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 font-bold">→</span><span className="leading-tight"><strong>QS Scholarship:</strong> US$7M Award</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 font-bold">→</span><span className="leading-tight"><strong>Author:</strong> 2 Published Books</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 font-bold">→</span><span className="leading-tight"><strong>Campus Ambassador:</strong> Microsoft, IIT Madras</span></li>
              <li className="flex items-start"><span className="text-blue-600 mr-1 font-bold">→</span><span className="leading-tight"><strong>IMUN Head Chair:</strong> UNICEF Committee</span></li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-xs font-bold text-blue-700 mb-1.5 uppercase tracking-wide">Languages</h2>
            <div className="space-y-0.5 text-gray-700">
              <p className="flex justify-between"><span className="font-semibold">English</span><span className="text-xs">Proficient</span></p>
              <p className="flex justify-between"><span className="font-semibold">Kannada</span><span className="text-xs">Native</span></p>
              <p className="flex justify-between"><span className="font-semibold">Hindi</span><span className="text-xs">Proficient</span></p>
              <p className="flex justify-between"><span className="font-semibold">Telugu</span><span className="text-xs">Conversational</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Download/Print Button */}
      <div className="mt-6 flex justify-center gap-4 no-print">
        <button
          onClick={() => {
            // Trigger print dialog
            window.print();
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-200 flex items-center gap-2 cursor-pointer"
          style={{ WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download as PDF
        </button>
      </div>
      
      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}