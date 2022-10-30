import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity'

@Module({
  // Este paso crea el repository por nosotros.
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
