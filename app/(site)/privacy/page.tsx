export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-2xl mx-auto px-8 py-16">
        <h1 className="text-3xl font-bold text-[#1e3a5f] mb-2">Privacy Policy</h1>
        <div className="w-20 h-1 bg-[#F5A800] mb-6" />
        <p className="text-gray-400 text-xs mb-8">Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</p>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="font-bold text-[#1e3a5f] text-base mb-2">Overview</h2>
            <p>The Trolling Motor Guy ("we", "us", or "our") operates this website. We are committed to protecting your privacy. This policy explains what information we collect and how it is used.</p>
          </div>

          <div>
            <h2 className="font-bold text-[#1e3a5f] text-base mb-2">Information We Collect</h2>
            <p>When you submit a warranty or contact form on this site, we collect the following information:</p>
            <ul className="mt-2 space-y-1 list-disc list-inside">
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Mailing address</li>
              <li>Date of purchase</li>
              <li>Description of the issue with your motor</li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-[#1e3a5f] text-base mb-2">How We Use Your Information</h2>
            <p>The information you submit is sent directly to us via email and is used solely to respond to your inquiry or process your warranty request. We do not store your information in any database, and we do not share, sell, or distribute your personal information to any third parties.</p>
          </div>

          <div>
            <h2 className="font-bold text-[#1e3a5f] text-base mb-2">Data Retention</h2>
            <p>We do not store any form submissions on our servers. Your information exists only in the email correspondence between you and us. You may request deletion of that correspondence at any time by contacting us directly.</p>
          </div>

          <div>
            <h2 className="font-bold text-[#1e3a5f] text-base mb-2">Cookies</h2>
            <p>This website does not use tracking cookies or any third-party analytics services.</p>
          </div>

          <div>
            <h2 className="font-bold text-[#1e3a5f] text-base mb-2">Contact</h2>
            <p>If you have any questions about this privacy policy, you can reach us at:</p>
            <div className="mt-2 space-y-1">
              <p><strong className="text-[#1e3a5f]">Email:</strong> trollingmotorguy@gmail.com</p>
              <p><strong className="text-[#1e3a5f]">Phone:</strong> (941) 518-9940</p>
              <p><strong className="text-[#1e3a5f]">Address:</strong> 5002 Lena Rd Unit 104, Bradenton, FL</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}