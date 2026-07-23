"use client";

import {
  VscSourceControl,
  VscError,
  VscWarning,
  VscBell,
} from "react-icons/vsc";

export default function StatusBar({ file }: { file: string }) {
  return (
    <div className="h-6 bg-statusbar text-white text-xs flex items-center px-3 gap-4">
      <span className="flex items-center gap-1">
        <VscSourceControl size={14} /> main
      </span>
      <span className="flex items-center gap-1">
        <VscError size={14} /> 0
      </span>
      <span className="flex items-center gap-1">
        <VscWarning size={14} /> 0
      </span>
      <span className="ml-auto flex items-center gap-4">
        <span>{file}</span>
        <span>UTF-8</span>
        <span>LF</span>
        <VscBell size={14} />
      </span>
    </div>
  );
}
