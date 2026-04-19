export type ShapeModels = RectangleModel | CircleModel;
// | Ellipse
// | TextShape
// | Line;

// All geometric shapes defined by
// (x,y): top left corner of their bounding box
// width, height of the their bounding box
export interface BaseShapeModel {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface RectangleModel extends BaseShapeModel {
  type: "rectangle";
}

export interface CircleModel extends BaseShapeModel {
  type: "circle";
}
