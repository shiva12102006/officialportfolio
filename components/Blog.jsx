import Image from 'next/image';

const blogs = [
  {
    title: "How To Build A Fast Website",
    date: "May 15, 2026",
    img:"/framwork.png",
  },
  {
    title: "Top JavaScript Frameworks",
    date: "May 10, 2026",
    img:"/structure.png",
  },
  {
    title: "Why Next.js Is Powerful",
    date: "May 05, 2026",
    img:"/next.svg",
  },
];

export default function Blog() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-purple-500 uppercase tracking-widest mb-3">
          Latest From Blog
        </p>

        <h2 className="text-4xl font-bold mb-14">
          My Latest Articles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#0f172a] rounded-2xl overflow-hidden border border-purple-500/10 hover:border-purple-500 duration-300"
            >

              <div className="relative h-52 bg-gray-800">
                <Image
                  src={blog.img}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">

                <p className="text-sm text-gray-500 mb-3">
                  {blog.date}
                </p>

                <h3 className="text-2xl font-semibold mb-4">
                  {blog.title}
                </h3>

                <button className="text-purple-500 hover:text-purple-400">
                  Read More →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}