const services = [
  {
    title: "Web Development",
    desc: "Modern responsive websites using latest technologies.",
  },
  {
    title: "E-commerce Solutions",
    desc: "Online stores with secure payment integration.",
  },
  {
    title: "WordPress Development",
    desc: "Custom WordPress websites and themes.",
  },
  {
    title: "Shopify Development",
    desc: "Professional Shopify store development.",
  },
  {
    title: "SEO Optimization",
    desc: "Improve website ranking and performance.",
  },
  {
    title: "Website Maintenance",
    desc: "Keep your website updated and secure.",
  },
];

export default function Services() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-purple-500 uppercase tracking-widest mb-3">
          My Services
        </p>

        <h2 className="text-4xl font-bold mb-14">
          What I Can Do For You
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#0f172a] p-8 rounded-2xl border border-purple-500/10 hover:border-purple-500 hover:-translate-y-2 duration-300"
            >

              <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 text-2xl mb-6">
                ✦
              </div>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}