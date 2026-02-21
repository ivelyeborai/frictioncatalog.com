import { ImageResponse } from "next/og";
import { products, getProductBySlug } from "@/data/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  const label = `FRICTION CATALOG — ${product?.category?.toUpperCase() || "SHOP"}`;

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
              display: "flex",
              alignItems: "center",
              marginBottom: 24,
            }}
          >
            <span style={{ fontSize: 64, marginRight: 16 }}>
              {product?.emoji || ""}
            </span>
            <span
              style={{
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "#999999",
              }}
            >
              {label}
            </span>
          </div>
          <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1.15 }}>
            {product?.name || "Friction Catalog"}
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#aaaaaa",
              marginTop: 20,
              lineHeight: 1.4,
            }}
          >
            {product?.tagline || ""}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: 36, fontWeight: 700 }}>
            {product?.price || ""}
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
