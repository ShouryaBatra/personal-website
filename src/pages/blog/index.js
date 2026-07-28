import { HoverEffect } from "@/components/ui/card-hover-effect";
import Parser from "rss-parser";

const FEED_URL = "https://shouryabatra.substack.com/feed";

export async function getStaticProps() {
  const parser = new Parser();

  try {
    const response = await fetch(FEED_URL, {
      signal: AbortSignal.timeout(8000),
    });

    if (!response.ok) {
      throw new Error(`Feed responded with ${response.status}`);
    }

    const feed = await parser.parseString(await response.text());

    const posts = feed.items.map((item) => {
      // Extract the first image from the content (if available)
      const content = item["content:encoded"] || item.content || "";
      const imageMatch = content.match(/<img[^>]+src="([^">]+)"/);

      return {
        title: item.title,
        description: item.contentSnippet || "No description available.",
        link: item.link,
        image: imageMatch ? imageMatch[1] : null,
      };
    });

    return {
      props: { posts },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Failed to fetch Substack posts:", error);
    return {
      props: { posts: [] },
      revalidate: 60,
    };
  }
}

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4 relative flex flex-col">
      <div>
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        {posts.length > 0 ? (
          <HoverEffect items={posts} />
        ) : (
          <p className="text-center text-gray-400">No posts available.</p>
        )}
        {posts.length === 0 && (
          <p className="text-center text-gray-400 mt-8">More coming soon!</p>
        )}
      </div>
      <p className="text-center text-gray-400 text-sm absolute bottom-8 left-0 right-0">
        Content fetched from{" "}
        <a
          href="https://shouryabatra.substack.com"
          className="text-blue-400 hover:text-blue-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shourya's Substack
        </a>
      </p>
    </div>
  );
}
