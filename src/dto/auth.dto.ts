import { UserRole, UserStatus } from '../enums/user.enum';

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  dealershipName: string;
  licenseNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: UserProfile;
}

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  role: UserRole;
  status: UserStatus;
  emailVerifiedAt: string | null;
  dealership: DealershipProfile;
}

export interface DealershipProfile {
  id: string;
  name: string;
  licenseNumber: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  verified: boolean;
}
