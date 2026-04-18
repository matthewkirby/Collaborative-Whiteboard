import type { ShapeModels } from "../../types/shapemodels";

interface SelectionHandlesProps {
  shape: ShapeModels;
}

const HANDLE_SIZE = 8;

const getDimensions = (
  shape: ShapeModels,
): { x: number; y: number; width: number; height: number } | null => {
  switch (shape.type) {
    case "rectangle":
      return {
        x: shape.x,
        y: shape.y,
        width: shape.width,
        height: shape.height,
      };
    case "circle":
      return {
        x: shape.x - shape.radius,
        y: shape.y - shape.radius,
        width: 2 * shape.radius,
        height: 2 * shape.radius,
      };
    default:
      return null;
  }
};

export const SelectionHandles = ({ shape }: SelectionHandlesProps) => {
  const dims = getDimensions(shape);
  if (dims === null) {
    return null;
  }

  const { x, y, width, height } = dims;

  const handleCoords = [
    { cx: x, cy: y }, // Top Left
    { cx: x + width / 2, cy: y }, // Top Center
    { cx: x + width, cy: y }, // Top Right
    { cx: x, cy: y + height / 2 }, // Middle Left
    { cx: x + width, cy: y + height / 2 }, // Middle Right
    { cx: x, cy: y + height }, // Bottom Left
    { cx: x + width / 2, cy: y + height }, // Bottom Center
    { cx: x + width, cy: y + height }, // Bottom Right
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
        />
      ))}
    </g>
  );
};
