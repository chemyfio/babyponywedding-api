import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Invitation {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  aliasName: string;

  @Column()
  onlineInviteFlag: boolean;
}
