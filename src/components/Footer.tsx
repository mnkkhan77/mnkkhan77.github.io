export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Nasir Khan. Built with React.js and
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
