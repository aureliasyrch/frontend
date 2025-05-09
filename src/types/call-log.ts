// src/types/call-log.ts
export type CallLog = {
  id: number;
  phoneNumber: string;
  type: "video" | "voice"; // Hanya menerima 'video' atau 'voice'
  direction: "incoming" | "outgoing"; // Hanya menerima 'incoming' atau 'outgoing'
  status: "missed" | "completed"; // Hanya menerima 'missed' atau 'completed'
  duration: string;
  timestamp: string;
};
