import { Injectable } from '@nestjs/common';

@Injectable()
export class IncomeService {
  id = 3;
  incomes = [
    {
      id: 1,
      name: 'Basic Net Salary',
      amount: 900.0,
      companyName: 'ABC Sdn Bhd',
    },
    {
      id: 2,
      name: 'Overtime',
      amount: 900.0,
      companyName: 'ABC Sdn Bhd',
    },
  ];

  findAll() {
    return this.incomes;
  }

  findOne(id) {
    return this.incomes.find((v) => Number(v.id) === Number(id));
  }

  update(id, body) {
    const index = this.incomes.findIndex((v) => Number(v.id) === Number(id));
    this.incomes[index] = { ...this.incomes[index], ...body };
    return this.incomes[index];
  }

  create(body) {
    this.incomes.push({ ...body, id: this.id++ });
    return this.incomes[this.incomes.length - 1];
  }

  destroy(id) {
    this.incomes = this.incomes.filter((v) => Number(v.id) !== Number(id));
    return this.incomes;
  }
}
