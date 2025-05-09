"use client";

import { SetStateAction, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SkipBackIcon as Backspace } from "lucide-react";

export default function DialPad() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNumberClick = (num: string) => {
    setPhoneNumber((prev) => prev + num);
  };

  const handleBackspace = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setPhoneNumber("");
  };

  return (
    <div className="space-y-4">
      <Input
        value={phoneNumber}
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setPhoneNumber(e.target.value)
        }
        className="text-center text-xl py-4 bg-[#0d1a59] border-[#2d4483]"
        placeholder="Enter phone number"
      />

      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, "*", 0, "#"].map((num) => (
          <Button
            key={num}
            onClick={() => handleNumberClick(num.toString())}
            className="bg-[#2d4483] hover:bg-[#3d5493] h-14 text-xl font-medium"
          >
            {num}
          </Button>
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleBackspace}
          variant="ghost"
          className="text-gray-300 hover:text-white hover:bg-transparent"
        >
          <Backspace className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
