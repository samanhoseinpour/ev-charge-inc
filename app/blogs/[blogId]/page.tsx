import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts } from "../../constants/blogPosts";

import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blogId: string }>;
}): Promise<Metadata> {
  const { blogId } = await params;
  const post = blogPosts.find(
    (p) => p.slug === blogId || String(p.id) === blogId
  );

  if (!post) {
    return {
      title: "Blog Not Found | EV Charge Inc.",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${post.title} | EV Charge Inc.`,
    description: post.description,
    keywords: [
      "EV charging blogs",
      "electric vehicle news",
      "sustainable energy",
      "EV technology",
      post.category.title,
    ],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `/blogs/${post.slug ?? blogId}`,
      images: [
        {
          url: post.imageUrl,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.imageUrl],
    },
    alternates: {
      canonical: `/blogs/${post.slug ?? blogId}`,
    },
  };
}

const Blog = async ({ params }: { params: Promise<{ blogId: string }> }) => {
  const { blogId } = await params;
  const post = blogPosts.find(
    (p) => p.slug === blogId || String(p.id) === blogId
  );

  if (!post) return notFound();

  return (
    <section className="py-24 sm:py-32 mt-16">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#2C5530] to-[#2C5530] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
        />
      </div>
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        <Link
          href="/blogs"
          className="text-sm text-gray-600 hover:text-gray-900"
        >
          ← Back to all blogs
        </Link>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-x-3 text-sm text-gray-600">
          <time dateTime={post.datetime}>{post.date}</time>
          <span>•</span>
          <Link
            href={post.category.href}
            className="underline underline-offset-4 hover:no-underline"
          >
            {post.category.title}
          </Link>
        </div>

        <div className="mt-8 relative w-full aspect-video">
          <Image
            alt={post.title}
            src={post.imageUrl}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="rounded-2xl bg-neutral-50 object-cover"
          />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-gray-900/10 ring-inset" />
        </div>

        <article className="prose prose-neutral mt-10">
          <p>{post.description}</p>
          {/* Replace with real rich content when available */}
        </article>

        <div className="mt-10 flex items-center gap-x-4 border-t pt-8">
          <Image
            width={40}
            height={40}
            alt=""
            src={post.author.imageUrl}
            className="rounded-full bg-gray-100"
          />
          <div>
            <p className="font-medium text-gray-900">{post.author.name}</p>
            <p className="text-sm text-gray-600">{post.author.role}</p>
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#2C5530] to-[#2C5530] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
        />
      </div>
    </section>
  );
};

export default Blog;
