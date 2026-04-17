export type ShapeModels = RectangleModel | CircleModel;
// | Ellipse
// | TextShape
// | Line;

export interface BaseShapeModel {
  id: string;
  x: number;
  y: number;
}

export interface RectangleModel extends BaseShapeModel {
  type: "rectangle";
  width: number;
  height: number;
}

export interface CircleModel extends BaseShapeModel {
  type: "circle";
  radius: number;
}
