import Link from "next/link";

const BlogToolbar = ({
  categories,
  selectedCategory,
  sort,
}: {
  categories: string[];
  selectedCategory?: string;
  sort: string;
}) => {
  const categoryChipClass = (active: boolean) =>
    `relative z-10 rounded-full px-3 py-1.5 text-sm font-medium ${
      active
        ? "bg-gray-900 text-white"
        : "bg-gray-50 text-gray-600 hover:bg-gray-100"
    }`;
  const sortLinkClass = (active: boolean) =>
    `px-2 py-1 rounded ${
      active
        ? "font-semibold text-gray-900 underline"
        : "text-gray-600 hover:text-gray-900"
    }`;

  return (
    <>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <Link
          href={`/blogs?sort=${encodeURIComponent(sort)}`}
          className={categoryChipClass(!selectedCategory)}
        >
          All
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat}
            href={`/blogs?category=${encodeURIComponent(
              cat
            )}&sort=${encodeURIComponent(sort)}`}
            className={categoryChipClass(selectedCategory === cat)}
          >
            {cat}
          </Link>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3 text-sm">
        <span className="text-gray-500">Sort:</span>
        <Link
          href={`/blogs?${
            selectedCategory
              ? `category=${encodeURIComponent(selectedCategory)}&`
              : ""
          }sort=newest`}
          className={sortLinkClass(sort === "newest")}
        >
          Newest
        </Link>
        <Link
          href={`/blogs?${
            selectedCategory
              ? `category=${encodeURIComponent(selectedCategory)}&`
              : ""
          }sort=oldest`}
          className={sortLinkClass(sort === "oldest")}
        >
          Oldest
        </Link>
        <Link
          href={`/blogs?${
            selectedCategory
              ? `category=${encodeURIComponent(selectedCategory)}&`
              : ""
          }sort=category_asc`}
          className={sortLinkClass(sort === "category_asc")}
        >
          Category A–Z
        </Link>
        <Link
          href={`/blogs?${
            selectedCategory
              ? `category=${encodeURIComponent(selectedCategory)}&`
              : ""
          }sort=category_desc`}
          className={sortLinkClass(sort === "category_desc")}
        >
          Category Z–A
        </Link>
        <Link
          href={`/blogs?${
            selectedCategory
              ? `category=${encodeURIComponent(selectedCategory)}&`
              : ""
          }sort=title_asc`}
          className={sortLinkClass(sort === "title_asc")}
        >
          Title A–Z
        </Link>
        <Link
          href={`/blogs?${
            selectedCategory
              ? `category=${encodeURIComponent(selectedCategory)}&`
              : ""
          }sort=title_desc`}
          className={sortLinkClass(sort === "title_desc")}
        >
          Title Z–A
        </Link>
      </div>
    </>
  );
};

export default BlogToolbar;
