"use client";

import Image from "next/image";

export function Loader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      <div className="relative w-36 h-36">
        {/* White Circle with Logo (smaller circle) */}
        <div className="absolute inset-4 flex items-center justify-center rounded-full bg-white z-10">
          <Image
            src="/flyva.png" // ✅ image in public/flyva.png
            alt="Flyva Logo"
            width={64}  // Increased logo size
            height={64}
            className="object-contain"
          />
        </div>

        {/* Rotating Blue Border (thicker & spaced) */}
        <div className="absolute inset-0 rounded-full border-[10px] border-blue-500 border-t-transparent animate-spin-slow z-0" />
      </div>
    </div>
  );
}


