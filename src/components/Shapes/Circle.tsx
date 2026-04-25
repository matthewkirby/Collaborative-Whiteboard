import type { CircleModel } from "../../types/shapemodels";
import type { ShapeComponentProps } from "../../types/shapecomponents";
import { handleNegativeSizes } from "../../utils/geometry";

export const Circle = ({
  shape,
  styling,
  onMouseDown,
  onClick,
}: ShapeComponentProps) => {
  const circle = shape as CircleModel;
  const { x, y, w, h } = handleNegativeSizes(circle);

  const rx = w / 2;
  const ry = h / 2;
  const cx = x + rx;
  const cy = y + ry;

  return (
    <ellipse
      key={circle.id}
      cx={cx}
      cy={cy}
      rx={rx}
      ry={ry}
      {...styling}
      onMouseDown={onMouseDown}
      onClick={onClick}
    />
  );
};
