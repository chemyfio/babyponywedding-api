import { Module } from '@nestjs/common';
import { InvitationService } from './invitation.service';
import { InvitationController } from './invitation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvitationRepository } from './invitation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([InvitationRepository])],
  controllers: [InvitationController],
  providers: [InvitationService],
})
export class InvitationModule {}
