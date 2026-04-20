import type React from "react";
import { useBoardStore } from "../../store/boardStore";
import { Shape } from "../Shapes/Shape";
import { resizeShape } from "../../utils/resizeShape";

export const Canvas = () => {
  const shapes = useBoardStore((s) => s.shapes);
  const updateShape = useBoardStore((s) => s.updateShape);
  const stopDrag = useBoardStore((s) => s.stopDrag);

  const draggingId = useBoardStore((s) => s.draggingId);
  const draggingOffset = useBoardStore((s) => s.draggingOffset);

  const resizeMouseDownLoc = useBoardStore((s) => s.resizeMouseDownLoc);
  const resizeDirection = useBoardStore((s) => s.resizeDirection);
  const resizeOriginalShape = useBoardStore((s) => s.resizeOriginalShape);
  const stopResize = useBoardStore((s) => s.stopResize);

  const pointerMode = useBoardStore((s) => s.pointerMode);
  const selectedId = useBoardStore((s) => s.selectedId);
  const resetSelection = useBoardStore((s) => s.resetSelection);

  const handleMouseUp = () => {
    stopDrag();
    stopResize();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggingId !== undefined && draggingOffset !== undefined) {
      const x = e.nativeEvent.offsetX - draggingOffset.x;
      const y = e.nativeEvent.offsetY - draggingOffset.y;
      updateShape(draggingId, { x, y });
    } else if (
      selectedId !== undefined &&
      resizeMouseDownLoc !== undefined &&
      resizeDirection !== undefined &&
      resizeOriginalShape !== undefined
    ) {
      const dx = e.nativeEvent.offsetX - resizeMouseDownLoc.x;
      const dy = e.nativeEvent.offsetY - resizeMouseDownLoc.y;
      const updates = resizeShape(resizeOriginalShape, resizeDirection, dx, dy);
      updateShape(selectedId, updates);
    } else {
      return;
    }
  };

  const handleOnMouseDown = () => {
    if (pointerMode === "select") {
      if (selectedId) {
        resetSelection();
      }
    }
  };

  return (
    <div className="min-h-0 overflow-auto">
      <svg
        className="bg-slate-800 w-full h-full"
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseDown={handleOnMouseDown}
      >
        {shapes.map((shape, i) => {
          return <Shape key={i} shape={shape} />;
        })}
      </svg>
    </div>
  );
};
