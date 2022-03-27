import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ReservationQuestion } from './reservation-question.entity';

@Entity()
export class ReservationAnswer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  answerText: string;
  @Column()
  lang: string;
  @Column()
  group: number;
  @Column()
  sequence: number;
  @ManyToOne(() => ReservationQuestion)
  question: ReservationQuestion;
}
