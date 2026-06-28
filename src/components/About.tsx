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
              I'm a Full Stack Engineer with 3+ years of experience building
              production backend systems and web applications. I started my
              career at Cognizant Technology Solutions, working on
              enterprise-scale Java Spring Boot APIs and AWS deployments.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Today I deliver marketplace and AI-integrated backend systems at
              Growth Loops Technology using NestJS, Next.js, and Prisma — from
              real-time WebSocket chat to full order-management flows. Alongside
              that, I've kept my Java skills sharp through independent full-stack
              projects with Spring Boot backends.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I'm strongest in REST API design, database modelling, and system
              architecture — and I'm actively targeting Java / Spring Boot
              engineering roles where I can build robust, scalable backends.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">🎯 Core Strengths</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• REST API Design &amp; Microservices</li>
                <li>• Database Modelling &amp; Query Optimisation</li>
                <li>• System Design &amp; API Architecture</li>
                <li>• Real-time Systems (WebSockets)</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
              <h4 className="font-semibold mb-2">🚀 Working With</h4>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Java, Spring Boot &amp; Microservices</li>
                <li>• NestJS, TypeScript &amp; Next.js</li>
                <li>• PostgreSQL, MySQL &amp; Prisma ORM</li>
                <li>• AWS (S3, EC2) &amp; CI/CD Pipelines</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
