import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ExpenseModule } from './expense/expense.module';
import { IncomeModule } from './income/income.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ExpenseModule,
    IncomeModule,
  ],
})
export class AppModule {}
