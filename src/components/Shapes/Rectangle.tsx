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
      x={rectangle.x} // Top left corner of rect
      y={rectangle.y} // Top left corner of rect
      width={rectangle.width}
      height={rectangle.height}
      fill="white"
      stroke="black"
      onMouseDown={onMouseDown}
      onClick={onClick}
    />
  );
};
