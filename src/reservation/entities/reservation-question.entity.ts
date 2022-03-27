import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ReservationAnswer } from './reservation-answer.entity';

@Entity()
export class ReservationQuestion {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  questionText: string;
  @Column()
  lang: string;
  @Column()
  group: number;
  @OneToMany(() => ReservationAnswer, (a) => a.question)
  answers: ReservationAnswer[];
}
