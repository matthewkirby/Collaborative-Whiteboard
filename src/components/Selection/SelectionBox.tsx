import { handleNegativeSizes } from "../../utils/geometry";
import type { StyledSelectionProps } from "./Selection";

export const SelectionBox = ({ shape, styles }: StyledSelectionProps) => {
  const { x, y, w, h } = handleNegativeSizes(shape);

  return (
    <rect
      x={x}
      y={y}
      height={h}
      width={w}
      fill="none"
      stroke={styles.stroke}
      strokeWidth={1}
      strokeDasharray="5 3"
    />
  );
};
