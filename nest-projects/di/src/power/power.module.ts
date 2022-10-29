import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  providers: [PowerService],
  // Se exporta para poder utilizar las clases en otros modulos
  exports: [PowerService]
})
export class PowerModule {}
