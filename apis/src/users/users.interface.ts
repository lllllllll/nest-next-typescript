import { Document } from 'mongoose';

export interface User extends Document {
  _id: string;
  condo_name: string;
  title: string;
  description: string;
  photos: string;
  rent_price: number;
  sale_price: number;
  bedroom: number;
  bath: number;
  size: number;
  floor: number;
  agent_post: boolean;
  accept_agent: boolean;
  aircon: boolean;
  bath_tub: boolean;
  electric_stove: boolean;
  furniture: boolean;
  gas_stove: boolean;
  Refrigerator: boolean;
  washing_machine: boolean;
  water_heater: boolean;
}

export interface Users {
  data: User[];
}
