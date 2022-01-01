import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';

@Controller('expense')
export class ExpenseController {
  id = 3;
  expense = [
    {
      id: 1,
      name: 'House Rent',
      amount: 900.0,
      category: 'Living',
      isRecurring: 'No',
    },
    {
      id: 2,
      name: 'Car Loan',
      amount: 500.0,
      category: 'Loan',
      isRecurring: 'No',
    },
  ];

  @Get()
  findAll() {
    return this.expense;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    return this.expense.find((v) => Number(v.id) === Number(id));
  }

  @Put(':id')
  update(@Param('id') id, @Body() body) {
    const index = this.expense.findIndex((v) => Number(v.id) === Number(id));
    this.expense[index] = { ...this.expense[index], ...body };
    return this.expense[index];
  }

  @Post()
  create(@Body() body) {
    this.expense.push({ id: this.id++, ...body });
    return this.expense[this.expense.length - 1];
  }
}
