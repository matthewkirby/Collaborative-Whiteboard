import type { ShapeModels } from "../../types/shapemodels";

interface SelectionHandlesProps {
  shape: ShapeModels;
}

const HANDLE_SIZE = 8;

export const SelectionHandles = ({ shape }: SelectionHandlesProps) => {
  const { x, y, width, height } = shape;

  const handleCoords = [
    // Top Left
    { cx: x, cy: y, styles: "cursor-nwse-resize" },

    // Top Center
    { cx: x + width / 2, cy: y, styles: "cursor-ns-resize" },

    // Top Right
    { cx: x + width, cy: y, styles: "cursor-nesw-resize" },

    // Middle Left
    { cx: x, cy: y + height / 2, styles: "cursor-ew-resize" },

    // Middle Right
    { cx: x + width, cy: y + height / 2, styles: "cursor-ew-resize" },

    // Bottom Left
    { cx: x, cy: y + height, styles: "cursor-nesw-resize" },

    // Bottom Center
    { cx: x + width / 2, cy: y + height, styles: "cursor-ns-resize" },

    // Bottom Right
    { cx: x + width, cy: y + height, styles: "cursor-nwse-resize" },
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
          stroke="blue"
          strokeWidth={1}
          key={i}
          className={h.styles}
        />
      ))}
    </g>
  );
};
