import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('v1/income')
export class IncomeController {
  id = 3;
  incomes = [
    {
      id: 1,
      name: 'Basic Net Salary',
      amount: 900.0,
      companyName: 'ABC Sdn Bhd',
    },
    {
      id: 1,
      name: 'Overtime',
      amount: 900.0,
      companyName: 'ABC Sdn Bhd',
    },
  ];

  @Get()
  findAll() {
    return this.incomes;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.incomes.find((v) => Number(v.id) === Number(id));
  }

  @Put(':id')
  update(@Param('id') id, @Body() body) {
    const index = this.incomes.findIndex((v) => Number(v.id) === Number(id));
    this.incomes[index] = { ...this.incomes[index], ...body };
    return this.incomes[index];
  }

  @Post()
  create(@Body() body) {
    this.incomes.push({ id: this.id++, ...body });
    return this.incomes[this.incomes.length - 1];
  }
}
