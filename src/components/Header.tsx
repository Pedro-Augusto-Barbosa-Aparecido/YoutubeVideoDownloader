"use client";

import { Minus, X } from "lucide-react";
import { ArrowsIn, ArrowsOut } from "@phosphor-icons/react";
import { appWindow } from "@tauri-apps/api/window";

import { Logo } from "./assets/Logo";
import { useState } from "react";

export function Header() {
  const [isMaximized, setIsMaximized] = useState(false);

  return (
    <header
      data-tauri-drag-region
      className="flex h-[44px] w-screen items-center justify-between bg-red-800 transition-colors duration-700"
    >
      <div className="flex items-center gap-3 pl-4">
        <Logo />
        <span className="font-semibold lg:text-xs">YoutubeVideoDownloader</span>
      </div>
      <div className="flex">
        <button
          onClick={() => {
            appWindow.minimize();
          }}
          className="group flex h-[44px] w-14 items-center justify-center hover:bg-red-900/40"
        >
          <Minus className="h-4 w-4 group-hover:h-5 group-hover:w-5" />
        </button>
        <button
          onClick={async () => {
            const isMaximized = await appWindow.isMaximized();

            if (isMaximized) {
              setIsMaximized(false);
              return await appWindow.unmaximize();
            }

            setIsMaximized(true);
            return await appWindow.maximize();
          }}
          className="group flex h-[44px] w-14 items-center justify-center hover:bg-red-900/40"
        >
          {isMaximized ? (
            <ArrowsIn className="h-4 w-4 group-hover:h-5 group-hover:w-5" />
          ) : (
            <ArrowsOut className="h-4 w-4 group-hover:h-5 group-hover:w-5" />
          )}
        </button>
        <button
          onClick={() => {
            appWindow.close();
          }}
          className="group flex h-[44px] w-16 items-center justify-center hover:bg-red-900/80"
        >
          <X className="h-4 w-4 group-hover:h-5 group-hover:w-5" />
        </button>
      </div>
    </header>
  );
}
