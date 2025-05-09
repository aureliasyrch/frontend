import { Phone, Video, ArrowDownLeft, ArrowUpRight, X } from "lucide-react";

type CallLog = {
  id: number;
  phoneNumber: string;
  type: "voice" | "video";
  direction: "incoming" | "outgoing";
  status: "missed" | "completed";
  duration: string;
  timestamp: string;
};

type CallLogItemProps = {
  log: CallLog;
};

export function CallLogItem({ log }: CallLogItemProps) {
  const getStatusColor = () => {
    if (log.status === "missed") return "text-red-500";
    return "text-green-500";
  };

  const getDirectionIcon = () => {
    if (log.direction === "incoming") {
      return log.status === "missed" ? (
        <X className="h-4 w-4 text-red-500" />
      ) : (
        <ArrowDownLeft className="h-4 w-4 text-green-500" />
      );
    }
    return <ArrowUpRight className="h-4 w-4 text-blue-500" />;
  };

  const getTypeIcon = () => {
    if (log.type === "voice") {
      return <Phone className="h-5 w-5" />;
    }
    return <Video className="h-5 w-5" />;
  };

  return (
    <div className="flex items-center justify-between p-3 bg-[#1c2f6a] rounded-lg hover:bg-[#243677] transition-colors">
      <div className="flex items-center space-x-3">
        <div className="bg-[#2d4483] p-2 rounded-full">{getTypeIcon()}</div>
        <div>
          <p className="font-medium">{log.phoneNumber}</p>
          <div className="flex items-center space-x-1 text-xs text-gray-300">
            {getDirectionIcon()}
            <span>{log.timestamp}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <p className={`font-medium ${getStatusColor()}`}>
          {log.status === "missed" ? "Missed" : log.duration}
        </p>
        <p className="text-xs text-gray-300">
          {log.type === "voice" ? "Voice Call" : "Video Call"}
        </p>
      </div>
    </div>
  );
}
