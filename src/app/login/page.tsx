import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#b2e0e5] text-[#0d1a59] font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-[#17285d] text-white">
        <h1 className="text-3xl font-bold">Ringi</h1>
        <ul className="flex space-x-8 text-sm font-medium">
          <li className="hover:text-cyan-300 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>

      {/* Login Section */}
      <section className="flex-1 flex items-center justify-center relative px-4 py-20 bg-[#0d1a59] text-white">
        <div className="bg-[#17285d] p-8 rounded-xl shadow-lg max-w-md w-full relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Login</h2>
            <p className="text-sm text-gray-300">
              Enter your registered phone number
            </p>
          </div>

          {/* Deskripsi Singkat */}
          <div className="text-center text-sm text-gray-300 mb-6">
            <p>
              Ringi is a VoIP platform powered by Kamailio, enabling seamless
              voice and video calls directly from your browser using UDP
              protocol. Log in with your phone number and enjoy HD quality
              communication, whether for voice calls, video calls, or
              conferencing.
            </p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-sm font-medium">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="pl-10 py-3 bg-[#0d1a59] border-[#2d4483] rounded-lg w-full"
                />
              </div>
            </div>

            <Button className="w-full bg-[#00aaff] hover:bg-cyan-600 text-white py-3 rounded-lg transition">
              Login
            </Button>

            <div className="text-center text-sm">
              <p>
                Don't have an account?{" "}
                <Link href="#" className="text-[#00aaff] hover:underline">
                  Contact Admin
                </Link>
              </p>
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
