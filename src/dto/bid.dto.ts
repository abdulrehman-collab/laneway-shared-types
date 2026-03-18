export interface PlaceBidRequest {
  amount: number;
}

export interface BidResponse {
  id: string;
  listingId: string;
  bidderId: string;
  bidderDealershipName: string;
  amount: number;
  createdAt: string;
}
