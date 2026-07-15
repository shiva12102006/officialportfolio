const testimonials = [
  {
    name: "Ravi Sharma",
    role: "CEO, Tech Solutions",
    review:
      "Amazing developer with great communication and excellent work quality.",
  },
  {
    name: "Priya Mehta",
    role: "Founder, StartupHub",
    review:
      "Highly recommended for modern and responsive web development projects.",
  },
  {
    name: "Ankit Verma",
    role: "Marketing Manager",
    review:
      "Professional, skilled and delivered the project on time.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-purple-500 uppercase tracking-widest mb-3">
          Testimonials
        </p>

        <h2 className="text-4xl font-bold mb-14">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-8 rounded-2xl border border-purple-500/10"
            >

              <div className="text-purple-500 text-5xl mb-6">
                "
              </div>

              <p className="text-gray-400 leading-8 mb-8">
                {item.review}
              </p>

              <div>
                <h4 className="font-semibold text-lg">
                  {item.name}
                </h4>

                <p className="text-gray-500 text-sm">
                  {item.role}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}