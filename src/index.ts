/**
 * Laneway Shared Types
 * Central export file for all shared types, enums, and interfaces
 */

// ─── Enums ──────────────────────────────────────────────────
export {
  ActivityType,
  TransactionStatus,
  ContractStatus,
  AppraisalStatus,
  ListingStatus,
  // Legacy type unions
  type ActivityTypeUnion,
  type TransactionStatusUnion,
  type ContractStatusUnion,
  type AppraisalStatusUnion,
  type ListingStatusUnion,
  type ListingTypeUnion,
  type TextVariant,
  type TextWeight,
} from './enums';

// ─── Types ──────────────────────────────────────────────────
export type {
  // Design System
  Color,
  ShadowDefinition,
  TypographyDef,
  SpacingScale,
  RadiusScale,
  ColorPalette,
  FontDefinitions,
  // Theme & UI
  ThemeMode as ThemeModeType,
  ThemeColors,
  Theme,
  TextProps,
  // Message & Communication
  MessageType,
  MessageReadStatus,
  // Vehicle & Listing
  TransmissionType,
  DrivetrainType,
  VehicleBodyType,
  FuelType,
  TransactionType,
  SortOrder,
  PriceRange,
  MileageRange,
  PaginationInfo,
  ListingFilterCriteria,
  // API
  ApiResponse,
  PaginatedApiResponse,
  ErrorResponse,
  // Rating & Scoring
  RatingScale,
  AppraisalScore,
  // Other
  BidIncrementType,
  OnlineStatus,
} from './types';

// ─── Interfaces ──────────────────────────────────────────────
export type {
  // Vehicle & Listing
  Listing,
  Bid,
  // Messaging
  Message,
  Conversation,
  // Transaction
  Transaction,
  Contract,
  Appraisal,
  DealerReview,
  // User & Seller
  SellerProfile,
  Buyer,
  BuyerPreferences,
  // Theme & UI
  ITheme,
  IThemeContext,
  ITextProps,
  // Design System
  DesignTokens,
  Breakpoints,
  // Search & Filter
  ListingSearchQuery,
  SearchResults,
  // Notification & Alert
  Notification,
  Alert,
  // Form
  FormFieldError,
  FormValidationResult,
  FormState,
} from './interfaces';

// Version
export const VERSION = '1.0.0';

// Utility types for common patterns

/**
 * Utility type for extracting values from an object
 */
export type ValueOf<T> = T[keyof T];

/**
 * Utility type for making all properties optional recursively
 */
export type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

/**
 * Utility type for making all properties readonly recursively
 */
export type DeepReadonly<T> = T extends object ? {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
} : T;

/**
 * Utility type for extracting function parameter types
 */
export type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * Utility type for extracting function return type
 */
export type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
