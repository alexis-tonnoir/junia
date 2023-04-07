import { Status } from "src/statuses/status.entity";

export interface Annonce {
  id: string;
  title: string;
  price: number;
  status: Status;
}
