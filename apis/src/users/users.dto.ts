import { IsNotEmpty, MinLength } from 'class-validator';

export class UserDto {
  @MinLength(2, { message: 'กรุณาระบุอย่างน้อย 2 ตัวอักษร' })
  @IsNotEmpty({ message: 'กรุณาระบุ Condo name' })
  condo_name: string;
  @IsNotEmpty({ message: 'กรุณาระบุ Title' })
  title: string;
  @IsNotEmpty({ message: 'กรุณาระบุ Description' })
  description: string;
  @IsNotEmpty({ message: 'กรุณาระบุ Photos url' })
  photos: string;
  @IsNotEmpty({ message: 'กรุณาระบุ Rent price' })
  rent_price: number;
  @IsNotEmpty({ message: 'กรุณาระบุ Sale price' })
  sale_price: number;
  @IsNotEmpty({ message: 'กรุณาระบุ Bedroom' })
  bedroom: number;
  @IsNotEmpty({ message: 'กรุณาระบุ Sale bath' })
  bath: number;
  @IsNotEmpty({ message: 'กรุณาระบุ Size' })
  size: number;
  @IsNotEmpty({ message: 'กรุณาระบุ Floor' })
  floor: number;

  agent_post?: boolean;
  accept_agent?: boolean;
  aircon?: boolean;
  bath_tub?: boolean;
  electric_stove?: boolean;
  furniture?: boolean;
  gas_stove?: boolean;
  Refrigerator?: boolean;
  washing_machine?: boolean;
  water_heater?: boolean;
}

export class UsersDto {
  @IsNotEmpty({ message: 'กรุณาระบุ data' })
  data: [UserDto]
}
