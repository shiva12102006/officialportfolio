export default function Footer() {
  return (
    <footer className="border-t border-purple-500/10 py-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-10">

          {/* LOGO */}

          <div>

            <h2 className="text-3xl font-bold mb-4">
              Shiva <span className="text-purple-500">Dev</span>
            </h2>

            <p className="text-gray-400 leading-7">
              Building modern digital experiences
              with clean code and creative UI.
            </p>

          </div>

          {/* LINKS */}

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#about">About</a>
              </li>

              <li>
                <a href="#projects">Projects</a>
              </li>

              <li>
                <a href="#contact">Contact</a>
              </li>

            </ul>

          </div>

          {/* SERVICES */}

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
              <li>Shopify Development</li>

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="font-semibold text-xl mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>hello@shivadev.com</li>
              <li>+91 98765 43210</li>
              <li>India</li>

            </ul>

          </div>

        </div>

        <div className="border-t border-purple-500/10 mt-10 pt-6 text-center text-gray-500">

          © 2026 Shiva Dev. All rights reserved.

        </div>

      </div>

    </footer>
  );
}