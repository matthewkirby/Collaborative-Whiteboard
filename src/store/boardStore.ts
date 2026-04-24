import { create } from "zustand";
import type { ShapeModels } from "../types/shapemodels";

export interface Coords {
  x: number;
  y: number;
}

export type PointerModes = "pen" | "select" | "shape" | "none";
export type ShapeToolTypes = "rectangle" | "circle";
export type ResizeDirections =
  | "nw"
  | "n"
  | "ne"
  | "w"
  | "e"
  | "sw"
  | "s"
  | "se";

interface BoardState {
  selectedId?: string;
  updateSelection: (id: string) => void;
  resetSelection: () => void;

  pointerMode: PointerModes;
  setPointerMode: (p: PointerModes) => void;

  shapes: ShapeModels[];
  addShape: (shape: ShapeModels) => void;
  updateShape: (id: string, updates: Partial<ShapeModels>) => void;

  draggingId?: string;
  draggingOffset?: Coords;
  startDrag: (id: string, offset: Coords) => void;
  stopDrag: () => void;

  resizeDirection?: ResizeDirections;
  resizeMouseDownLoc?: Coords;
  resizeOriginalShape?: ShapeModels;
  startResize: (loc: Coords, dir: ResizeDirections) => void;
  stopResize: () => void;

  shapeToolMode?: ShapeToolTypes;
  setShapeToolMode: (stm: ShapeToolTypes) => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  selectedId: undefined,
  updateSelection: (id) => {
    set({ selectedId: id });
  },
  resetSelection: () => {
    set({ selectedId: undefined });
  },

  pointerMode: "select",
  setPointerMode: (p) => {
    set({ pointerMode: p, selectedId: undefined });
  },

  shapes: [],
  addShape: (shape) =>
    set((state) => ({
      shapes: [...state.shapes, shape],
    })),
  updateShape: <T extends ShapeModels["type"]>(
    id: string,
    updates: Partial<Extract<ShapeModels, { type: T }>>,
  ) =>
    set((state) => ({
      shapes: state.shapes.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    })),

  draggingId: undefined,
  draggingOffset: undefined,
  startDrag: (id, offset) => {
    set({
      draggingId: id,
      draggingOffset: offset,
    });
  },
  stopDrag: () => {
    set({
      draggingId: undefined,
      draggingOffset: undefined,
    });
  },

  resizeDirection: undefined,
  resizeMouseDownLoc: undefined,
  resizeOriginalShape: undefined,
  startResize: (loc, dir) => {
    const shape = get().shapes.find((s) => s.id === get().selectedId);
    if (shape === undefined) return;
    set({
      resizeDirection: dir,
      resizeMouseDownLoc: loc,
      resizeOriginalShape: { ...shape },
    });
  },
  stopResize: () => {
    set({
      resizeDirection: undefined,
      resizeMouseDownLoc: undefined,
      resizeOriginalShape: undefined,
    });
  },

  shapeToolMode: undefined,
  setShapeToolMode: (stm) => {
    set({ shapeToolMode: stm });
  },
}));
// For future me, regarding the typing in updateShape
// `Shapes` is a union of types
// Extract allows you to select only union members that match
// Partial gives the specified type with every field set to optional
//
// `set()` can be given an object and it merges that object with the current state of the store
// - As usual, still need to spread nested objects
