import { EntityRepository, Repository } from 'typeorm';
import { ReservationQuestion } from './entities/reservation-question.entity';

@EntityRepository(ReservationQuestion)
export class ReservationQuestionRepository extends Repository<ReservationQuestion> {}
