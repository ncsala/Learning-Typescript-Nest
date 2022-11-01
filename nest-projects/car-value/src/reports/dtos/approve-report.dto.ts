import { IsBoolean, IsNumber } from 'class-validator'

export class ApproveReportDto {
  @IsNumber()
  approved: number;
}