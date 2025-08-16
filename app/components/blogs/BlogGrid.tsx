import Image from "next/image";
import Link from "next/link";

import { blogPosts } from "@/app/constants/blogPosts";

// Types and extracted components for cleaner composition
type BlogPost = (typeof blogPosts)[number];

const BlogGrid = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => (
        <article
          key={post.id}
          className="flex flex-col items-start justify-between"
        >
          <div className="relative w-full aspect-video sm:aspect-2/1 lg:aspect-3/2">
            <Link href={post.href} className="">
              <Image
                alt={post.title}
                src={post.imageUrl}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="rounded-2xl bg-neutral-50 object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
            </Link>
          </div>
          <div className="max-w-xl">
            <div className="mt-8 flex items-center gap-x-4 text-xs">
              <time dateTime={post.datetime} className="text-gray-500">
                {post.date}
              </time>
              <Link
                href={post.category.href}
                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {post.category.title}
              </Link>
            </div>
            <div className="group relative">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <Link href={post.href}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h3>
              <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                {post.description}
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-x-4">
              <Image
                width={40}
                height={40}
                alt=""
                src={post.author.imageUrl}
                className="rounded-full bg-gray-100"
              />
              <div className="text-sm/6">
                <p className="font-semibold text-gray-900">
                  <Link href={post.author.href}>
                    <span className="absolute inset-0" />
                    {post.author.name}
                  </Link>
                </p>
                <p className="text-gray-600">{post.author.role}</p>
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogGrid;
