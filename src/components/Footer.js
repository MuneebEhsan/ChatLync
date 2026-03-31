import Link from "next/link";
import { MessageSquare, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Integrations", href: "/features#integrations" },
    { label: "API Docs", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[var(--color-heading)] text-gray-400">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to transform your WhatsApp business?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses using Chatlync to grow revenue and deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://app.chatlync.io/signup"
              className="px-8 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-semibold rounded-xl transition shadow-lg shadow-[var(--color-primary)]/30 text-[15px]"
            >
              Start Free Trial
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold rounded-xl transition text-[15px] border border-white/10"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <img src="/images/chatlync-logo-removebg-preview.png" alt="Chatlync" className="h-9 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
              The all-in-one WhatsApp Business API platform for modern businesses. Inbox, broadcasts, chatbots, and more.
            </p>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Mail className="w-4 h-4 shrink-0" />
              <span>hello@chatlync.io</span>
            </div>
          </div>

          {/* Link Groups */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-gray-500 hover:text-white transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} Chatlync. All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-600">Official</span>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/20px-WhatsApp.svg.png" alt="WhatsApp" className="w-4 h-4 mx-1" />
            <span className="text-xs text-gray-600">Business Solution Provider</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
