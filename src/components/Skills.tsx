import React from 'react';
import { Code, Database, Server, Globe } from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  level: number;
}

const skills: Skill[] = [
  { name: 'Java', icon: Code, level: 85 },
  { name: 'Spring Boot', icon: Server, level: 80 },
  { name: 'React.js', icon: Globe, level: 75 },
  { name: 'JavaScript', icon: Code, level: 80 },
  { name: 'HTML/CSS', icon: Globe, level: 85 },
  { name: 'MySQL', icon: Database, level: 70 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <skill.icon className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{skill.level}% Proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}