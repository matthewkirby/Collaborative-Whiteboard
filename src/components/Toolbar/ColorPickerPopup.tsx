import { useEffect, useRef } from "react";
import { ColorSwatch } from "../ui/ColorSwatch";

// prettier-ignore
const COLORS = [
  "#000000", "#ffffff", "#9e9e9e", "#616161", "#212121", "#f44336",
  "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4",
  "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800",
  "#ff5722", "#795548", "#607d8b", "#ef9a9a", "#f48fb1", "#ce93d8", "#9fa8da",
  "#90caf9", "#80cbc4", "#a5d6a7", "#fff59d", "#ffcc80", "#ffab91", "#bcaaa4",
];

const swatchBasestyle =
  "w-5 h-5 rounded cursor-pointer transition-transform hover:scale-110";
const swatchActiveStyle = "ring-2 ring-gray-800 ring-offset-1";
const swatchInactiveStyle = "ring-1 ring-gray-200";

interface ColorPickerContentsProps {
  value: string;
  onChange: (color: string) => void;
}

export const ColorPickerContents = ({
  value,
  onChange,
}: ColorPickerContentsProps) => {
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const commitDebounced = (color: string) => {
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => onChange(color), 150);
  };

  const commitInsta = (color: string) => {
    clearTimeout(debounceRef.current);
    onChange(color);
  };

  useEffect(() => () => clearTimeout(debounceRef.current), []);

  return (
    <div className="bg-white border-gray-200 rounded-xl p-2.5 w-44 shadow-md">
      <div className="grid grid-cols-7 gap-1 mb-2">
        {/* This first button represent transparent */}
        <button
          onClick={() => commitInsta("transparent")}
          className={`${swatchBasestyle}
            ${value === "transparent" ? swatchActiveStyle : swatchInactiveStyle}`}
        >
          <ColorSwatch color="transparent" className="w-full h-full rounded" />
        </button>
        {COLORS.map((color) => (
          <button
            key={color}
            onClick={() => commitInsta(color)}
            style={{ background: color }}
            className={`${swatchBasestyle} ${color === value ? swatchActiveStyle : swatchInactiveStyle}`}
          />
        ))}
      </div>
      <div className="border-t border-gray-100 pt-2 flex items-center gap-1.5">
        <span className="text-xs text-gray-400 flex-1">Custom</span>
        <input
          type="color"
          defaultValue={value === "transparent" ? "#ffffff" : value}
          onChange={(e) => commitDebounced(e.target.value)}
          onMouseUp={(e) => commitInsta(e.currentTarget.value)}
          onBlur={(e) => commitInsta(e.currentTarget.value)}
        />
      </div>
    </div>
  );
};
