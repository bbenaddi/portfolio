'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";
import { ExperienceCounter } from "@/components/ExperienceCounter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 p-6 space-y-12">
      {/* Social Links - Fixed Top Right */}
      <div className="fixed top-6 right-6 flex gap-4">
        <a 
          href="mailto:benaddi.contact@gmail.com" 
          aria-label="Email"
          className="hover:text-primary transition-colors bg-white rounded-full p-2 shadow-sm"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a 
          href="https://github.com/bbenaddi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors bg-white rounded-full p-2 shadow-sm"
        >
          <Github className="w-5 h-5" />
        </a>
        <a 
          href="https://www.linkedin.com/in/bbenaddi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-primary transition-colors bg-white rounded-full p-2 shadow-sm"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>

      {/* Hero Section */}
      <section className="text-center py-10">
        <h1 className="text-5xl font-bold mb-4">Brahim Benaddi</h1>
        <h2 className="text-3xl font-semibold text-gray-700">Software Engineer</h2>
        <div className="flex items-center justify-center gap-2 mt-2 text-gray-600">
          <MapPin className="w-4 h-4" />
          <p>Casablanca, Morocco</p>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-gray-600">Experience:</span>
          <ExperienceCounter showTotal={true} showRealtime={true} startDate={new Date()} />
        </div>
        <p className="text-lg mt-4">Full Stack Development | Cloud Solutions </p>
      </section>

      {/* About Section */}
      <section className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600">
          Software Engineer with a solid educational foundation in software development. 
          My expertise spans both front-end and back-end development, cloud services, and testing frameworks. 
          Currently working at Munvo, focusing on designing and developing solutions for the Event Gateway product, 
          specializing in real-time data sharing across platforms.
        </p>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Technical Proficiencies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {[
            "React.js", "Java EE", "Spring Boot", 
            "PostgreSQL", "Oracle DB", "AWS Services",
            "Jest", "Cypress", "JUnit",
            "Cucumber", "REST", "TDD"
          ].map((tech) => (
            <Card key={tech} className="shadow-sm">
              <CardContent className="py-4 font-medium">{tech}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Professional Experience</h2>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Software Developer at Munvo</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    Experience: <ExperienceCounter startDate={new Date('2022-03-01')} />
                  </div>
                </div>
                <span className="text-sm text-gray-500">March 2022 - Present</span>
              </div>
              <p className="text-sm mt-2 text-gray-600">
                Working on the Event Gateway product, developing solutions for real-time data sharing across platforms.
                Key responsibilities include designing and implementing features for data ingestion, transformation, 
                and creating connectors for platforms like Salesforce Marketing Cloud and Adobe Campaign.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Project Engineer at S2M</h3>
                  <div className="text-sm text-gray-500 mt-1">
                    Experience: <ExperienceCounter fixedMonths={11} startDate={new Date()} />
                  </div>
                </div>
                <span className="text-sm text-gray-500">March 2021 - Feb 2022</span>
              </div>
              <p className="text-sm mt-2 text-gray-600">
                Worked on the SELECTSystem® Card Management System, collaborating with teams to integrate
                Web Services and ensure system stability through automated testing and monitoring.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Education</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold">Engineering Degree</h3>
              <p className="text-sm text-gray-600">Software Engineering and Computer Systems Integration</p>
              <p className="text-sm text-gray-500">Faculty of Sciences and Techniques of Mohammedia (FSTM) • 2018-2021</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-bold">Technical University Degree (DUT)</h3>
              <p className="text-sm text-gray-600">Informatique</p>
              <p className="text-sm text-gray-500">Ecole Supérieure de Technologie de Casablanca • 2016-2018</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            "AWS Certified Developer Associate",
            "C++ Standard Template Library",
            "Git: Branches, Merges, and Remotes",
            "Java EE: JavaServer Faces JSF",
            "Java EE 8: JavaServer Faces JSF 2.3"
          ].map((cert) => (
            <Card key={cert}>
              <CardContent className="p-4">
                <p className="font-medium">{cert}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
