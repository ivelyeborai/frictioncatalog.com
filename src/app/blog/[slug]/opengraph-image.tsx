import { ImageResponse } from "next/og";
import { posts, getPostBySlug } from "@/data/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 60,
          backgroundColor: "#111111",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "#999999",
              marginBottom: 24,
            }}
          >
            FRICTION CATALOG — BLOG
          </div>
          <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.15 }}>
            {post?.title || "Friction Catalog"}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#aaaaaa",
              marginTop: 20,
              lineHeight: 1.4,
            }}
          >
            {post?.description || ""}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 16, color: "#666666" }}>
            {post?.readTime || ""}
          </span>
          <span style={{ fontSize: 16, color: "#666666" }}>
            frictioncatalog.com
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
