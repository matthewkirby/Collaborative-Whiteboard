import type { CircleModel } from "../../types/shapemodels";
import type { ShapeComponentProps } from "../../types/shapecomponents";

export const Circle = ({
  shape,
  onMouseDown,
  onClick,
}: ShapeComponentProps) => {
  const circle = shape as CircleModel;

  const rx = circle.width / 2;
  const ry = circle.height / 2;
  const cx = circle.x + rx;
  const cy = circle.y + ry;

  return (
    <ellipse
      key={circle.id}
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      fill="white"
      stroke="black"
      onMouseDown={onMouseDown}
      onClick={onClick}
    />
  );
};
