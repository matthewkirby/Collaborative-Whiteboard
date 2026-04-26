import type React from "react";
import { useEffect, useRef, useState } from "react";

interface PopupButtonProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title?: string;
}

export const PopupButton = ({ trigger, children, title }: PopupButtonProps) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return (
    <div ref={wrapperRef} className="relative flex items-center">
      <button title={title} onClick={() => setOpen((o) => !o)}>
        {trigger}
      </button>
      {open && (
        <div className="absolute top-[calc(100%+6px)] left-0 z-50">
          {children}
        </div>
      )}
    </div>
  );
};
