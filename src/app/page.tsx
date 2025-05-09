"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Lock, Server } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [ipServer, setIpServer] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone, password, ipServer }),
      });

      if (res.ok) {
        router.push("/dashboard");
      } else {
        const data = await res.json();
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Network error");
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#b2e0e5] text-[#0d1a59] font-sans">
      <nav className="flex justify-between items-center px-10 py-4 bg-[#17285d] text-white">
        <h1 className="text-3xl font-bold">Ringi</h1>
        <ul className="flex space-x-8 text-sm font-medium">
          <li className="hover:text-cyan-300 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
        </ul>
      </nav>

      <section className="flex-1 flex items-center justify-center relative px-4 py-20 bg-[#0d1a59] text-white">
        <form
          onSubmit={handleLogin}
          className="bg-[#17285d] p-8 rounded-xl shadow-lg max-w-md w-full relative z-10 space-y-6"
        >
          <div className="text-center mb-4">
            <h2 className="text-3xl font-bold mb-1">Login</h2>
            <p className="text-sm text-gray-300">
              Enter your credentials to continue
            </p>
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium">
              Phone Number
            </label>
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <Input
                id="phone"
                type="tel"
                placeholder="Enter phone number"
                className="pl-10 py-3 bg-[#0d1a59] border-[#2d4483] w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                className="pl-10 py-3 bg-[#0d1a59] border-[#2d4483] w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="ipServer" className="block text-sm font-medium">
              IP Server
            </label>
            <div className="relative">
              <Server className="absolute left-3 top-3 text-gray-400 h-5 w-5" />
              <Input
                id="ipServer"
                type="text"
                placeholder="e.g. 192.168.1.1"
                className="pl-10 py-3 bg-[#0d1a59] border-[#2d4483] w-full"
                value={ipServer}
                onChange={(e) => setIpServer(e.target.value)}
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-[#00aaff] hover:bg-cyan-600 text-white py-3 rounded-lg"
          >
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
        </form>
      </section>

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
