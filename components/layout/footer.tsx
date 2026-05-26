type FooterLink = {
  label: string;
  href: string;
  target?: string;
};

const links: FooterLink[] = [
  { label: "Home", href: "/" },
  { label: "Minn Kota Warranty", href: "https://minnkota.johnsonoutdoors.com/us/support/warranty", target: "_blank" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f]">
      <div className="max-w-4xl mx-auto px-8 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="font-bold text-white text-base leading-tight">The Trolling Motor Guy</div>
          </div>
          <p className="text-[#8aafd0] text-xs leading-relaxed">Minn Kota certified repair shop serving the Bradenton area.</p>
        </div>

        <div>
          <div className="text-white font-semibold text-sm uppercase tracking-widest mb-3">Quick Links</div>
          <ul className="space-y-1.5">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} target={link.target ?? "_self"} rel={link.target === "_blank" ? "noopener noreferrer" : undefined} className="text-[#8aafd0] text-sm hover:text-white transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-white font-semibold text-sm uppercase tracking-widest mb-3">Contact</div>
          <ul className="space-y-2 text-sm text-[#8aafd0]">
            <li>(941) 518-9940</li>
            <li>trollingmotorguy@gmail.com</li>
            <li>5002 Lena Rd Unit 104<br />Bradenton, FL</li>
            <li className="pt-1">
              <span className="text-white font-semibold">Mon–Fri</span> 9am–5pm<br />
              <span className="text-white font-semibold">Sat-Sun</span> Closed
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-white/10 px-8 py-4 text-center text-[#8aafd0] text-xs">
        © {new Date().getFullYear()} The Trolling Motor Guy LLC
      </div>
    </footer>
  );
}