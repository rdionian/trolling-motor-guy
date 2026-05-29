export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* Hero */}
      <div className="relative min-h-[500px] flex items-start justify-center text-center px-8 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/trollingmotor.jpeg"
            alt="Trolling motor repair"
            className="w-full h-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            Trolling Motor Repair
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-8 py-12 space-y-0">

        {/* Services + Workbench */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="px-10 py-10">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Professional Trolling Motor Repair</h2>
            <div className="w-20 h-1 bg-[#F5A800] mb-6" />
            <div className="grid grid-cols-1 gap-5">
              {[
                { name: "Motor & Armature", desc: "Windings, brushes, commutator resurfacing" },
                { name: "Prop & Drive", desc: "Prop strikes, bent shafts, lower unit damage" },
                { name: "Electronics & Controls", desc: "Foot pedals, speed boards, autopilot systems" },
                { name: "Corrosion & Seals", desc: "Salt flush, shaft seals, corrosion treatment" },
                { name: "Talon", desc: "" },
              ].map((item) => (
                <div key={item.name} className="flex items-start gap-3">
                  <div>
                    <div className="font-bold text-gray-900">{item.name}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="min-h-[400px]">
            <img src="/images/workbench.jpg" alt="Repair workbench" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Yellow divider */}
        <div className="h-2 bg-[#F5A800] opacity-40" />

        {/* For Sale */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="px-10 py-10">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Parts for Sale</h2>
            <div className="w-20 h-1 bg-[#F5A800] mb-6" />
            <p className="text-gray-500 text-sm mb-5">
              We stock a select range of OEM parts.
            </p>
            <ul className="space-y-3">
              {["Propellers & Hardware", "Foot Pedals & Cables", "Speed Control Boards", "Shafts & Lower Units", "Seals, Brushes & Bearings", "Batteries & Chargers"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <button className="mt-8 bg-[#1e3a5f] text-white font-semibold text-sm px-6 py-2.5 rounded hover:bg-[#16304f] transition-colors">
              Call to Check Availability
            </button>
          </div>

          <div className="px-10 py-10">
            <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Trolling Motors for Sale</h2>
            <div className="w-20 h-1 bg-[#F5A800] mb-6" />
            <div className="mb-6">
              <img src="/images/motors.jpg" alt="Trolling motors for sale" className="w-full object-cover rounded" />
            </div>
            <a href="/motors" className="mt-2 inline-block bg-[#1e3a5f] text-white font-semibold text-sm px-6 py-2.5 rounded hover:bg-[#16304f] transition-colors">
              View Motors for Sale
            </a>
          </div>
        </div>

        {/* Yellow divider */}
        <div className="h-2 bg-[#F5A800] opacity-40" />

        {/* Map + Hours */}
        <div id="location" className="grid grid-cols-1 md:grid-cols-[1fr_280px]">
          <iframe src="https://maps.google.com/maps?q=5002+Lena+Rd+Unit+104+Bradenton+FL&output=embed" width="100%" height="100%" style={{ border: 0, display: "block", minHeight: "400px" }} allowFullScreen loading="lazy" />
          <div className="px-8 py-10 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">Hours & Location</h2>
              <div className="w-20 h-1 bg-[#F5A800] mb-6" />
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#F5A800] mb-1">Hours</div>
                  <div className="text-gray-900 font-semibold">Mon–Fri 9am–5pm</div>
                  <div className="text-gray-900 font-semibold">Sat-Sun Closed</div>
                </div>
                <div className="h-px bg-gray-100" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#F5A800] mb-1">Address</div>
                  <div className="text-gray-900 font-semibold">5002 Lena Rd Unit 104</div>
                  <div className="text-gray-900 font-semibold">Bradenton, FL</div>
                </div>
                <div className="h-px bg-gray-100" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#F5A800] mb-1">Phone</div>
                  <div className="text-gray-900 font-semibold">(941) 518-9940</div>
                </div>
                <div className="h-px bg-gray-100" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[#F5A800] mb-1">Email</div>
                  <div className="text-gray-900 font-semibold">trollingmotorguy@gmail.com</div>
                </div>
              </div>
            </div>
            <a href="https://www.google.com/maps/dir/?api=1&destination=5002+Lena+Rd+Unit+104+Bradenton+FL" target="_blank" rel="noopener noreferrer" className="mt-6 block text-center text-sm bg-[#1e3a5f] text-white px-4 py-2.5 rounded hover:bg-[#16304f] transition-colors font-semibold">
              Get Directions
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}