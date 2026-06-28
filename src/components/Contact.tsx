import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-6">
          <MapPin size={18} />
          <span>Kolkata, India</span>
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          I'm always open to discussing new opportunities, collaborating on
          projects, or just having a chat about technology.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <a
            href="mailto:mnkkhan77@gmail.com"
            aria-label="Email Md Nasir Khan"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <Mail
              className="text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={32}
            />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 break-all">
              mnkkhan77@gmail.com
            </p>
          </a>
          <a
            href="tel:+918210669402"
            aria-label="Call Md Nasir Khan"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <Phone
              className="text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={32}
            />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              +91 82106 69402
            </p>
          </a>
          <a
            href="https://github.com/mnkkhan77"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <Github
              className="text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={32}
            />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              @mnkkhan77
            </p>
          </a>
          <a
            href="https://linkedin.com/in/mnkkhan77"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
          >
            <Linkedin
              className="text-blue-600 dark:text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform"
              size={32}
            />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              in/mnkkhan77
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
