import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.schemas';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'product', schema: ProductSchema }])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
