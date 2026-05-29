"use client";
import { useState } from "react";

export default function Warranty() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "", city: "", state: "", zip: "",
    purchaseDate: "", serialNumber: "", issue: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [validationError, setValidationError] = useState("");

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.issue) {
      setValidationError("Please fill out your name, email, and a description of the issue before submitting.");
      return;
    }
    setValidationError("");
    setStatus("sending");
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setStatus(data.success ? "success" : "error");
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-2xl mx-auto px-8 py-16">

        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">Warranty Service</h1>
        <div className="w-20 h-1 bg-[#F5A800] mb-6" />

        <div className="bg-[#f5f8fb] border border-[#d0d8e0] rounded-lg p-6 mb-8 space-y-4">
          <p className="text-gray-700 text-sm">
            <strong className="text-[#1e3a5f]">The Trolling Motor Guy is an authorized Minn Kota Service Center.</strong> If your motor has a defect in materials or workmanship, it may be covered under Minn Kota's limited warranty and we can handle the entire repair process on your behalf.
          </p>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#F5A800] mb-2">Minn Kota Warranty Coverage</div>
            <ul className="space-y-1.5 text-sm text-gray-600">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] flex-shrink-0 mt-1.5" />Most freshwater and saltwater motors: Limited 2-year warranty on the entire product</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] flex-shrink-0 mt-1.5" />Ultrex models (2016-2023): Limited 3-year warranty on the entire product</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] flex-shrink-0 mt-1.5" />Composite shafts: Limited Lifetime Warranty on most models</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] flex-shrink-0 mt-1.5" />Factory reconditioned motors: Limited 1-year warranty</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] flex-shrink-0 mt-1.5" />Covers defects in materials and workmanship only — damage from use, accidents, or misuse is not covered</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] flex-shrink-0 mt-1.5" />Proof of purchase required. Without a receipt, Minn Kota will use the serial number and date of manufacture to determine coverage</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#F5A800] flex-shrink-0 mt-1.5" />Valid in the United States only</li>
            </ul>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#F5A800] mb-2">How It Works</div>
            <ol className="space-y-1.5 text-sm text-gray-600 list-decimal list-inside">
              <li>Fill out the form below with your info and a description of the issue</li>
              <li>We'll reach out to confirm your warranty eligibility</li>
              <li>Drop off your motor at our shop, removed from the vessel</li>
              <li>We handle the Minn Kota warranty claim and complete the repair</li>
            </ol>
          </div>
          <a
            href="https://minnkota.johnsonoutdoors.com/us/support/warranty"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-[#1e3a5f] font-semibold underline underline-offset-2"
          >
            View full Minn Kota warranty details
          </a>
        </div>

        <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">Get Started</h2>
        <div className="w-16 h-1 bg-[#F5A800] mb-6" />
        <p className="text-gray-500 text-sm mb-8">
          Fill out the form below and we'll get back to you to confirm eligibility and schedule a drop-off.
        </p>

        {status === "success" ? (
          <div className="bg-green-50 border border-green-200 rounded p-6 text-center">
            <div className="text-green-700 font-semibold text-lg mb-1">Request Submitted!</div>
            <div className="text-green-600 text-sm">Thanks! We'll be in touch soon. Check your email for a confirmation.</div>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Full Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="John Smith" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e3a5f]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Phone Number</label>
              <input type="tel" placeholder="(941) 555-0000" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e3a5f]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Email Address <span className="text-red-500">*</span></label>
              <input type="email" placeholder="john@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e3a5f]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Street Address</label>
              <input type="text" placeholder="123 Main St" value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e3a5f]" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">City</label>
                <input type="text" placeholder="Bradenton" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e3a5f]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">State</label>
                <input type="text" placeholder="FL" value={form.state} onChange={e => setForm({ ...form, state: e.target.value })} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e3a5f]" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Zip</label>
                <input type="text" placeholder="34208" value={form.zip} onChange={e => setForm({ ...form, zip: e.target.value })} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e3a5f]" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Date of Purchase</label>
              <input type="date" value={form.purchaseDate} onChange={e => setForm({ ...form, purchaseDate: e.target.value })} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e3a5f]" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">Serial Number</label>
              <input type="text" placeholder="Found on the motor label" value={form.serialNumber} onChange={e => setForm({ ...form, serialNumber: e.target.value })} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e3a5f]" />
              <p className="text-xs text-gray-400 mt-1">If you don't have a receipt, Minn Kota will use this to determine coverage.</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#1e3a5f] mb-1">What's going on with your motor? <span className="text-red-500">*</span></label>
              <textarea rows={5} placeholder="Describe the issue — when it started, what it's doing, any error codes, etc." value={form.issue} onChange={e => setForm({ ...form, issue: e.target.value })} className="w-full border border-gray-200 rounded px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-[#1e3a5f] resize-none" />
            </div>
            {validationError && (
              <div className="text-red-500 text-sm">{validationError}</div>
            )}
            {status === "error" && (
              <div className="text-red-500 text-sm">Something went wrong. Please try again or call us directly at (941) 518-9940.</div>
            )}
            <button onClick={handleSubmit} disabled={status === "sending"} className="w-full bg-[#1e3a5f] text-white font-semibold py-3 rounded hover:bg-[#16304f] transition-colors disabled:opacity-50">
              {status === "sending" ? "Sending..." : "Submit Warranty Request"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
