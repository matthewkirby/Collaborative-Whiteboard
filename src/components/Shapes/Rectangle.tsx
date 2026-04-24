import type { RectangleModel } from "../../types/shapemodels";
import type { ShapeComponentProps } from "../../types/shapecomponents";
import { handleNegativeSizes } from "../../utils/geometry";

export const Rectangle = ({
  shape,
  onMouseDown,
  onClick,
}: ShapeComponentProps) => {
  const rectangle = shape as RectangleModel;
  const { x, y, w, h } = handleNegativeSizes(rectangle);

  return (
    <rect
      key={rectangle.id}
      x={x}
      y={y}
      width={w}
      height={h}
      fill="white"
      stroke="black"
      onMouseDown={onMouseDown}
      onClick={onClick}
    />
  );
};
