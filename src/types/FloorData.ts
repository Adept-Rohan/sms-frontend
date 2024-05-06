export type FloorTypes = {
  id: number;
  floorName: string;
  createdOn: string;
};

export interface FloorTable extends FloorTypes {
  action?: string;
  original?: FloorTypes;
}
