import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, Products } from './product.interface';
import { ProductsDto, ProductDto } from './product.dto';

@Injectable()
export class ProductService {
  constructor(@InjectModel('product') private readonly productsModel: Model<Product>) { }

  async create(user: ProductDto): Promise<Product> {
    const createdCat = new this.productsModel(user);
    const product = await createdCat.save();

    return product;
  }
  async createAll(products: ProductsDto): Promise<Products> {
    const createdProducts = new this.productsModel(products);
    const result = await createdProducts.save();
    
    return { products: [result] };
  }
  async findAll(): Promise<Product[]> {
    const products = await this.productsModel.find().exec();
    console.log('users >>> ', products);
    
    return products;
  }
}
