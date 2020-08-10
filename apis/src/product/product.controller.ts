import { Controller, Get, Body, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
// import { parse } from 'fast-csv';
import { parse } from '@fast-csv/parse';
import { diskStorage } from  'multer';
import { extname } from  'path';
import { createReadStream } from 'fs';
import { ProductService } from './product.service';
import { Product, Products, headColumn } from './product.interface';
import { ProductDto, ProductsDto } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(
    private productService: ProductService,
  ) {}

  @Get()
  async getProducts(): Promise<Products[]|any> {
    const data = await this.productService.findAll();

    return { data };
  }

  @Post()
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
      destination: './upload', 
      filename: (req, file, cb) => {
        return cb(null, file.originalname);
      }
    })
  }))
  async createProducts(@UploadedFile() file: any): Promise<Products|any> {
    const path = `${file.destination}/${file.filename}`;
    const stream = await createReadStream(path)
      .pipe(parse({ headers: headColumn }))
      .on('error', (error: any) => console.error(error))
      .on('data', (row: any) => console.log(row))
      .on('end', (rowCount: number) => console.log(`Parsed ${rowCount} rows`));

    return stream;
  }
  // @Post()
  // async createUsers(@Body() users: ProductsDto): Promise<Products> {
  //   console.log('createUsers >> ', users);
    
  //   return await this.productService.createAll(users);
  // }
  @Post('/add')
  async createProduct(@Body() user: ProductDto): Promise<Product> {
    console.log('createUsers >> ', user);
    
    return await this.productService.create(user);
  }
}
