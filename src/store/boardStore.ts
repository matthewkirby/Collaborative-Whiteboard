import { create } from "zustand";
import type { ShapeModels } from "../types/shapemodels";

interface Coords {
  x: number;
  y: number;
}

export type PointerModes = "pen" | "select" | "none";

interface BoardState {
  pointerMode: PointerModes;
  setPointerMode: (p: PointerModes) => void;

  selectedId?: string;

  shapes: ShapeModels[];
  addShape: (shape: ShapeModels) => void;
  updateShape: (id: string, updates: Partial<ShapeModels>) => void;

  draggingId?: string;
  draggingOffset?: Coords;
  startDrag: (id: string, offset: Coords) => void;
  stopDrag: () => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  pointerMode: "select",
  setPointerMode: (p) => {
    set({ pointerMode: p });
  },

  selectedId: undefined,

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
}));
// For future me, regarding the typing in updateShape
// `Shapes` is a union of types
// Extract allows you to select only union members that match
// Partial gives the specified type with every field set to optional
//
// `set()` can be given an object and it merges that object with the current state of the store
// - As usual, still need to spread nested objects
