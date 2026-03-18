export enum ListingType {
  AUCTION = 'auction',
  FIXED_PRICE = 'fixed_price',
}

export enum ListingStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  SOLD = 'sold',
  EXPIRED = 'expired',
  DEACTIVATED = 'deactivated',
}

export enum AuctionDuration {
  HOURS_24 = '24h',
  HOURS_48 = '48h',
  DAYS_3 = '3d',
  DAYS_7 = '7d',
}
