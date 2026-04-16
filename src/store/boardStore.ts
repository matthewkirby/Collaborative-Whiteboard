import { create } from "zustand";
import type { Shape } from "../types/shapes";

interface Coords {
  x: number;
  y: number;
}

interface BoardState {
  shapes: Shape[];
  selectedId?: string;

  addShape: (shape: Shape) => void;
  updateShape: (id: string, updates: Partial<Shape>) => void;

  draggingId?: string;
  draggingOffset?: Coords;
  startDrag: (id: string, offset: Coords) => void;
  stopDrag: () => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  shapes: [],
  selectedId: undefined,

  // Add a shape to the boardstate
  addShape: (shape) =>
    set((state) => ({
      shapes: [...state.shapes, shape],
    })),

  // Update one or more properties of a given shape on the board
  updateShape: <T extends Shape["type"]>(
    id: string,
    updates: Partial<Extract<Shape, { type: T }>>,
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
// `Shape` is a union of types
// Extract allows you to select only union members that match
// Partial gives the specified type with every field set to optional
//
// `set()` can be given an object and it merges that object with the current state of the store
// - As usual, still need to spread nested objects
