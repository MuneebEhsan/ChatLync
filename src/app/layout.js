import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://chatsync.pk"),
  title: {
    default: "ChatSync — WhatsApp Business API Platform | Team Inbox, Broadcasts & AI Chatbots",
    template: "%s | ChatSync",
  },
  description:
    "The all-in-one WhatsApp Business API platform. Shared team inbox, bulk broadcasts, AI chatbots, e-commerce automations, and CRM integrations. Start your 7-day free trial.",
  keywords: [
    "WhatsApp Business API",
    "WhatsApp team inbox",
    "WhatsApp bulk messaging",
    "WhatsApp chatbot",
    "WhatsApp CRM",
    "WhatsApp automation",
    "ChatSync",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chatsync.pk",
    siteName: "ChatSync",
    title: "ChatSync — WhatsApp Business API Platform",
    description:
      "The all-in-one WhatsApp Business API platform for businesses. Shared inbox, broadcasts, AI chatbots & more.",
    images: [{ url: "/images/chatlync-logo-removebg-preview.png", width: 1200, height: 630, alt: "ChatSync" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatSync — WhatsApp Business API Platform",
    description: "Shared inbox, broadcasts, AI chatbots & e-commerce automations for WhatsApp Business.",
  },
  verification: {
    google: "your-google-verification-code",
  },
  other: {
    "facebook-domain-verification": "your-facebook-domain-verification-code",
    "p:domain_verify": "your-pinterest-verification-code",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: "https://chatsync.pk",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#4F46E5" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
