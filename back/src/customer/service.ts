import { Injectable, Options } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CustomerEntity } from './entity'

type Options = Partial<CustomerEntity>

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private repository: Repository<CustomerEntity>,
  ) {}

  async findAll(options?: Options): Promise<CustomerEntity[] | undefined> {
    return this.repository.find({
      where: options,
      order: { last_update: 'ASC' },
    })
  }

  update(options: Options) {
    return this.repository.update(options.customer_id, options)
  }
}
