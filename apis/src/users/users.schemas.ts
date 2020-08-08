// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

// @Schema()
// export class User extends Document {
//   @Prop({ required: true })
//   condo_name: string;
//   @Prop({ required: true })
//   title: string;
//   @Prop({ required: true })
//   description: string;
//   @Prop({ required: true })
//   photos: string;
//   @Prop({ required: true })
//   rent_price: number;
//   @Prop({ required: true })
//   sale_price: number;
//   @Prop({ required: true })
//   bedroom: number;
//   @Prop({ required: true })
//   bath: number;
//   @Prop({ required: true })
//   size: number;
//   @Prop({ required: true })
//   floor: number;

//   agent_post: boolean;
//   accept_agent: boolean;
//   aircon: boolean;
//   bath_tub: boolean;
//   electric_stove: boolean;
//   furniture: boolean;
//   gas_stove: boolean;
//   Refrigerator: boolean;
//   washing_machine: boolean;
//   water_heater: boolean;
// }

// export const UserSchema = SchemaFactory.createForClass(User);

export const UserSchema = new mongoose.Schema(
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