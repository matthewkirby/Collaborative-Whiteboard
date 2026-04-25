import type React from "react";
import { useBoardStore } from "../../store/boardStore";
import type { ShapeModels } from "../../types/shapemodels";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import type {
  ShapeComponentProps,
  ShapeTypes,
} from "../../types/shapecomponents";

const shapeComponents: Record<ShapeTypes, React.FC<ShapeComponentProps>> = {
  rectangle: Rectangle,
  circle: Circle,
};

interface ShapeProps {
  shape: ShapeModels;
}

export const Shape = ({ shape }: ShapeProps) => {
  const pointerMode = useBoardStore((s) => s.pointerMode);
  const selectedId = useBoardStore((s) => s.selectedId);
  const updateSelection = useBoardStore((s) => s.updateSelection);
  const startDrag = useBoardStore((s) => s.startDrag);

  const styles = {
    fill: shape.fillColor,
    stroke: shape.strokeColor,
    strokeWidth: shape.strokeWidth,
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (
      pointerMode === "select" ||
      (pointerMode === "shape" && selectedId === shape.id)
    ) {
      e.stopPropagation();
      updateSelection(shape.id);

      startDrag(shape.id, {
        x: e.nativeEvent.offsetX - shape.x,
        y: e.nativeEvent.offsetY - shape.y,
      });
    }
  };

  const handleOnClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const ShapeComponent = shapeComponents[shape.type];

  return (
    <ShapeComponent
      shape={shape}
      styling={styles}
      onMouseDown={handleMouseDown}
      onClick={handleOnClick}
    />
  );
};
