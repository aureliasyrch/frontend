import Link from "next/link";

export default function Navbar() {
  return (
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
  );
}
