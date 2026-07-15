import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24"
    >

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">

        {/* LEFT */}

        <div>

          <span className="bg-green-500/10 text-green-400 px-4 py-2 rounded-full text-sm">
            Available for freelance work
          </span>

          <h1 className="text-6xl font-bold leading-tight mt-6">
            Hi, I’m Shiva <br />

            <span className="text-purple-500">
              Web Developer
            </span>
          </h1>

          <p className="text-gray-400 mt-6 leading-8 max-w-xl">
            I build modern, fast and responsive websites
            that help businesses grow and create amazing
            digital experiences.
          </p>

          <div className="flex gap-4 mt-10">

            <button className="bg-purple-600 px-6 py-3 rounded-xl hover:scale-105 duration-300">
              View My Work
            </button>

            <button className="border border-purple-500 px-6 py-3 rounded-xl hover:bg-purple-500 duration-300">
              Contact Me
            </button>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center">

          <div className="absolute w-80 h-80 bg-purple-700 rounded-full blur-3xl opacity-40"></div>

          <Image
            src="/shiva.png"
            alt="profile"
            width={450}
            height={450}
            className="relative z-10"
          />

        </div>

      </div>
    </section>
  );
}