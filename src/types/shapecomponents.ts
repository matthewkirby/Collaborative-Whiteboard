import type React from "react";
import type { ShapeModels } from "./shapemodels";

export interface ShapeComponentProps {
  shape: ShapeModels;
  styling: Record<string, string>;
  onMouseDown: (e: React.MouseEvent) => void;
  onClick: (e: React.MouseEvent) => void;
}

export type ShapeTypes = ShapeModels["type"];
