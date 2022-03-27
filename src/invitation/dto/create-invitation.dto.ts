import { IsNotEmpty } from 'class-validator';

export class CreateInvitationDto {
  @IsNotEmpty()
  aliasName: string;
  @IsNotEmpty()
  onlineInviteFlag: boolean;
}
