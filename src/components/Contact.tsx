import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          I'm always open to discussing new opportunities, collaborating on
          projects, or just having a chat about technology.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <a
            href="mailto:mnkkhan77@gmail.com"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <Mail
              className="text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={32}
            />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">
              mnkkhan77@gmail.com
            </p>
          </a>
          <a
            href="https://github.com/mnkkhan77"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <Github
              className="text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={32}
            />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-600 dark:text-gray-300">@mnkkhan77</p>
          </a>
          <a
            href="https://linkedin.com/in/mnkkhan77"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <Linkedin
              className="text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={32}
            />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-600 dark:text-gray-300">Nasir Khan</p>
          </a>
        </div>
      </div>
    </section>
  );
}
