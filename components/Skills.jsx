const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind",
  "Node.js",
  "MongoDB",
];

export default function Skills() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-14">
          Technologies I Work With
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#0f172a] border border-purple-500/10 rounded-2xl p-6 text-center hover:border-purple-500 duration-300"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}