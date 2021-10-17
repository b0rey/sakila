import { CustomerEntity } from './entity'

export type CustomerDto = Omit<CustomerEntity, 'customer_id'>
