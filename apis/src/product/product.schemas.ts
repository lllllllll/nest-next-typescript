import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema(
  {
    condo_name: String,
    title: String,
    description: String,
    photos: String,
    rent_price: Number,
    sale_price: Number,
    bedroom: Number,
    bath: Number,
    size: Number,
    floor: Number,
    agent_post: Boolean,
    accept_agent: Boolean,
    aircon: Boolean,
    bath_tub: Boolean,
    electric_stove: Boolean,
    furniture: Boolean,
    gas_stove: Boolean,
    Refrigerator: Boolean,
    washing_machine: Boolean,
    water_heater: Boolean,
  },
  {
    timestamps: { createdAt: 'createdDate', updatedAt: 'updatedDate' },
    versionKey: false,
  },
);