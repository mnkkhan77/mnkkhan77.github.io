import { Briefcase, Download, MessageCircle } from "lucide-react";

const stats = [
  { value: "3+ yrs", label: "Experience" },
  { value: "100+", label: "REST APIs Built" },
  { value: "4+", label: "Live Projects" },
];

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <img
              src="https://github.com/mnkkhan77.png"
              alt="Md Nasir Khan"
              className="w-full h-full rounded-full object-cover bg-white dark:bg-gray-900"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Md Nasir Khan
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4">
            Full Stack Engineer
          </p>
          <p className="text-sm sm:text-base font-medium text-blue-600 dark:text-blue-400 mb-6">
            Java · Spring Boot · React · NestJS · AWS
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Full Stack Engineer with 3+ years of experience building production
            backend systems and web applications. I design REST APIs, model
            databases, and ship scalable services — with a strong focus on the
            Java &amp; Spring Boot ecosystem.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>Get In Touch</span>
            </a>
            <a
              href="#projects"
              className="border border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
            >
              <Briefcase size={20} />
              <span>View Projects</span>
            </a>
            <a
              href="/Resume_Nasir_Khan_v2.pdf"
              download="Md_Nasir_Khan_Resume.pdf"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Résumé</span>
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
