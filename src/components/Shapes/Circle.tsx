import type { CircleModel } from "../../types/shapemodels";
import type { ShapeComponentProps } from "../../types/shapecomponents";

export const Circle = ({
  shape,
  onMouseDown,
  onClick,
}: ShapeComponentProps) => {
  const circle = shape as CircleModel;
  return (
    <circle
      key={circle.id}
      cx={circle.x} // Center of circle
      cy={circle.y} // Center of circle
      r={circle.radius}
      fill="white"
      stroke="black"
      onMouseDown={onMouseDown}
      onClick={onClick}
    />
  );
};
