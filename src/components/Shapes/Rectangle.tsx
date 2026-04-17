import type React from "react";
import type { RectangleModel } from "../../types/shapemodels";

interface RectangleProps {
  shape: RectangleModel;
  onMouseDown: (e: React.MouseEvent) => void;
}

export const Rectangle = ({ shape, onMouseDown }: RectangleProps) => {
  return (
    <rect
      key={shape.id}
      x={shape.x}
      y={shape.y}
      width={shape.width}
      height={shape.height}
      fill="white"
      stroke="black"
      onMouseDown={onMouseDown}
    />
  );
};
