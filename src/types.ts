export interface IPoints {
  address: string;
  budgets: string[];
  latitude: number;
  longitude: number;
}
export type Coordinates =
  | [IPoints['latitude'], IPoints['longitude']]
  | undefined;

export type SidebarProps = {
  places: IPoints[];
  setCoordinate: React.Dispatch<React.SetStateAction<Coordinates>>;
  setZoom: React.Dispatch<React.SetStateAction<number>>;
};

export type MapProps = {
  coordinate?: [IPoints['latitude'], IPoints['longitude']];
  zoom: number;
};
