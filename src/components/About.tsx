export default function About() {
  return (
    <section
      id="about"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              As a Junior Developer, I'm passionate about building robust and
              scalable web applications. My journey in software development
              began with a fascination for problem-solving and has evolved into
              a love for creating user-centric solutions.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I have hands-on experience with both backend and frontend
              technologies, allowing me to understand the full development
              lifecycle. I'm particularly drawn to the Spring Boot ecosystem for
              backend development and React.js for creating dynamic user
              interfaces.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              When I'm not coding, I enjoy staying up-to-date with the latest
              technology trends, contributing to open-source projects, and
              continuously expanding my skill set.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">🎯 Focus Areas</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Full-Stack Web Development</li>
                <li>• RESTful API Design</li>
                <li>• Database Design & Optimization</li>
                <li>• Responsive UI/UX Development</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">🚀 Currently Learning</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Microservices Architecture</li>
                <li>• Cloud Technologies (AWS)</li>
                <li>• Advanced React Patterns</li>
                <li>• DevOps Practices</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
