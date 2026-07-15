export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-purple-500/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <h1 className="text-2xl font-bold">
          Shiva <span className="text-purple-500">Dev</span>
        </h1>

        <ul className="hidden md:flex gap-8 text-sm">

          <li>
            <a href="#home" className="hover:text-purple-400">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-purple-400">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-purple-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-purple-400">
              Contact
            </a>
          </li>

        </ul>

        <button className="border border-purple-500 px-5 py-2 rounded-full hover:bg-purple-500 duration-300">
          Hire Me
        </button>

      </div>

    </nav>
  );
}