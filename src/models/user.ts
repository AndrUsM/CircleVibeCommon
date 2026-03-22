import { AccountStatus, UserChatStatus, UserType } from 'src/enums';

export interface User {
  id: number;
  blockedUserIds: number[];
  username: string;
  firstname: string;
  surname: string;
  birthDate: Date;
  password: string;
  avatarUrl: string;
  avatarUrlOptimized: string;
  isHiddenContactInfo: boolean;
  isAllowedToSearch: boolean;
  accountStatus?: AccountStatus;
  country: string;
  city: string;
  email: string;
  privateKey: string;
  privateToken: string;
  primaryPhone: string;
  type: UserType;
  createdAt: Date;
  updatedAt: Date;
  chatStatus: UserChatStatus;
}
