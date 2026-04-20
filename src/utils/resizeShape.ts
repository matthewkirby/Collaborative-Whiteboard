import type { ResizeDirections } from "../store/boardStore";
import type { ShapeModels } from "../types/shapemodels";

// TODO handle flipping the shape when dragged past a static axis
//    - this should be done in the shape component
//    - If width/height is negative, the shape is just flipped
export const resizeShape = (
  original: ShapeModels,
  resizeDirection: ResizeDirections,
  dx: number,
  dy: number,
) => {
  switch (resizeDirection) {
    case "nw":
      return {
        x: original.x + dx,
        y: original.y + dy,
        width: original.width - dx,
        height: original.height - dy,
      };
    case "n":
      return {
        y: original.y + dy,
        height: original.height - dy,
      };
    case "ne":
      return {
        y: original.y + dy,
        width: original.width + dx,
        height: original.height - dy,
      };
    case "w":
      return {
        x: original.x + dx,
        width: original.width - dx,
      };
    case "e":
      return {
        width: original.width + dx,
      };
    case "sw":
      return {
        x: original.x + dx,
        width: original.width - dx,
        height: original.height + dy,
      };
    case "s":
      return {
        height: original.height + dy,
      };
    case "se":
      return {
        width: original.width + dx,
        height: original.height + dy,
      };
  }
};
