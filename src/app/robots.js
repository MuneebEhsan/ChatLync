export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/", "/_next/"] },
    ],
    sitemap: "https://www.chatsync.pk/sitemap.xml",
  };
}
