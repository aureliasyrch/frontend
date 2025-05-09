import Link from "next/link";
import { CallLogItem } from "@/components/call-log-item";
import { CallLog } from "@/types/call-log"; // Import tipe CallLog

export default function CallLogsPage() {
  // Sample call log data dengan memastikan 'status' hanya 'missed' atau 'completed'
  const callLogs: CallLog[] = [
    {
      id: 1,
      phoneNumber: "+62 812-3456-7890",
      type: "voice",
      direction: "incoming", // Hanya 'incoming' atau 'outgoing'
      status: "missed", // Hanya 'missed' atau 'completed'
      duration: "0:00",
      timestamp: "2025-05-09 10:30 AM",
    },
    {
      id: 2,
      phoneNumber: "+62 812-3456-7891",
      type: "video",
      direction: "outgoing", // Hanya 'incoming' atau 'outgoing'
      status: "completed", // Hanya 'missed' atau 'completed'
      duration: "5:23",
      timestamp: "2025-05-09 09:15 AM",
    },
    {
      id: 3,
      phoneNumber: "+62 812-3456-7892",
      type: "voice",
      direction: "incoming", // Hanya 'incoming' atau 'outgoing'
      status: "completed", // Hanya 'missed' atau 'completed'
      duration: "2:45",
      timestamp: "2025-05-08 03:45 PM",
    },
    {
      id: 4,
      phoneNumber: "+62 812-3456-7893",
      type: "voice",
      direction: "outgoing", // Hanya 'incoming' atau 'outgoing'
      status: "missed", // Hanya 'missed' atau 'completed'
      duration: "0:00",
      timestamp: "2025-05-08 01:20 PM",
    },
    {
      id: 5,
      phoneNumber: "+62 812-3456-7894",
      type: "video",
      direction: "incoming", // Hanya 'incoming' atau 'outgoing'
      status: "completed", // Hanya 'missed' atau 'completed'
      duration: "10:12",
      timestamp: "2025-05-07 11:30 AM",
    },
  ];

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

      {/* Call Logs Section */}
      <section className="flex-1 flex flex-col relative px-4 py-10 bg-[#0d1a59] text-white">
        {/* Decorative Circle */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#2d00b3] rounded-full -translate-y-1/2 translate-x-1/4 z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Call History</h2>

          <div className="bg-[#17285d] rounded-xl shadow-lg overflow-hidden">
            <div className="p-4 space-y-2">
              {callLogs.map((log) => (
                <CallLogItem key={log.id} log={log} />
              ))}
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
