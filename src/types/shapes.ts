export type Shape = Rectangle | Circle;
// | Ellipse
// | TextShape
// | Line;

export interface BaseShape {
  id: string;
  x: number;
  y: number;
}

export interface Rectangle extends BaseShape {
  type: "rectangle";
  width: number;
  height: number;
}

export interface Circle extends BaseShape {
  type: "circle";
  radius: number;
}
