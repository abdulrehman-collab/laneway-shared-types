/**
 * Laneway Platform Interfaces
 * Core data structure definitions
 */

import {
  ListingTypeUnion,
  ListingStatusUnion,
  TransactionStatusUnion,
  ContractStatusUnion,
  AppraisalStatusUnion,
  TextVariant,
  TextWeight,
} from '../enums';
import {
  TransmissionType,
  DrivetrainType,
  VehicleBodyType,
  FuelType,
  TransactionType,
  RatingScale,
  AppraisalScore,
  OnlineStatus,
  MessageType,
  ThemeMode,
  ThemeColors,
  ShadowDefinition,
  TypographyDef,
  SpacingScale,
  RadiusScale,
} from '../types';

// ─── Vehicle & Listing Interfaces ──────────────────────────

/**
 * Listing interface - Core vehicle listing data
 */
export interface Listing {
  id: string;
  title: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  vin: string;
  mileage: number;
  color: string;
  transmission: TransmissionType;
  engine: string;
  drivetrain: DrivetrainType;
  bodyType: VehicleBodyType;
  fuelType: FuelType;
  description: string;
  listingType: ListingTypeUnion;
  price: number;
  startingPrice?: number;
  currentBid?: number;
  bidCount?: number;
  expiresAt?: string;
  sellerId: string;
  sellerName: string;
  sellerCity: string;
  sellerState: string;
  sellerRating: number;
  sellerReviewCount: number;
  sellerListingCount: number;
  images: string[];
  isFavorited: boolean;
  status: ListingStatusUnion;
  createdAt?: string;
  soldTo?: string;
  soldPrice?: number;
}

/**
 * Bid interface - Auction bid data
 */
export interface Bid {
  id: string;
  amount: number;
  dealershipName: string;
  city: string;
  state: string;
  timeAgo: string;
}

// ─── Messaging Interfaces ──────────────────────────────────

/**
 * Message interface - Individual message
 */
export interface Message {
  id: string;
  text: string;
  senderId: string;
  timestamp: string;
  read: boolean;
  type?: MessageType;
}

/**
 * Conversation interface - Message thread
 */
export interface Conversation {
  id: string;
  dealerName: string;
  dealerInitial: string;
  dealerCity: string;
  dealerState: string;
  isOnline: OnlineStatus;
  vehicleTitle: string;
  vehicleImage: string;
  listingId: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
  messages: Message[];
}

// ─── Transaction Interfaces ────────────────────────────────

/**
 * Transaction interface - Purchase/Sale transaction
 */
export interface Transaction {
  id: string;
  type: TransactionType;
  vehicleTitle: string;
  vehicleImage: string;
  listingId: string;
  price: number;
  counterparty: string;
  counterpartyCity: string;
  counterpartyState: string;
  status: TransactionStatusUnion;
  agentName?: string;
  date: string;
  timeAgo: string;
}

/**
 * Contract interface - Purchase/Sale contract
 */
export interface Contract {
  id: string;
  vehicleTitle: string;
  vehicleImage: string;
  listingId: string;
  counterparty: string;
  status: ContractStatusUnion;
  value: number;
  dueDate: string;
  timeAgo: string;
}

/**
 * Appraisal interface - Vehicle appraisal
 */
export interface Appraisal {
  id: string;
  vehicleTitle: string;
  vehicleImage: string;
  listingId: string;
  requestedBy: string;
  status: AppraisalStatusUnion;
  exteriorScore?: AppraisalScore;
  interiorScore?: AppraisalScore;
  mechanicalScore?: AppraisalScore;
  estimatedValue?: number;
  timeAgo: string;
}

/**
 * DealerReview interface - Dealer/Seller review
 */
export interface DealerReview {
  id: string;
  reviewerName: string;
  reviewerCity: string;
  reviewerState: string;
  rating: RatingScale;
  comment: string;
  vehicleTitle: string;
  timeAgo: string;
}

// ─── User & Seller Interfaces ──────────────────────────────

/**
 * Seller/Dealer profile interface
 */
export interface SellerProfile {
  id: string;
  name: string;
  city: string;
  state: string;
  rating: number;
  reviewCount: number;
  listingCount: number;
  isOnline?: OnlineStatus;
  image?: string;
}

/**
 * Buyer interface
 */
export interface Buyer {
  id: string;
  name: string;
  email: string;
  phone?: string;
  preferences?: BuyerPreferences;
}

/**
 * Buyer preferences interface
 */
export interface BuyerPreferences {
  maxPrice?: number;
  minYear?: number;
  bodyTypes?: VehicleBodyType[];
  makes?: string[];
  models?: string[];
  fuelTypes?: FuelType[];
}

// ─── Theme & UI Interfaces ────────────────────────────────

/**
 * Theme interface - Complete theme definition
 */
export interface ITheme {
  mode: ThemeMode;
  colors: ThemeColors;
  fonts: Record<string, string>;
  typography: Record<TextVariant, TypographyDef>;
  spacing: SpacingScale;
  radius: RadiusScale;
  shadows: Record<string, ShadowDefinition>;
}

/**
 * Theme context interface
 */
export interface IThemeContext {
  theme: ITheme;
  mode: ThemeMode;
  toggleTheme: () => void;
  setMode: (mode: ThemeMode) => void;
}

/**
 * Text component props interface
 */
export interface ITextProps {
  variant?: TextVariant;
  weight?: TextWeight;
  color?: string;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  display?: boolean;
  children?: any;
}

// ─── Design System Interfaces ──────────────────────────────

/**
 * Design tokens interface
 */
export interface DesignTokens {
  colors: Record<string, any>;
  fonts: Record<string, string>;
  spacing: SpacingScale;
  radius: RadiusScale;
  shadows: Record<string, ShadowDefinition>;
  typography: Record<string, TypographyDef>;
}

/**
 * Responsive breakpoints interface
 */
export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

// ─── Search & Filter Interfaces ────────────────────────────

/**
 * Listing search query interface
 */
export interface ListingSearchQuery {
  query: string;
  filters?: {
    priceMin?: number;
    priceMax?: number;
    mileageMin?: number;
    mileageMax?: number;
    yearMin?: number;
    yearMax?: number;
    make?: string[];
    model?: string[];
    bodyType?: VehicleBodyType[];
    fuelType?: FuelType[];
    transmission?: TransmissionType[];
    listingType?: ListingTypeUnion;
  };
  sort?: {
    field: string;
    order: 'asc' | 'desc';
  };
  pagination?: {
    page: number;
    pageSize: number;
  };
}

/**
 * Search results interface
 */
export interface SearchResults<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  hasMore: boolean;
}

// ─── Notification & Alert Interfaces ────────────────────────

/**
 * Notification interface
 */
export interface Notification {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

/**
 * Alert interface
 */
export interface Alert {
  id: string;
  type: 'info' | 'warning' | 'error' | 'success';
  message: string;
  duration?: number;
  action?: {
    label: string;
    onPress: () => void;
  };
}

// ─── Form Interfaces ───────────────────────────────────────

/**
 * Form field error interface
 */
export interface FormFieldError {
  field: string;
  message: string;
}

/**
 * Form validation result interface
 */
export interface FormValidationResult {
  isValid: boolean;
  errors: FormFieldError[];
}

/**
 * Form state interface
 */
export interface FormState<T> {
  values: T;
  errors: Partial<Record<keyof T, string>>;
  touched: Partial<Record<keyof T, boolean>>;
  isSubmitting: boolean;
}
