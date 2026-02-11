export interface Car {
  id: number;
  brand: string;
  model: string;
  engine: string;
  year: number;
}

export interface ServiceLog {
  id: string;
  partName: string;
  mileage: number;
  date: string;
  status: "Done" | "Planned";
}
