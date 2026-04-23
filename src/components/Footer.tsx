"use client";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Contact Us", href: "#contact" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Terms of Use", href: "#terms" },
  ];

  const programs = [
    { name: "PG Program in Data Science", href: "#data-science" },
    { name: "PG Program in AI & ML", href: "#ai-ml" },
    { name: "PG Program in Cloud Computing", href: "#cloud" },
    { name: "Executive Alums", href: "#alums" },
  ];

  const contactInfo = [
    { icon: "📞", label: "+91-9999999999", href: "tel:+919999999999" },
    { icon: "✉️", label: "support@accredian.com", href: "mailto:support@accredian.com" },
    { icon: "📍", label: "Bangalore, India", href: "#location" },
  ];

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card border border-white/10 p-10 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <span className="text-white font-bold text-lg">A</span>
                </div>
                <span className="font-bold text-xl text-white">Accredian</span>
              </div>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Helping professionals with latest technology skills through
                job-focused education and expert guidance.
              </p>
              <div className="flex gap-3">
                {["LinkedIn", "Twitter", "YouTube", "Instagram"].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-10 h-10 rounded-lg glass border border-white/10 hover:border-indigo-500/50 hover:bg-indigo-500/20 flex items-center justify-center transition-all duration-300 group"
                    aria-label={social}
                  >
                    <span className="text-sm font-bold text-slate-400 group-hover:text-indigo-400 transition-colors">
                      {social[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full"></span>
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-indigo-400 text-sm transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-indigo-400 transition-colors"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-purple-400 to-pink-400 rounded-full"></span>
                Programs
              </h3>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <a
                      href={program.href}
                      className="text-slate-400 hover:text-purple-400 text-sm transition-colors inline-flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-purple-400 transition-colors"></span>
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-pink-400 to-rose-400 rounded-full"></span>
                Contact Us
              </h3>
              <ul className="space-y-4">
                {contactInfo.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-slate-400 hover:text-pink-400 text-sm flex items-center gap-3 transition-colors"
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-amber-400 to-orange-400 rounded-full"></span>
                Get Updates
              </h3>
              <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                Join our newsletter for the latest updates in tech and
                ways to learn.
              </p>
              <form className="space-y-3" onSubmit={(e) => { e.preventDefault(); }}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 glass border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full btn-gradient py-3 text-sm"
                >
                  <span>Join Now</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Accredian. All rights reserved.
          </p>
          <p className="text-slate-600 text-sm flex items-center gap-2">
            Made with <span className="text-pink-500">❤</span> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
