import Link from "next/link";
import { User, Phone, Clock, Info } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#b2e0e5] text-[#0d1a59] font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-[#17285d] text-white">
        <h1 className="text-3xl font-bold">Ringi</h1>
        <ul className="flex space-x-8 text-sm font-medium">
          <li className="hover:text-cyan-300 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-cyan-300 cursor-pointer">
            <Link href="/dial-pad">Dial Pad</Link>
          </li>
          <li className="hover:text-cyan-300 cursor-pointer">
            <Link href="/call-logs">Call Logs</Link>
          </li>
        </ul>
      </nav>

      {/* About Section */}
      <section className="flex-1 flex items-center justify-center relative px-4 py-10 bg-[#0d1a59] text-white">
        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <h2 className="text-3xl font-bold mb-8 text-center">About Ringi</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#17285d] p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <User className="h-6 w-6 mr-2 text-[#00aaff]" />
                <h3 className="text-xl font-bold">User Information</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-300">Phone Number</p>
                  <p className="font-medium">+62 812-3456-7890</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Username</p>
                  <p className="font-medium">user123</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Registration Date</p>
                  <p className="font-medium">January 15, 2025</p>
                </div>
              </div>
            </div>

            <div className="bg-[#17285d] p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Info className="h-6 w-6 mr-2 text-[#00aaff]" />
                <h3 className="text-xl font-bold">About the Platform</h3>
              </div>
              <div className="space-y-4">
                <p>
                  Ringi is a VoIP platform powered by Kamailio that enables
                  real-time voice and video communication directly from your
                  browser.
                </p>
                <p>
                  Our platform uses UDP protocol for efficient and reliable
                  communication, ensuring high-quality calls with minimal
                  latency.
                </p>
                <p>Version: 1.0.0</p>
              </div>
            </div>

            <div className="bg-[#17285d] p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 mr-2 text-[#00aaff]" />
                <h3 className="text-xl font-bold">Call Features</h3>
              </div>
              <ul className="space-y-2 list-disc list-inside">
                <li>Voice calls with HD audio quality</li>
                <li>Video calls with adjustable quality</li>
                <li>Call recording (with permission)</li>
                <li>Screen sharing capabilities</li>
                <li>Conference calling up to 10 participants</li>
              </ul>
            </div>

            <div className="bg-[#17285d] p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 mr-2 text-[#00aaff]" />
                <h3 className="text-xl font-bold">Call Statistics</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-300">Total Calls Made</p>
                  <p className="font-medium">42</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Total Call Duration</p>
                  <p className="font-medium">5 hours 23 minutes</p>
                </div>
                <div>
                  <p className="text-sm text-gray-300">Average Call Duration</p>
                  <p className="font-medium">7 minutes 42 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#17285d] text-white px-10 py-6 text-center">
        <div className="flex justify-center space-x-6 mb-2 text-sm">
          <span className="cursor-pointer hover:text-cyan-300">About</span>
          <span className="cursor-pointer hover:text-cyan-300">Features</span>
          <span className="cursor-pointer hover:text-cyan-300">Help</span>
          <span className="cursor-pointer hover:text-cyan-300">Contact</span>
        </div>
        <p className="text-xs">© 2025 Ringi. All rights reserved</p>
      </footer>
    </main>
  );
}
