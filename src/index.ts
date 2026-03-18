// ── Enums ────────────────────────────────────────────────
export { UserRole, UserStatus } from './enums/user.enum';
export { ListingType, ListingStatus, AuctionDuration } from './enums/listing.enum';
export { ContractState } from './enums/contract.enum';
export { PaymentStatus } from './enums/payment.enum';
export { ErrorCode } from './enums/error.enum';

// ── DTOs ─────────────────────────────────────────────────
export type {
  RegisterRequest,
  LoginRequest,
  LoginResponse,
  UserProfile,
  DealershipProfile,
} from './dto/auth.dto';

export type {
  CreateListingRequest,
  ListingCard,
  ListingDetail,
  ListingImage,
} from './dto/listing.dto';

export type {
  PlaceBidRequest,
  BidResponse,
} from './dto/bid.dto';

export type {
  ContractResponse,
} from './dto/contract.dto';

export type {
  SendMessageRequest,
  MessageResponse,
  ConversationResponse,
} from './dto/message.dto';

export type {
  CreateAppraisalRequest,
  AppraisalResponse,
} from './dto/appraisal.dto';

export type {
  CreateRatingRequest,
  RatingResponse,
  DealershipRatingSummary,
} from './dto/rating.dto';

export type {
  TransactionResponse,
} from './dto/transaction.dto';

export type {
  UpdateUserStatusRequest,
  AdminDashboard,
} from './dto/admin.dto';

// ── Interfaces ───────────────────────────────────────────
export type {
  ApiSuccessResponse,
  ApiErrorResponse,
  PaginationMeta,
} from './interfaces';
