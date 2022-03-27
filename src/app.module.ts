import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Invitation } from './invitation/entities/invitation.entity';
import { InvitationModule } from './invitation/invitation.module';
import { ReservationModule } from './reservation/reservation.module';

@Module({
  imports: [
    InvitationModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'wedding',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ReservationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
