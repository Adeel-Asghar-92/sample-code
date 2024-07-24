import axios from "axios";
import { IEvent } from "../interfaces/event";

const API_URL = "http://localhost:8000/api/event";

export const getEvents = async (): Promise<IEvent[]> => {
  const response = await axios.get(`${API_URL}/get`);
  return response.data.data;
};

export const updateEvent = async (event: IEvent): Promise<IEvent> => {
  const response = await axios.post<{ data: IEvent }>(
    `${API_URL}/updateById`,
    event
  );
  return response.data.data;
};

export const createEvent = async (event: IEvent): Promise<IEvent[]> => {
  const response = await axios.post<{ data: IEvent[] }>(
    `${API_URL}/create`,
    event
  );
  return response.data.data;
};

export const deleteEvent = async (id: string): Promise<void> => {
  await axios.delete(`${API_URL}/deleteById/${id}`);
};
