import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { ResponseInvitationDto } from './dto/response-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';
import { InvitationRepository } from './invitation.repository';

@Injectable()
export class InvitationService {
  constructor(
    @InjectRepository(InvitationRepository)
    private inviteRepo: InvitationRepository,
  ) {}
  async create(
    createInvitationDto: CreateInvitationDto,
  ): Promise<ResponseInvitationDto> {
    console.log('This action adds a new invitation');
    const result = await this.inviteRepo.save(createInvitationDto);
    const response: ResponseInvitationDto = new ResponseInvitationDto(
      result.id,
      result.aliasName,
      result.onlineInviteFlag,
      `https://babyponywedding.com/?id=${result.id}`,
    );
    return response;
  }

  async findOne(id: string): Promise<ResponseInvitationDto> {
    console.log(`This action returns a #${id} invitation`);
    const result = await this.inviteRepo.findOne(id);
    const response: ResponseInvitationDto = new ResponseInvitationDto(
      result.id,
      result.aliasName,
      result.onlineInviteFlag,
      `https://babyponywedding.com/?id=${result.id}`,
    );
    return response;
  }

  async update(
    id: string,
    updateInvitationDto: UpdateInvitationDto,
  ): Promise<void> {
    console.log(`This action updates a #${id} invitation`);
    await this.inviteRepo.update(id, updateInvitationDto);
  }

  async remove(id: string): Promise<void> {
    console.log(`This action removes a #${id} invitation`);
    await this.inviteRepo.delete(id);
  }
}
