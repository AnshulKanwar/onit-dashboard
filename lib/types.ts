export enum Status {
  Assigned = "Assigned",
  Pending = "Pending",
  Completed = "Completed",
}

export type Service = {
  id: number;
  date: string;
  problem: string;
  status: Status;
  technician?: string;
  price: number;
  address: string;
  detail: string;
};
