import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { ReportsController } from './reports/reports.controller';
import { UsersService } from './users/users.service';
import { ReportsService } from './reports/reports.service';
import { UsersModule } from './users/users.module';
import { ReportrsModule } from './reportrs/reportrs.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [UsersModule, ReportrsModule, ReportsModule],
  controllers: [AppController, UsersController, ReportsController],
  providers: [AppService, UsersService, ReportsService],
})
export class AppModule {}
