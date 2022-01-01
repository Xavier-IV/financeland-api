import { Controller, Get } from '@nestjs/common';
import Big from 'big.js';
import { ExpenseService } from '../expense/expense.service';
import { IncomeService } from '../income/income.service';

@Controller('balance')
export class BalanceController {
  constructor(
    private readonly incomeService: IncomeService,
    private readonly expenseService: ExpenseService,
  ) {}

  @Get()
  calculateBalance() {
    const incomes = this.incomeService.findAll();
    const expense = this.expenseService.findAll();

    const totalIncome = incomes.reduce((sum, record) => {
      return sum.add(Big(record.amount));
    }, Big(0));

    const totalExpense = expense.reduce((sum, record) => {
      return sum.add(Big(record.amount));
    }, Big(0));

    return {
      incomes: +totalIncome,
      expenses: +totalExpense,
      balance: +totalIncome.sub(totalExpense),
    };
  }
}
