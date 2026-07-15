import Image from 'next/image';

const projects = [
  {
    title: "Portfolio Website",
    desc: "Modern responsive portfolio website",
    img: "/ajmer.png",
  },
  {
    title: "Ecommerce Store",
    desc: "Full stack ecommerce website",
    img: "/Gemini_Generated_Image_aokq6iaokq6iaokq.png",
  },
  {
    title: "Business Website",
    desc: "Professional company website",
    img: "/besinus.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-14">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-2xl overflow-hidden border border-purple-500/10 hover:border-purple-500 duration-300"
            >

              <div className="relative h-52 bg-gray-800">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400">
                  {project.desc}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}