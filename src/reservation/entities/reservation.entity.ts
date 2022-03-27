import { Invitation } from 'src/invitation/entities/invitation.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ReservationAnswer } from './reservation-answer.entity';
import { ReservationQuestion } from './reservation-question.entity';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => Invitation)
  invitationId: Invitation;
  @ManyToOne(() => ReservationQuestion)
  question: ReservationQuestion;
  @ManyToOne(() => ReservationAnswer)
  answer: ReservationAnswer;
}
