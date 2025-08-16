import { blogPosts } from "../constants/blogPosts";
import Image from "next/image";
import Link from "next/link";

interface fromBlogTypes {
  limit?: number;
}

const FromBlog = ({ limit = 3 }: fromBlogTypes) => {
  const latestPosts = blogPosts
    .slice()
    .sort(
      (a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime()
    )
    .slice(0, limit);
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h3 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              EV Charging Intelligence
            </h3>
            <p className="mt-2 text-lg/8 text-gray-600">
              Data‑driven perspectives on technology, infrastructure, and
              operations.
            </p>
          </div>
          <Link
            href="/blogs"
            className="px-6 py-3 bg-[#2c5530] text-white rounded-md font-semibold hover:opacity-90 transition-opacity"
          >
            Read the latest
          </Link>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative grow">
                <h4 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h4>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {post.description}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <Image
                  width={40}
                  height={40}
                  alt={post.title}
                  src={post.author.imageUrl}
                  className="rounded-full bg-gray-50"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FromBlog;
