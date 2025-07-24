import { Briefcase, MessageCircle, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1">
            <div className="w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center">
              <User size={48} className="text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Nasir Khan
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Junior Developer
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate about creating innovative web applications with modern
            technologies. I specialize in full-stack development using Java
            Spring Boot and React.js, always eager to learn and tackle new
            challenges.
          </p>
          <div className="flex justify-center space-x-4">
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
          </div>
        </div>
      </div>
    </section>
  );
}
