import type React from "react";
import { useBoardStore } from "../../store/boardStore";
import type { ShapeModels } from "../../types/shapemodels";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import type {
  ShapeComponentProps,
  ShapeTypes,
} from "../../types/shapecomponents";
import { SelectionHandles } from "./SelectionHandles";

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

  const handleMouseDown = (e: React.MouseEvent) => {
    if (pointerMode === "select") {
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
  const isSelected =
    shape.id === selectedId &&
    (pointerMode === "select" || pointerMode === "shape");

  return (
    <g>
      <ShapeComponent
        shape={shape}
        onMouseDown={handleMouseDown}
        onClick={handleOnClick}
      />
      {isSelected && <SelectionHandles shape={shape} />}
    </g>
  );
};
