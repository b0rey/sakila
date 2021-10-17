import { Body, Controller, Get, Put, Param, Query } from '@nestjs/common'
import { ApiTags, ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger'
import { CustomerService } from './service'
import { CustomerDto } from './dto'
import { CustomerEntity } from './entity'

@ApiTags('customer')
@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  findAll() {
    return this.customerService.findAll()
  }

  @Put(':customerId')
  @ApiParam({ name: 'customerId' })
  @ApiBody({ type: CustomerEntity })
  update(
    @Param('customerId') customerId: string,
    @Body() fields: Partial<CustomerDto>,
  ) {
    return this.customerService.update({
      ...fields,
      customer_id: Number(customerId),
    })
  }
}
