import { HoverEffect } from "@/components/ui/card-hover-effect";
import Parser from "rss-parser";

export async function getServerSideProps() {
  const parser = new Parser();
  const proxyUrl = "https://api.allorigins.win/raw?url=";
  const feedUrl = "https://shouryabatra.substack.com/feed";

  try {
    const feed = await parser.parseURL(proxyUrl + encodeURIComponent(feedUrl));
    const posts = feed.items.map((item) => {
      // Extract the first image from the content (if available)
      const imageMatch = item["content:encoded"].match(
        /<img[^>]+src="([^">]+)"/
      );
      const image = imageMatch
        ? imageMatch[1]
        : "https://via.placeholder.com/300"; // Fallback image

      return {
        title: item.title,
        description: item.contentSnippet || "No description available.",
        link: item.link,
        image: image,
      };
    });

    return {
      props: {
        posts,
      },
    };
  } catch (error) {
    console.error("Failed to fetch Substack posts:", error);
    return {
      props: {
        posts: [],
      },
    };
  }
}

export default function Blog({ posts }) {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-16 px-4">
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
  );
}
