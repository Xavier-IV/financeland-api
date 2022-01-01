import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ExpenseService } from './expense.service';

@Controller('expense')
export class ExpenseController {
  constructor(private readonly service: ExpenseService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.service.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id, @Body() body) {
    return this.service.update(id, body);
  }

  @Post()
  create(@Body() body) {
    return this.service.create(body);
  }
}
