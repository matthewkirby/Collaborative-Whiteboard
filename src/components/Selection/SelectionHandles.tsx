import type React from "react";
import { useBoardStore, type ResizeDirections } from "../../store/boardStore";
import type { StyledSelectionProps } from "./Selection";

// Handles defined by directions
//  nw --- n --- ne
//  |            |
//  w            e
//  |            |
//  sw --- s --- se

const HANDLE_SIZE = 8;

interface handleType {
  cx: number;
  cy: number;
  styles: string;
  dir: ResizeDirections;
}

export const SelectionHandles = ({ shape, styles }: StyledSelectionProps) => {
  const startResize = useBoardStore((s) => s.startResize);
  const { x, y, width, height } = shape;

  const handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // This triggers the beginning of a resize action
  // the changes occur in Canvas.tsx
  const handleMouseDown = (e: React.MouseEvent, dir: ResizeDirections) => {
    e.stopPropagation();
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    startResize({ x, y }, dir);
  };

  const handleCoords: handleType[] = [
    // Top Left
    { cx: x, cy: y, styles: "cursor-nwse-resize", dir: "nw" },

    // Top Center
    { cx: x + width / 2, cy: y, styles: "cursor-ns-resize", dir: "n" },

    // Top Right
    { cx: x + width, cy: y, styles: "cursor-nesw-resize", dir: "ne" },

    // Middle Left
    { cx: x, cy: y + height / 2, styles: "cursor-ew-resize", dir: "w" },

    // Middle Right
    { cx: x + width, cy: y + height / 2, styles: "cursor-ew-resize", dir: "e" },

    // Bottom Left
    { cx: x, cy: y + height, styles: "cursor-nesw-resize", dir: "sw" },

    // Bottom Center
    { cx: x + width / 2, cy: y + height, styles: "cursor-ns-resize", dir: "s" },

    // Bottom Right
    { cx: x + width, cy: y + height, styles: "cursor-nwse-resize", dir: "se" },
  ];

  return (
    <g>
      {handleCoords.map((h, i) => (
        <rect
          x={h.cx - HANDLE_SIZE / 2}
          y={h.cy - HANDLE_SIZE / 2}
          height={HANDLE_SIZE}
          width={HANDLE_SIZE}
          fill="white"
          stroke={styles.stroke}
          strokeWidth={1}
          key={i}
          className={h.styles}
          onClick={handleOnClick}
          onMouseDown={(e) => handleMouseDown(e, h.dir)}
        />
      ))}
    </g>
  );
};
