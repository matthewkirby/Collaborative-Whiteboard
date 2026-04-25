import type { ShapeModels } from "../../types/shapemodels";
import { SelectionBox } from "./SelectionBox";
import { SelectionHandles } from "./SelectionHandles";

const SELECTIONCOLOR = "blue";

interface SelectionProps {
  shape: ShapeModels;
}

export interface StyledSelectionProps extends SelectionProps {
  styles: Record<string, string>;
}

export const Selection = (props: SelectionProps) => {
  const styles = {
    stroke: SELECTIONCOLOR,
  };

  return (
    <>
      <SelectionBox {...props} styles={styles} />
      <SelectionHandles {...props} styles={styles} />
    </>
  );
};
