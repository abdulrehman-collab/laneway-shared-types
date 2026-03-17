/**
 * Laneway Platform Enums
 * Shared enum definitions used across all modules
 */

/**
 * Activity type enumeration
 */
export enum ActivityType {
  TRANSACTION = 'transaction',
  CONTRACT = 'contract',
  APPRAISAL = 'appraisal',
  REVIEW = 'review',
}

/**
 * Transaction status enumeration
 */
export enum TransactionStatus {
  COMPLETED = 'completed',
  PENDING = 'pending',
  CANCELLED = 'cancelled',
}

/**
 * Contract status enumeration
 */
export enum ContractStatus {
  PENDING_SIGNATURE = 'pending_signature',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  EXPIRED = 'expired',
}

/**
 * Appraisal status enumeration
 */
export enum AppraisalStatus {
  REQUESTED = 'requested',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

/**
 * Listing status enumeration
 */
export enum ListingStatus {
  ACTIVE = 'active',
  SOLD = 'sold',
  EXPIRED = 'expired',
  DRAFT = 'draft',
}

/**
 * Theme mode enumeration
 */
export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
}

/**
 * Activity type union (legacy support)
 */
export type ActivityTypeUnion = 'transaction' | 'contract' | 'appraisal' | 'review';

/**
 * Transaction status union (legacy support)
 */
export type TransactionStatusUnion = 'completed' | 'pending' | 'cancelled';

/**
 * Contract status union (legacy support)
 */
export type ContractStatusUnion = 'pending_signature' | 'in_progress' | 'completed' | 'expired';

/**
 * Appraisal status union (legacy support)
 */
export type AppraisalStatusUnion = 'requested' | 'in_progress' | 'completed';

/**
 * Listing status union (legacy support)
 */
export type ListingStatusUnion = 'active' | 'sold' | 'expired' | 'draft';

/**
 * Listing type union
 */
export type ListingTypeUnion = 'auction' | 'fixed_price';

/**
 * Text variant union
 */
export type TextVariant = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'displayLg' | 'displayXl' | 'display2xl';

/**
 * Text weight union
 */
export type TextWeight = 'regular' | 'medium' | 'semibold' | 'bold';
