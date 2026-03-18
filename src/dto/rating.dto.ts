export interface CreateRatingRequest {
  communication: number; // 1-5
  vehicleAccuracy: number; // 1-5
  shippingDelivery: number; // 1-5
  documentationSpeed: number; // 1-5
  overallExperience: number; // 1-5
  reviewText?: string;
}

export interface RatingResponse {
  id: string;
  transactionId: string;
  buyerId: string;
  buyerDealershipName: string;
  sellerId: string;
  communication: number;
  vehicleAccuracy: number;
  shippingDelivery: number;
  documentationSpeed: number;
  overallExperience: number;
  averageRating: number;
  reviewText: string | null;
  createdAt: string;
}

export interface DealershipRatingSummary {
  averageRating: number;
  totalRatings: number;
  communication: number;
  vehicleAccuracy: number;
  shippingDelivery: number;
  documentationSpeed: number;
  overallExperience: number;
}
