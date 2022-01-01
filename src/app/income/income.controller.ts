import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { IncomeService } from './income.service';

@Controller('income')
export class IncomeController {
  constructor(private readonly service: IncomeService) {}

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

  @Delete(':id')
  delete(@Param('id') id) {
    return this.service.destroy(id);
  }
}
