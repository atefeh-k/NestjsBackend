import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './Products/product.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ProductModule , MongooseModule.forRoot('mongodb+srv://Atefeh:9HM_HTGb7HPPk*H@cluster0.iwnlk.mongodb.net/katana-db?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
