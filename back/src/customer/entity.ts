import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn()
  customer_id: number

  @Column('varchar', { length: 50 })
  @ApiProperty()
  email: string

  @Column('tinyint', { width: 1 })
  @ApiProperty()
  active: number

  @Column('timestamp')
  @ApiProperty()
  last_update: Date
}
