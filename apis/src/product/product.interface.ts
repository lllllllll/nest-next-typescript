import { Document } from 'mongoose';

export interface Product extends Document {
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

export interface Products {
  products: Product[];
}

export const headColumn = [
  'condo_name',
  'title',
  'description',
  'photos',
  'rent_price',
  'sale_price',
  'bedroom',
  'bath',
  'size',
  'floor',
  'agent_post',
  'accept_agent',
  'aircon',
  'bath_tub',
  'electric_stove',
  'furniture',
  'gas_stove',
  'Refrigerator',
  'washing_machine',
  'water_heater',
]
