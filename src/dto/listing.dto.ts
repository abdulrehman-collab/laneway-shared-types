import { ListingType, ListingStatus, AuctionDuration } from '../enums/listing.enum';

export interface CreateListingRequest {
  vin: string;
  year: number;
  make: string;
  model: string;
  bodyType: string;
  engine: string;
  drivetrain: string;
  mileage: number;
  color: string;
  transmission: string;
  listingType: ListingType;
  startingPrice?: number;
  askingPrice?: number;
  auctionDuration?: AuctionDuration;
  description?: string;
}

export interface ListingCard {
  id: string;
  title: string;
  thumbnailUrl: string | null;
  price: number;
  currentBid: number | null;
  mileage: number;
  listingType: ListingType;
  status: ListingStatus;
  sellerDealershipName: string;
  sellerRating: number | null;
  createdAt: string;
}

export interface ListingDetail extends ListingCard {
  vin: string;
  year: number;
  make: string;
  model: string;
  bodyType: string;
  engine: string;
  drivetrain: string;
  color: string;
  transmission: string;
  description: string | null;
  images: ListingImage[];
  sellerId: string;
  sellerListingCount: number;
  auctionEndsAt: string | null;
  bidCount: number;
}

export interface ListingImage {
  id: string;
  url: string;
  thumbnailUrl: string;
  position: number;
}
