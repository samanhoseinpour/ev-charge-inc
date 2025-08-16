import { blogPosts } from "../constants/blogPosts";
import { BlogToolbar, BlogGrid } from "../components";

export const metadata = {
  title: "Blogs | EV Charge Inc.",
  description:
    "Explore the latest news, insights, and updates from EV Charge Inc. about electric vehicles, charging technology, and sustainable energy.",
  keywords: [
    "EV charging blogs",
    "electric vehicle news",
    "sustainable energy",
    "EV technology",
    "EV Charge Inc blogs",
  ],
};

const BlogPage = async ({
  searchParams,
}: {
  searchParams: Promise<{
    category?: string | string[];
    sort?: string | string[];
  }>;
}) => {
  const sp = await searchParams;
  const selectedCategory = Array.isArray(sp?.category)
    ? sp.category[0]
    : sp?.category;
  const sort = Array.isArray(sp?.sort) ? sp.sort[0] : sp?.sort || "newest";

  const categories = Array.from(
    new Set(blogPosts.map((p) => p.category.title))
  );

  const filtered = selectedCategory
    ? blogPosts.filter((p) => p.category.title === selectedCategory)
    : blogPosts;

  const sortedPosts = [...filtered].sort((a, b) => {
    const dateA = new Date(a.datetime).getTime();
    const dateB = new Date(b.datetime).getTime();
    switch (sort) {
      case "oldest":
        return dateA - dateB;
      case "title_asc":
        return a.title.localeCompare(b.title);
      case "title_desc":
        return b.title.localeCompare(a.title);
      case "category_asc":
        return a.category.title.localeCompare(b.category.title);
      case "category_desc":
        return b.category.title.localeCompare(a.category.title);
      default:
        return dateB - dateA; // newest first
    }
  });

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
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Insights & Innovations in EV Charging
          </h1>
          <p className="mt-2 text-lg/8 text-gray-600">
            Stay informed with the latest trends, technologies, and strategies
            shaping the future of electric vehicle charging.
          </p>
        </div>
        <BlogToolbar
          categories={categories}
          selectedCategory={selectedCategory}
          sort={sort}
        />

        <BlogGrid posts={sortedPosts} />
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

export default BlogPage;
