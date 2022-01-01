import { Injectable } from '@nestjs/common';

@Injectable()
export class ExpenseService {
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

  findAll() {
    return this.expense;
  }

  findOne(id) {
    return this.expense.find((v) => Number(v.id) === Number(id));
  }

  update(id, body) {
    const index = this.expense.findIndex((v) => Number(v.id) === Number(id));
    this.expense[index] = { ...this.expense[index], ...body };
    return this.expense[index];
  }

  create(body) {
    this.expense.push({ id: this.id++, ...body });
    return this.expense[this.expense.length - 1];
  }

  destroy(id) {
    this.expense = this.expense.filter((v) => Number(v.id) !== Number(id));
    return this.expense;
  }
}
