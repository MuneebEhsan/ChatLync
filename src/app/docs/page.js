import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { 
  BookOpen, Phone, Users, Bot, ShoppingCart, Megaphone, 
  ChevronRight, Layers, Shield, CheckCircle, Clock, 
  ArrowRight, Sparkles, FileText, Mail, HelpCircle, 
  Info, Eye, Plus, ArrowUpRight, Settings, Sliders,
  Crown, Lock, Building, CreditCard
} from "lucide-react";

export const metadata = {
  title: "Official Documentation & Setup Guides | ChatSync",
  description: "Exhaustive, step-by-step documentation for ChatSync. Learn how to link WhatsApp API, assign staff roles, build drag-and-drop AI chatbots, connect e-commerce stores, and dispatch marketing broadcasts.",
  alternates: { canonical: "https://www.chatsync.pk/docs" },
  openGraph: {
    title: "ChatSync Exhaustive Documentation & Knowledge Base",
    description: "Detailed step-by-step blueprints for configuring WhatsApp Business API, setting up e-commerce integrations, training AI bots, and coordinating multi-agent shared inboxes.",
    url: "https://www.chatsync.pk/docs",
    siteName: "ChatSync",
    type: "website",
  }
};

export default function DocsPage() {
  const sections = [
    { id: "intro", label: "1. What is ChatSync?", icon: BookOpen },
    { id: "onboarding", label: "2. Meta API Onboarding", icon: Phone },
    { id: "inbox", label: "3. Shared Inbox & Staff", icon: Users },
    { id: "chatbot", label: "4. No-Code AI Chatbot", icon: Bot },
    { id: "ecommerce", label: "5. E-commerce Integration", icon: ShoppingCart },
    { id: "broadcasts", label: "6. Broadcasts & Campaigns", icon: Megaphone },
    { id: "subscriptions", label: "7. Trial & Subscription Billing", icon: Crown },
    { id: "security", label: "8. Data Security & Multi-Tenancy", icon: Shield },
  ];

  return (
    <>
      <Navbar />
      <ScrollReveal />
      <main className="min-h-screen bg-slate-50 pt-[72px] font-sans selection:bg-indigo-600 selection:text-white">
        
        {/* Modern Header Banner */}
        <section className="relative overflow-hidden bg-slate-900 py-24 text-white">
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, #6366F1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px]"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-indigo-500/15 border border-indigo-500/35 text-indigo-300 tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Comprehensive Platform Wiki
            </span>
            <h1 className="text-4xl md:text-5xl font-black !text-white tracking-tight leading-tight">
              <span className="text-white">ChatSync Setup </span>
              <span className="bg-gradient-to-r from-indigo-400 to-amber-300 bg-clip-text text-transparent">Blueprint</span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              An exhaustive, button-by-button guide. Learn exactly how our features operate, why they are essential for your business growth, and follow step-by-step instructions to configure them.
            </p>
            <div className="text-xs text-slate-500 pt-2">
              Last updated: May 20, 2026 • 20 min read time
            </div>
          </div>
        </section>

        {/* Docs Layout */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Sticky Sidebar Navigation */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-28 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-slate-200/60 shadow-sm space-y-4">
                <div>
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Table of Contents</h3>
                  <nav className="space-y-1">
                    {sections.map((s) => {
                      const Icon = s.icon;
                      return (
                        <a
                          key={s.id}
                          href={`#${s.id}`}
                          className="group flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-semibold text-slate-600 hover:bg-indigo-50/50 hover:text-indigo-600 transition-all"
                        >
                          <Icon className="w-4.5 h-4.5 text-slate-400 group-hover:text-indigo-500 transition-colors shrink-0" />
                          <span>{s.label}</span>
                        </a>
                      );
                    })}
                  </nav>
                </div>
                
                <hr className="border-slate-100" />
                
                <div className="p-3.5 bg-slate-50 rounded-xl space-y-2 border border-slate-100">
                  <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1">
                    <Info className="w-3.5 h-3.5 text-indigo-500" /> Need Live Help?
                  </h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    Our local engineering team can configure your chatbot visual flows and Shopify API integrations for you, completely free.
                  </p>
                  <a href="/contact" className="text-[11px] font-bold text-indigo-600 hover:underline flex items-center gap-0.5">
                    Talk to Support <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </aside>

            {/* Content Column */}
            <div className="lg:col-span-3 space-y-12">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm space-y-16 text-slate-600 leading-relaxed text-sm md:text-[15px]">
                
                {/* 1. Intro Section */}
                <section id="intro" className="reveal scroll-mt-28 space-y-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">1. What is ChatSync?</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <p>
                      <strong>ChatSync</strong> is an official Meta Business Solution Tech Provider designed specifically for high-growth enterprises and e-commerce brands in Pakistan. We bridge the gap between official WhatsApp Cloud API channels and your operational workflows.
                    </p>
                    <p>
                      Traditional methods like using WhatsApp Business Web or personal apps restrict you to a single concurrent user, lack automated recovery nodes, and run constant, severe block risks if you attempt message broadcasts. ChatSync solves this by offering a fully unified workspace:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-3">
                        <span className="text-indigo-600 font-bold text-lg">01</span>
                        <div>
                          <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-1">Official Cloud API</h4>
                          <p className="text-[11px] text-slate-500">Fast delivery speeds, green badge verifications, and direct routing through Meta servers.</p>
                        </div>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex gap-3">
                        <span className="text-indigo-600 font-bold text-lg">02</span>
                        <div>
                          <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-1">Pass-Through Fees</h4>
                          <p className="text-[11px] text-slate-500">Pay Meta directly for your message consumption credits; no markup or conversation surcharges.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* 2. Meta Onboarding */}
                <section id="onboarding" className="reveal scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">2. Meta API Onboarding (Embedded Signup)</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> The Purpose
                      </h3>
                      <p className="text-slate-600 text-sm">
                        To access the official WhatsApp Business API, Meta requires an active connection authorization. The <strong>Embedded Signup</strong> pop-up wizard simplifies this. It completely automates backend registration, exchanges permanent access tokens, and registers your phone line in under 5 minutes without writing any code.
                      </p>
                    </div>

                    <div className="p-4 bg-amber-50/50 border border-amber-200/50 rounded-2xl space-y-2">
                      <h4 className="text-amber-800 font-bold text-xs flex items-center gap-1.5">
                        <Shield className="w-4 h-4 text-amber-600" /> Critical Pre-requisites Before You Start:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1.5 text-xs text-amber-700">
                        <li><strong>Deregister Your Number:</strong> If your selected number is currently active on your personal or business WhatsApp mobile apps, you <strong className="text-red-700">must delete the account</strong> (Go to WhatsApp Mobile App &gt; Settings &gt; Account &gt; Delete My Account). If you do not delete it first, Meta's signup API will reject the number.</li>
                        <li><strong>Meta Business Account:</strong> Ensure you have admin access to a Facebook account and a Meta Business Suite profile.</li>
                        <li><strong>Verification Docs ready:</strong> If your business requires official identification, have your NTN Certificate, Certificate of Incorporation, or Business Utility Bill ready in case Meta requests verification.</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Step-by-Step Configuration Tutorial
                      </h3>
                      <ol className="list-decimal pl-5 space-y-4 text-slate-600 text-sm">
                        <li>
                          <strong>Access Onboarding Panel:</strong> Log into the ChatSync console. Go to <strong className="text-indigo-600">Workspace Settings &gt; Channels</strong> and click the blue <strong className="text-indigo-600">"Connect WhatsApp Number"</strong> button.
                        </li>
                        <li>
                          <strong>Initiate Embedded Pop-up:</strong> A secure Meta popup window will appear. Log into the personal Facebook account that manages your company's Facebook Page.
                        </li>
                        <li>
                          <strong>Select Business Profile:</strong> You will be prompted to select your <strong>Meta Business Portfolio</strong>. Choose your existing corporate profile, or choose "Create a Business Portfolio" inside the wizard to establish a new one.
                        </li>
                        <li>
                          <strong>Define WhatsApp Details:</strong> Create or select your WhatsApp Business Account. Input your <strong>WhatsApp Business Display Name</strong> (must match your brand name or website domain), choose your operational timezone (e.g. Asia/Karachi), and select your business category.
                        </li>
                        <li>
                          <strong>Register Your Phone Number:</strong> Input your phone number (including country code <code>+92</code>). Select your verification channel: <strong>Text Message (SMS)</strong> or <strong>Voice Call</strong>. Click Next.
                        </li>
                        <li>
                          <strong>Verify via OTP:</strong> Input the 6-digit verification code sent to your phone number.
                        </li>
                        <li>
                          <strong>Confirm Setup:</strong> Click <strong>Finish</strong>. The popup will close and ChatSync will silently establish encrypted API handshakes, linking your WhatsApp Phone ID and Business Account ID into our system.
                        </li>
                      </ol>
                    </div>

                    <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 space-y-2">
                      <h4 className="font-extrabold text-slate-800 text-xs flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4 text-emerald-500" /> How to Verify Success:
                      </h4>
                      <p className="text-xs text-slate-500">
                        Check the <strong>Workspace Settings &gt; Channels</strong> tab. Your phone number will show a green <strong>"Connected"</strong> tag. Click <strong>"Send Test Message"</strong>, type your personal number, and verify that you receive a welcome template instantly.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* 3. Shared Inbox */}
                <section id="inbox" className="reveal scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">3. Shared Team Inbox & Staff Management</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> The Purpose
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Avoid having your staff pass a single physical phone around to respond to clients. A shared inbox aggregates all incoming conversations into a single centralized dashboard. Business owners can add employees, set fine-grained permissions, tag critical issues, and track speed analytics in real-time.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> How to Configure Your Team & Inbox Steps:
                      </h3>
                      <ol className="list-decimal pl-5 space-y-4 text-slate-600 text-sm">
                        <li>
                          <strong>Invite Team Members:</strong> Navigate to <strong className="text-indigo-600">Dashboard &gt; Settings &gt; Team</strong> and click <strong>"Invite Member"</strong> at the top right.
                        </li>
                        <li>
                          <strong>Configure Roles & Gated Settings:</strong> Type the user's email and select their role:
                          <ul className="list-disc pl-5 mt-2 space-y-2 text-xs text-slate-500">
                            <li><strong>Workspace Owner / Admin:</strong> Unrestricted access. Can edit subscription payments, connect new channels, add/delete staff, and customize chatbot parameters.</li>
                            <li><strong>Team Manager:</strong> Access to all live chat timelines. Can assign active threads to agents, review staff response timers, and manage custom CRM tags.</li>
                            <li><strong>Support Agent:</strong> Strictly restricted. Agents only see threads assigned specifically to them in their "My Chats" queue. They cannot view billing, template editing, or settings.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Assign Incoming Chats:</strong> When a customer messages your number, it drops into the <strong>"Unassigned"</strong> inbox tab. To route it, a Manager or Admin must click the thread, select the <strong>"Assignee"</strong> dropdown at the top right of the screen, and select the agent's name.
                        </li>
                        <li>
                          <strong>Utilize Private Internal Notes:</strong> To collaborate on complex questions, click the yellow <strong>"Note"</strong> icon below the input box. Type your private note (e.g. <em>"Checked CRM, this user is waiting for size L replacement"</em>) and click <strong>Add</strong>. These are highlighted in yellow and are strictly invisible to the client.
                        </li>
                        <li>
                          <strong>Apply CRM Tag Labels:</strong> In the right sidebar card of an active chat, scroll to <strong>Tags</strong>, click the <strong>"+"</strong> icon, and assign tags (e.g. <code>"Urgent Request"</code>, <code>"VIP Seller"</code>, <code>"Shopify Unpaid"</code>). This allows you to filter segments for broadcast marketing campaigns later.
                        </li>
                        <li>
                          <strong>Resolve Conversations:</strong> Once a customer inquiry is answered, click the green <strong>"Resolve"</strong> checkmark button at the top header of the chat. This archives the thread out of your workspace view, keeping your team focused on active customer tickets.
                        </li>
                      </ol>
                    </div>

                    <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 space-y-2">
                      <h4 className="font-extrabold text-slate-800 text-xs flex items-center gap-1.5">
                        <Sliders className="w-4 h-4 text-indigo-500" /> Inbox Filtering Mechanics:
                      </h4>
                      <p className="text-xs text-slate-500">
                        The left sidebar is broken into three main queues: <strong>"My Chats"</strong> (conversations assigned specifically to you), <strong>"Unassigned"</strong> (new incoming client conversations awaiting routing), and <strong>"All Chats"</strong> (comprehensive overview of active chats).
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* 4. Chatbot & RAG */}
                <section id="chatbot" className="reveal scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Bot className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">4. Visual No-Code AI Chatbot & Knowledge Base</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> The Purpose
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Handle customer queries round-the-clock without increasing human payroll. Our visual drag-and-drop studio allows you to design automated button menus, while our advanced RAG model trains the AI on your NTN/Pricing files to generate human-like auto-replies instantly.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Visual Flow Builder Setup Blueprint
                      </h3>
                      <ol className="list-decimal pl-5 space-y-4 text-slate-600 text-sm">
                        <li>
                          <strong>Create a Flow:</strong> Go to the <strong>Chatbot Studio</strong> and click <strong>"+ Create New Flow"</strong>. Name your bot flow and click create.
                        </li>
                        <li>
                          <strong>Establish Trigger Words:</strong> Click the starting <strong>"Trigger Node"</strong>. In the sidebar configuration panel, input keywords that will trigger this bot sequence (e.g. <code>"hello"</code>, <code>"price"</code>, <code>"menu"</code>, <code>"hi"</code>).
                        </li>
                        <li>
                          <strong>Drag and Connect Message Nodes:</strong> Right-click on the canvas or drag nodes from the sidebar:
                          <ul className="list-disc pl-5 mt-2 space-y-2 text-xs text-slate-500">
                            <li><strong>Send Message Block:</strong> Double-click to open its properties. Type your core text. Click <strong>"Add Image"</strong> to open our built-in Cloudinary uploader. Choose a JPG/PNG. Once uploaded, a visual crop thumbnail of the image appears on the visual canvas node.</li>
                            <li><strong>Interactive Quick Replies:</strong> Double-click a button block, define up to 3 interactive reply buttons (e.g., <code>"Track Order"</code>, <code>"Talk to Support"</code>, <code>"Product Catalogue"</code>).</li>
                            <li><strong>Scrollable List Card:</strong> Configure scrollable lists (up to 10 choices), naming options like product categories (e.g., <code>"Footwear"</code>, <code>"Accessories"</code>).</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Link Conversations:</strong> Click the output port (right bullet) of a trigger or button node, and <strong>drag a line to the input port</strong> (left bullet) of your target message node to map the path.
                        </li>
                        <li>
                          <strong>Train the AI Knowledge Base:</strong> Navigate to <strong>AI Settings &gt; Knowledge Base</strong>. Click <strong>"Upload Document"</strong> and select your company pricing PDFs, support FAQs, or return policy text files. Our platform automatically segments, vectorizes, and saves the facts.
                        </li>
                        <li>
                          <strong>Configure Human Handoff (Escalation):</strong> To guarantee clients never get stuck in a "bot loop", drag an <strong>"Escalation Action Node"</strong> to the canvas. Link this node to button options like <em>"Talk to Representative"</em>, or set it as a fallback. When triggered, the AI bot immediately pauses and raises desktop sound notifications for your human support team.
                        </li>
                      </ol>
                    </div>

                    <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 space-y-2">
                      <h4 className="font-extrabold text-slate-800 text-xs flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-500" /> Pro Onboarding Tip:
                      </h4>
                      <p className="text-xs text-slate-500">
                        When uploading a training PDF, ensure text is clean and contains clear question-and-answer layouts (e.g. <em>"Our delivery time for Karachi is 2 days; other cities in Pakistan take 3-4 business days"</em>). This helps the RAG system retrieve and answer queries with 100% precision.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* 5. E-commerce Integrations */}
                <section id="ecommerce" className="reveal scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <ShoppingCart className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">5. E-commerce Store Integration (Shopify & WooCommerce)</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> The Purpose
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Automatically recover lost revenue and verify cash payments. ChatSync connects directly to your Shopify or WooCommerce store using secure, lightning-fast webhooks. When an order event or cart abandonment happens, our platform detects it and triggers targeted WhatsApp templates.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Step-by-Step Store Webhook Configuration
                      </h3>
                      <ol className="list-decimal pl-5 space-y-4 text-slate-600 text-sm">
                        <li>
                          <strong>Retrieve Your API Webhook URL:</strong> In the ChatSync console, navigate to <strong>Integrations &gt; E-commerce</strong>. Select your store platform (Shopify or WooCommerce). Copy the unique, secure webhook URL provided (e.g. <code>https://api.chatsync.pk/webhooks/shopify/...</code>).
                        </li>
                        <li>
                          <strong>Connect Shopify Store Settings:</strong>
                          <ul className="list-disc pl-5 mt-2 space-y-2 text-xs text-slate-500">
                            <li>Log in to your <strong>Shopify Admin Dashboard</strong>. Go to the bottom left <strong>"Settings"</strong> icon, and click <strong>"Notifications"</strong>.</li>
                            <li>Scroll to the bottom to locate <strong>"Webhooks"</strong> and click <strong>"Create Webhook"</strong>.</li>
                            <li>Configure the first webhook: Select <strong>"Checkout Creation"</strong> as the event, format as <strong>"JSON"</strong>, paste the copied ChatSync Webhook URL in the destination path, select API version: <strong>Latest (Stable)</strong>, and click <strong>Save</strong>.</li>
                            <li>Repeat this step to create webhooks for <strong>"Checkout Update"</strong> (for real-time cart recovery) and <strong>"Order Creation"</strong> (for COD verification).</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Connect WooCommerce Store Settings:</strong>
                          <ul className="list-disc pl-5 mt-2 space-y-2 text-xs text-slate-500">
                            <li>Log into your <strong>WordPress WP-Admin Dashboard</strong>. Navigate to <strong>WooCommerce &gt; Settings &gt; Advanced</strong> and select the <strong>"Webhooks"</strong> tab.</li>
                            <li>Click <strong>"Add Webhook"</strong>. Name it "ChatSync Order Hook", change status to <strong>"Active"</strong>, set topic to <strong>"Order Created"</strong>, paste your ChatSync Webhook URL in the <strong>"Delivery URL"</strong>, and click <strong>Save Webhook</strong>.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Customize Abandoned Cart Rules:</strong> In the ChatSync dashboard under E-commerce Settings, toggle <strong>"Abandoned Cart Recovery"</strong> to enabled. Select your target template, specify delay variables (e.g. 30 minutes), and add dynamic coupon codes if desired.
                        </li>
                        <li>
                          <strong>Customize Cash on Delivery (COD) Flows:</strong> Toggle <strong>"COD Verification"</strong> to active. Choose a template containing interactive quick-replies (e.g., <code>"Confirm Order"</code>, <code>"Cancel Order"</code>). When tapped, the system automatically registers the change and tags the checkout inside your Shopify panel as verified.
                        </li>
                      </ol>
                    </div>

                    <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 space-y-2">
                      <h4 className="font-extrabold text-slate-800 text-xs flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-indigo-500" /> Note on Meta Templates:
                      </h4>
                      <p className="text-xs text-slate-500">
                        Any messages initiated automatically by webhooks must use pre-approved Meta Templates. ChatSync provides standard layouts like <em>"Hey {"{1}"}, we noticed you left some premium items in your checkout cart..."</em> which get approved by Meta's AI algorithms instantly.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* 6. Broadcasts & Campaigns */}
                <section id="broadcasts" className="reveal scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Megaphone className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">6. Bulk Broadcasts & Campaign Marketing</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> The Purpose
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Broadcast targeted campaigns to thousands of verified phone contacts simultaneously. ChatSync enables marketing operators to submit design templates, segment clients by CRM tags, schedule deliveries, and track real-time read analytics without any message limits.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Step-by-Step Campaign Launch Blueprint
                      </h3>
                      <ol className="list-decimal pl-5 space-y-4 text-slate-600 text-sm">
                        <li>
                          <strong>Create and Submit a Message Template:</strong> Navigate to <strong>Broadcasts &gt; Templates</strong> and click <strong>"+ Create Template"</strong>.
                          <ul className="list-disc pl-5 mt-2 space-y-2 text-xs text-slate-500">
                            <li>Name your template (use lowercase and underscores, e.g. <code>summer_sale_campaign</code>), select category as <strong>"Marketing"</strong>, and choose your language.</li>
                            <li>Write the text copy in the editor. To add personalized dynamics, click <strong>"Add Variable"</strong> to insert parameters like <code>{"{{1}}"}</code>.</li>
                            <li>Optional: Add a Media Header. Upload a default image or PDF catalog that will be dispatched as the message header.</li>
                            <li>Add quick replies (e.g. <code>"Shop Now"</code>, <code>"Stop / Unsubscribe"</code>).</li>
                            <li>Click <strong>Submit</strong>. Meta's AI algorithms automatically review and approve standard templates within 1 to 2 minutes.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Filter Your Audience Segment:</strong> In your <strong>Contacts CRM</strong>, filter user profiles based on tags (e.g. customer tag matches <code>"VIP Customer"</code>), or click <strong>"Import Contacts"</strong> to upload a CSV sheet containing columns like <code>phone</code>, <code>first_name</code>, and <code>city</code>.
                        </li>
                        <li>
                          <strong>Establish a Campaign:</strong> Go to <strong>Broadcasts &gt; Campaigns</strong> and click <strong>"New Campaign"</strong>.
                        </li>
                        <li>
                          <strong>Select Template & Map Parameters:</strong> Select your approved marketing template. In the parameter mapping boxes, map the dynamic variable fields: Map <code>{"{{1}}"}</code> to the CRM column <code>first_name</code> so the recipient gets a customized name greeting.
                        </li>
                        <li>
                          <strong>Select Recipients:</strong> Choose your previously saved CRM segments, or select the uploaded CSV list.
                        </li>
                        <li>
                          <strong>Schedule and Launch:</strong> Set the broadcast parameters. Choose <strong>"Send Immediately"</strong>, or select <strong>"Schedule for Later"</strong> and configure your target date and time (e.g. 8:00 PM when mobile read volumes spike). Click <strong>Submit Campaign</strong>.
                        </li>
                      </ol>
                    </div>

                    <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 space-y-2">
                      <h4 className="font-extrabold text-slate-800 text-xs flex items-center gap-1.5">
                        <Eye className="w-4 h-4 text-emerald-500" /> Real-time Analytics Dashboard:
                      </h4>
                      <p className="text-xs text-slate-500">
                        Once dispatched, open the campaign dashboard to monitor performance: <strong>"Delivery Rate"</strong> (accepted messages by WhatsApp), <strong>"Read Rate"</strong> (monitored blue ticks), and <strong>"Click-Through Rate"</strong> (CTAs clicked). Always ensure you provide a <code>"Stop"</code> button to maintain a high phone line rating.
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* 7. Trial & Subscription Billing */}
                <section id="subscriptions" className="reveal scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Crown className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">7. Trial Lifecycle & Subscription Billing Settings</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> The Purpose
                      </h3>
                      <p className="text-slate-600 text-sm">
                        ChatSync operates on a clear monthly subscription model with a localized Pakistani billing framework. All Meta-initiated conversation messaging credits are handled via a <strong>Pass-Through Architecture</strong> (meaning you pay Meta directly at cost for their cloud consumption while paying ChatSync strictly for our advanced software workspace features).
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Subscription Tiers & Feature Matrix
                      </h3>
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-slate-200 border border-slate-100 rounded-xl overflow-hidden text-xs">
                          <thead className="bg-slate-50">
                            <tr>
                              <th className="px-4 py-3 text-left font-bold text-slate-700 uppercase tracking-wider">Plan Name</th>
                              <th className="px-4 py-3 text-left font-bold text-slate-700 uppercase tracking-wider">Monthly Pricing</th>
                              <th className="px-4 py-3 text-left font-bold text-slate-700 uppercase tracking-wider">Staff Limit</th>
                              <th className="px-4 py-3 text-left font-bold text-slate-700 uppercase tracking-wider">Core Capabilities & Automation Gates</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100 bg-white">
                            <tr>
                              <td className="px-4 py-3.5 font-bold text-slate-900">Starter Plan</td>
                              <td className="px-4 py-3.5 font-semibold text-indigo-600">Rs. 4,000 / mo</td>
                              <td className="px-4 py-3.5 text-slate-500">Max 3 Agents</td>
                              <td className="px-4 py-3.5 text-slate-500">Shared inbox, contacts CRM, manual broadcasting, welcome/away automated quick replies. <span className="text-red-500 font-medium">Shopify/WooCommerce integrations and RAG AI features are strictly disabled.</span></td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3.5 font-bold text-slate-900">Growth Plan</td>
                              <td className="px-4 py-3.5 font-semibold text-indigo-600">Rs. 8,500 / mo</td>
                              <td className="px-4 py-3.5 text-slate-500">Max 10 Agents</td>
                              <td className="px-4 py-3.5 text-slate-500">Everything in Starter + <strong>Advanced e-commerce webhooks</strong>. Enables automated abandoned cart messaging, shipping tracking alerts, and interactive Cash on Delivery (COD) message verifications.</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-3.5 font-bold text-slate-900">Business Plan</td>
                              <td className="px-4 py-3.5 font-semibold text-indigo-600">Rs. 18,000 / mo</td>
                              <td className="px-4 py-3.5 text-slate-500">Unlimited Agents</td>
                              <td className="px-4 py-3.5 text-slate-500">Everything in Growth + <strong>Multi-store links</strong> and the complete <strong>Artificial Intelligence Suite</strong>. Train customized chatbots via unstructured PDF catalogs/Knowledge Bases for autonomous vector-based retrieval.</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Localized Payment Gateway Setup
                      </h3>
                      <p className="text-sm text-slate-600 mb-3">
                        To simplify checkout inside Pakistan, we integrate direct credit/debit networks alongside popular mobile wallet APIs:
                      </p>
                      <ol className="list-decimal pl-5 space-y-3 text-slate-600 text-sm">
                        <li>
                          <strong>SadaBiz & Local Bank Transfer:</strong> Go to <strong>Billing &gt; Subscriptions</strong>, select your target plan, and choose "Pay via SadaBiz". You can input direct debit/credit cards or execute a secure instant bank transfer to our corporate account.
                        </li>
                        <li>
                          <strong>Easypaisa & JazzCash Business Wallet API:</strong> Select "Mobile Wallet Gateway", input your active personal or business wallet mobile number, and click <strong>Initiate Payment</strong>. A secure authentication notification prompt will instantly display on your mobile phone screen. Tap to enter your PIN code and authorize the monthly billing cycle in under 10 seconds.
                        </li>
                      </ol>
                    </div>

                    <div className="p-4 bg-indigo-50/65 border border-indigo-100 rounded-2xl space-y-2">
                      <h4 className="text-indigo-900 font-extrabold text-xs flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-indigo-600" /> The 7-Day Free Trial & Dynamic 3-Day Extension Logic:
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        When you register a workspace, you automatically receive a <strong>7-Day Free Trial</strong> with full access to Starter capabilities. 
                        To assist active merchants, our billing engine tracks your platform metrics. If you hit <strong>Day 6</strong> with high messaging activity (processing <strong>more than 50 customer chats</strong>) but haven't setup localized billing cards yet, ChatSync's backend automatically grants an <strong>additional 3-day extension buffer</strong>. You will receive a personalized dashboard prompt and an automated WhatsApp notification: <em>"We see your team is actively serving customers! To ensure your workflow isn't interrupted, we have extended your free trial by 3 additional days. Please complete your payment setup."</em>
                      </p>
                    </div>
                  </div>
                </section>

                <hr className="border-slate-100" />

                {/* 8. Data Security, Isolation & Multi-Tenancy */}
                <section id="security" className="reveal scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                      <Shield className="w-5 h-5" />
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">8. Enterprise Data Security & Multi-Tenancy Architecture</h2>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-1.5 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> The Purpose
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Operating as a multi-tenant cloud service means we host hundreds of businesses concurrently on our server infrastructure. We enforce rigid data boundaries to ensure a local clothing store, a home bakery, and a major multi-national brand share the exact same software database with 100% absolute privacy, security, and isolated performance.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-800 text-base mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> How Your Data is Isolated Under the Hood
                      </h3>
                      <ol className="list-decimal pl-5 space-y-4 text-slate-600 text-sm">
                        <li>
                          <strong>Strict Organizational Isolation:</strong> Upon tenant signup, our system generates a unique, cryptographically secure <strong>Organization ID</strong> (e.g. <code>org_9f82d1c...</code>). Absolutely every customer contact, chatbot flow node, and message record created by your workspace is permanently stamped with this ID in the database.
                        </li>
                        <li>
                          <strong>The Invisible Query Barrier:</strong> The ChatSync core backend applies automatic global query filters. When you access your shared inbox or dispatch a broadcast, the server identifies your authenticated login session, extracts your verified <strong>Organization ID</strong>, and locks it into the database request query. It is mathematically impossible for another business owner to view your CRM database because our servers reject any query that does not perfectly match the organization keys.
                        </li>
                        <li>
                          <strong>Central Tech Provider Webhook Routing:</strong> Because ChatSync acts as an official centralized Tech Provider, Meta registers our single corporate webhook address to receive all incoming messages. When customer texts arrive:
                          <ul className="list-disc pl-5 mt-2 space-y-2 text-xs text-slate-500">
                            <li>Our high-speed webhook sorting engine instantly unpacks the Meta API payload.</li>
                            <li>The engine extracts the receiving <strong>WhatsApp Phone Number ID</strong> and checks our Master Tenant Registry.</li>
                            <li>It matches the Phone ID to the correct encrypted <strong>Organization ID</strong>.</li>
                            <li>The backend instantly channels the live text event down to the specific tenant's workspace screen over secure, real-time WebSocket sessions, preserving absolute isolation.</li>
                          </ul>
                        </li>
                      </ol>
                    </div>

                    <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-4 space-y-2">
                      <h4 className="font-extrabold text-slate-800 text-xs flex items-center gap-1.5">
                        <Lock className="w-4 h-4 text-emerald-500" /> Security Credentials Safety:
                      </h4>
                      <p className="text-xs text-slate-500">
                        When you complete the Meta Embedded Signup popup, our server executes a silent handshake, exchanging authorization tokens for encrypted Meta Access Credentials. These tokens are stored using AES-256 military-grade encryption within our secure database keychain, and are strictly accessible only by the automated webhook sorting facility.
                      </p>
                    </div>
                  </div>
                </section>

              </div>

              {/* Support / Contact Bottom Banner */}
              <div className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-3xl p-8 md:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
                <div className="space-y-2 text-center md:text-left relative z-10">
                  <h3 className="text-lg md:text-xl font-bold">Still have onboarding questions?</h3>
                  <p className="text-slate-300 text-xs md:text-sm">Our engineering team is ready to guide you through setup or configure customized bots.</p>
                </div>
                <a
                  href="/contact"
                  className="px-6 py-3 bg-white text-indigo-900 hover:bg-slate-50 transition rounded-xl font-bold text-sm shrink-0 shadow-sm flex items-center gap-2 relative z-10"
                >
                  <Mail className="w-4.5 h-4.5" />
                  Contact Support
                </a>
              </div>

            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
