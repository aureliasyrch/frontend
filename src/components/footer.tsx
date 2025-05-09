export default function Footer() {
  return (
    <footer className="bg-[#17285d] text-white px-10 py-6 text-center">
      <div className="flex justify-center space-x-6 mb-2 text-sm">
        <span className="cursor-pointer hover:text-cyan-300">About</span>
        <span className="cursor-pointer hover:text-cyan-300">Features</span>
        <span className="cursor-pointer hover:text-cyan-300">Help</span>
        <span className="cursor-pointer hover:text-cyan-300">Contact</span>
      </div>
      <p className="text-xs">© 2025 Ringi. All rights reserved</p>
    </footer>
  );
}
