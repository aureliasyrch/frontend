import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Video } from "lucide-react";
import DialPad from "@/components/dial-pad";

export default function DialPadPage() {
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

      {/* Dial Pad Section */}
      <section className="flex-1 flex items-center justify-center relative px-4 py-10 bg-[#0d1a59] text-white">
        <div className="bg-[#17285d] p-6 rounded-xl shadow-lg max-w-md w-full relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold">Dial Pad</h2>
          </div>

          <DialPad />

          <div className="flex justify-center space-x-4 mt-6">
            <Button className="bg-green-500 hover:bg-green-600 rounded-full h-14 w-14 flex items-center justify-center">
              <Phone className="h-6 w-6" />
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 rounded-full h-14 w-14 flex items-center justify-center">
              <Video className="h-6 w-6" />
            </Button>
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
