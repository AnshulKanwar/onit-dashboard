export enum Status {
  Assigned = "Assigned",
  Pending = "Pending",
}

export type Service = {
  id: number;
  problem: string;
  status: Status;
};
