export interface IEvent {
  _id: string | null;
  title: string;
  start: Date;
  end: Date;
  description: string;
  price: string;
}

export interface Event extends IEvent {}
