import type React from "react";
import type { CircleModel } from "../../types/shapemodels";

interface CircleProps {
  shape: CircleModel;
  onMouseDown: (e: React.MouseEvent) => void;
}

export const Circle = ({ shape, onMouseDown }: CircleProps) => {
  return (
    <circle
      key={shape.id}
      cx={shape.x}
      cy={shape.y}
      r={shape.radius}
      fill="white"
      stroke="black"
      onMouseDown={onMouseDown}
    />
  );
};
