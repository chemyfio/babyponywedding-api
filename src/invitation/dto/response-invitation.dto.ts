export class ResponseInvitationDto {
  id: string;
  aliasName: string;
  onlineInviteFlag: boolean;
  fullUrl: string;

  constructor(id, aliasName, onlineInviteFlag, fullUrl) {
    this.id = id;
    this.aliasName = aliasName;
    this.onlineInviteFlag = onlineInviteFlag;
    this.fullUrl = fullUrl;
  }
}
