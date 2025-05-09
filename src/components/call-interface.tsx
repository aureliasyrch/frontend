"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Video, Mic, MicOff, PhoneOff, Camera, CameraOff } from "lucide-react";
import Link from "next/link";

type CallStatus = "calling" | "ringing" | "in-call" | "ended";

export default function CallInterface() {
  const [callStatus, setCallStatus] = useState<CallStatus>("calling");
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [callType, setCallType] = useState<"voice" | "video">("voice");

  // Simulate call progress
  useEffect(() => {
    const timer = setTimeout(() => {
      if (callStatus === "calling") {
        setCallStatus("ringing");
      } else if (callStatus === "ringing") {
        setCallStatus("in-call");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [callStatus]);

  // Call timer
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (callStatus === "in-call") {
      interval = setInterval(() => {
        setDuration((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [callStatus]);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  const handleEndCall = () => {
    setCallStatus("ended");
  };

  const getStatusText = () => {
    switch (callStatus) {
      case "calling":
        return "Calling...";
      case "ringing":
        return "Ringing...";
      case "in-call":
        return formatDuration(duration);
      case "ended":
        return "Call Ended";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen bg-[#0d1a59] p-6">
      {/* Call Header */}
      <div className="w-full flex justify-between items-center">
        <Link href="/dial-pad">
          <Button variant="ghost" className="text-white hover:bg-[#17285d]">
            Back
          </Button>
        </Link>
        <div className="text-center">
          <h2 className="text-xl font-bold">
            {callType === "voice" ? "Voice Call" : "Video Call"}
          </h2>
        </div>
        <div className="w-16"></div> {/* Spacer for alignment */}
      </div>

      {/* Call Content */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-md">
        {callType === "video" && isVideoEnabled ? (
          <div className="bg-[#17285d] rounded-xl w-full aspect-video mb-8 flex items-center justify-center">
            <p className="text-gray-400">Video Preview</p>
          </div>
        ) : (
          <div className="bg-[#17285d] rounded-full w-32 h-32 flex items-center justify-center mb-8">
            <span className="text-4xl">👤</span>
          </div>
        )}

        <h3 className="text-2xl font-bold mb-2">+62 812-3456-7890</h3>
        <p
          className={`text-lg ${
            callStatus === "ended" ? "text-red-500" : "text-gray-300"
          }`}
        >
          {getStatusText()}
        </p>
      </div>

      {/* Call Controls */}
      <div
        className={`w-full max-w-md ${
          callStatus === "ended" ? "hidden" : "block"
        }`}
      >
        <div className="grid grid-cols-3 gap-4">
          <Button
            onClick={() => setIsMuted(!isMuted)}
            className="bg-[#2d4483] hover:bg-[#3d5493] rounded-full h-16 w-16 flex items-center justify-center mx-auto"
          >
            {isMuted ? (
              <MicOff className="h-6 w-6" />
            ) : (
              <Mic className="h-6 w-6" />
            )}
          </Button>

          <Button
            onClick={handleEndCall}
            className="bg-red-600 hover:bg-red-700 rounded-full h-16 w-16 flex items-center justify-center mx-auto"
          >
            <PhoneOff className="h-6 w-6" />
          </Button>

          {callType === "video" && (
            <Button
              onClick={() => setIsVideoEnabled(!isVideoEnabled)}
              className="bg-[#2d4483] hover:bg-[#3d5493] rounded-full h-16 w-16 flex items-center justify-center mx-auto"
            >
              {isVideoEnabled ? (
                <Camera className="h-6 w-6" />
              ) : (
                <CameraOff className="h-6 w-6" />
              )}
            </Button>
          )}

          {callType === "voice" && (
            <Button
              onClick={() => setCallType("video")}
              className="bg-[#2d4483] hover:bg-[#3d5493] rounded-full h-16 w-16 flex items-center justify-center mx-auto"
            >
              <Video className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>

      {/* Call Ended Actions */}
      {callStatus === "ended" && (
        <div className="w-full max-w-md">
          <div className="flex justify-center space-x-4">
            <Link href="/dial-pad">
              <Button className="bg-[#00aaff] hover:bg-cyan-600">
                Dial Pad
              </Button>
            </Link>
            <Link href="/call-logs">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-[#17285d]"
              >
                Call Logs
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
