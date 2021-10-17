import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CustomerEntity } from './customer/entity'
import { CustomerModule } from './customer/module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'sakila',
      password: 'sakila',
      database: 'sakila',
      entities: [CustomerEntity],
      synchronize: false,
    }),
    CustomerModule,
  ],
})
export class AppModule {}
