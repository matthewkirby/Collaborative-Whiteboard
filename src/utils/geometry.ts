import type { ShapeModels } from "../types/shapemodels";

export const handleNegativeSizes = (shape: ShapeModels) => {
  return {
    x: shape.width > 0 ? shape.x : shape.x + shape.width,
    w: shape.width > 0 ? shape.width : -1 * shape.width,
    y: shape.height > 0 ? shape.y : shape.y + shape.height,
    h: shape.height > 0 ? shape.height : -1 * shape.height,
  };
};
