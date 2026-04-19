import type { RectangleModel } from "../../types/shapemodels";
import type { ShapeComponentProps } from "../../types/shapecomponents";

export const Rectangle = ({
  shape,
  onMouseDown,
  onClick,
}: ShapeComponentProps) => {
  const rectangle = shape as RectangleModel;
  return (
    <rect
      key={rectangle.id}
      x={rectangle.x}
      y={rectangle.y}
      width={rectangle.width}
      height={rectangle.height}
      fill="white"
      stroke="black"
      onMouseDown={onMouseDown}
      onClick={onClick}
    />
  );
};
