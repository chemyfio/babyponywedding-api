import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { InvitationService } from './invitation.service';
import { CreateInvitationDto } from './dto/create-invitation.dto';
import { UpdateInvitationDto } from './dto/update-invitation.dto';

@Controller('invitation')
export class InvitationController {
  constructor(private readonly invitationService: InvitationService) {}

  @Post()
  async create(@Body() createInvitationDto: CreateInvitationDto) {
    return await this.invitationService.create(createInvitationDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.invitationService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInvitationDto: UpdateInvitationDto,
  ) {
    return await this.invitationService.update(id, updateInvitationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.invitationService.remove(id);
  }
}
