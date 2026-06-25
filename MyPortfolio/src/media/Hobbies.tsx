"use client";

import { IconType } from "react-icons";
import {
  FaGamepad,
  FaCrosshairs,
  FaGuitar,
  FaDumbbell,
  FaRunning,
} from "react-icons/fa";
import { GiMachineGun, GiDrum, GiTurtle } from "react-icons/gi";
import { SiRoblox } from "react-icons/si";

type Hobby = {
  label: string;
  icon: IconType;
};

const hobbies: Hobby[] = [
  { label: "Mobile Legends", icon: FaGamepad },
  { label: "Valorant", icon: FaCrosshairs },
  { label: "Roblox", icon: SiRoblox },
  { label: "Call of Duty", icon: GiMachineGun },
  { label: "Drums", icon: GiDrum },
  { label: "Guitar", icon: FaGuitar },
  { label: "GYM", icon: FaDumbbell },
  { label: "Running", icon: FaRunning },
  { label: "Taking care of my Turtle Pets", icon: GiTurtle },
];

export default function Hobbies() {
  return (
    <div className="min-h-full bg-bg text-text px-8 py-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-1">
          Outside the terminal
        </h2>
        <p className="text-sm text-textMuted mb-10">
          What I get up to when I&apos;m not writing code.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {hobbies.map((hobby) => {
            const Icon = hobby.icon;
            return (
              <div
                key={hobby.label}
                className="group flex flex-col items-center justify-center gap-3 rounded-md border border-border bg-panel px-4 py-6 text-center transition-colors hover:border-accent hover:bg-hover"
              >
                <Icon
                  size={32}
                  className="text-textMuted transition-colors group-hover:text-accent"
                />
                <span className="text-sm font-medium text-text">
                  {hobby.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
