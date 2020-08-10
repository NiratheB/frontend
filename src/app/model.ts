export interface Model {
  spheres: Shape[];
}

export interface Shape {
  type: number;
  color: string;
  attributes: any;
}
