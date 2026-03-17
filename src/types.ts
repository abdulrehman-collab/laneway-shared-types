/**
 * Laneway Platform Type Definitions
 * Shared type definitions used across all modules
 */

import { ListingTypeUnion, TextVariant, TextWeight, ThemeMode as ThemeModeEnum } from './enums';

// ─── Design System Types ────────────────────────────────────

/**
 * Color definition object
 */
export type Color = string;

/**
 * Shadow definition
 */
export interface ShadowDefinition {
  shadowColor: string;
  shadowOffset: { width: number; height: number };
  shadowOpacity: number;
  shadowRadius: number;
  elevation: number;
}

/**
 * Typography definition
 */
export interface TypographyDef {
  fontSize: number;
  lineHeight: number;
}

/**
 * Spacing scale
 */
export type SpacingScale = Record<number | string, number>;

/**
 * Border radius scale
 */
export type RadiusScale = Record<string, number>;

/**
 * Color palette
 */
export interface ColorPalette {
  [key: number]: string;
}

/**
 * Font definitions
 */
export interface FontDefinitions {
  [key: string]: string;
}

// ─── Theme & UI Types ──────────────────────────────────────

/**
 * Theme mode type
 */
export type ThemeMode = 'light' | 'dark';

/**
 * Theme color definitions
 */
export interface ThemeColors {
  background: string;
  surface: string;
  surfaceElevated: string;
  surfaceInput: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  textInverse: string;
  textLink: string;
  primary: string;
  primaryLight?: string;
  primaryDark?: string;
  primaryDim?: string;
  primaryBorder?: string;
  accent?: string;
  accentLight?: string;
  accentDim?: string;
  accentBorder?: string;
  success: string;
  successLight?: string;
  successDim?: string;
  successBorder?: string;
  warning: string;
  warningLight?: string;
  error: string;
  errorLight?: string;
  errorDim?: string;
  info: string;
  border: string;
  borderLight?: string;
  borderFocus: string;
  overlay: string;
  overlayHeavy?: string;
  glass?: string;
  glassDark?: string;
  glassBorder?: string;
  tabActive: string;
  tabInactive: string;
  statusBar: 'dark' | 'light';
  [key: string]: any;
}

/**
 * Theme definition
 */
export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
  fonts: Record<string, string>;
  typography: Record<string, TypographyDef>;
  spacing: SpacingScale;
  radius: RadiusScale;
  shadows: Record<string, ShadowDefinition>;
}

/**
 * Text properties
 */
export interface TextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  display?: boolean;
}

// ─── Message & Communication Types ─────────────────────────

/**
 * Message type
 */
export type MessageType = 'text' | 'image' | 'system' | 'file';

/**
 * Message read status
 */
export type MessageReadStatus = boolean;

// ─── Vehicle & Listing Types ───────────────────────────────

/**
 * Vehicle transmission type
 */
export type TransmissionType = 'Automatic' | 'Manual' | 'CVT' | 'Single Speed';

/**
 * Vehicle drivetrain type
 */
export type DrivetrainType = 'FWD' | 'RWD' | 'AWD' | '4WD';

/**
 * Vehicle body type
 */
export type VehicleBodyType = 'Sedan' | 'SUV' | 'Truck' | 'Van' | 'Coupe' | 'Hatchback' | 'Wagon' | 'Convertible';

/**
 * Vehicle fuel type
 */
export type FuelType = 'Gasoline' | 'Diesel' | 'Electric' | 'Hybrid' | 'Plug-in Hybrid' | 'Natural Gas';

/**
 * Purchase/Sale type
 */
export type TransactionType = 'purchase' | 'sale';

/**
 * Sorting order
 */
export type SortOrder = 'asc' | 'desc';

/**
 * Price range filter
 */
export interface PriceRange {
  min: number;
  max: number;
}

/**
 * Mileage range filter
 */
export interface MileageRange {
  min: number;
  max: number;
}

/**
 * Pagination info
 */
export interface PaginationInfo {
  page: number;
  pageSize: number;
  total: number;
  hasMore: boolean;
}

/**
 * Filter criteria for listings
 */
export interface ListingFilterCriteria {
  searchQuery?: string;
  priceRange?: PriceRange;
  mileageRange?: MileageRange;
  make?: string;
  model?: string;
  year?: { min: number; max: number };
  bodyType?: VehicleBodyType;
  fuelType?: FuelType;
  transmission?: TransmissionType;
  listingType?: ListingTypeUnion;
  sortBy?: string;
  sortOrder?: SortOrder;
  pagination?: PaginationInfo;
}

/**
 * API Response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
  code?: string | number;
}

/**
 * Paginated API Response
 */
export interface PaginatedApiResponse<T> extends ApiResponse<T[]> {
  pagination: PaginationInfo;
}

/**
 * Error response
 */
export interface ErrorResponse {
  success: false;
  error: string;
  code: string | number;
  message?: string;
  details?: Record<string, any>;
}

/**
 * Rating scale (1-5)
 */
export type RatingScale = 1 | 2 | 3 | 4 | 5;

/**
 * Appraisal score (out of 5)
 */
export type AppraisalScore = 1 | 2 | 3 | 4 | 5;

/**
 * Bid increment type
 */
export type BidIncrementType = 'fixed' | 'percentage';

/**
 * Online status
 */
export type OnlineStatus = boolean;
