import { useBoardStore } from "../../store/boardStore";
import type { ShapeModels } from "../../types/shapemodels";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

interface ShapeProps {
  shape: ShapeModels;
}

export const Shape = ({ shape }: ShapeProps) => {
  const startDrag = useBoardStore((s) => s.startDrag);

  const handleMouseDown = (e: React.MouseEvent) => {
    startDrag(shape.id, {
      x: e.nativeEvent.offsetX - shape.x,
      y: e.nativeEvent.offsetY - shape.y,
    });
  };

  switch (shape.type) {
    case "rectangle":
      return <Rectangle shape={shape} onMouseDown={handleMouseDown} />;
    case "circle":
      return <Circle shape={shape} onMouseDown={handleMouseDown} />;
    default:
      return null;
  }
};
