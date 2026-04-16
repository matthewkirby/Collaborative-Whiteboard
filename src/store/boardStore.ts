import { create } from "zustand";
import type { Shape } from "../types/shapes";

interface BoardState {
  shapes: Shape[];
  selectedId?: string;

  addShape: (shape: Shape) => void;
  updateShape: (id: string, updates: Partial<Shape>) => void;
}

export const useBoardStore = create<BoardState>((set) => ({
  shapes: [],
  selectedId: undefined,

  // Add a shape to the boardstate
  addShape: (shape: Shape) =>
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
}));
// For future me, regarding the typing in updateShape
// `Shape` is a union of types
// Extract allows you to select only union members that match
// Partial gives the specified type with every field set to optional
