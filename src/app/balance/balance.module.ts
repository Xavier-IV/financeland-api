import { Module } from '@nestjs/common';
import { ExpenseModule } from '../expense/expense.module';
import { IncomeModule } from '../income/income.module';
import { BalanceController } from './balance.controller';

@Module({
  imports: [ExpenseModule, IncomeModule],
  controllers: [BalanceController],
})
export class BalanceModule {}
