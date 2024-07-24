import { Document, Model } from "mongoose";

export interface IEvent extends Document {
  title: String;
  start: Date;
  end: Date;
  price: string;
  description: String;
}
