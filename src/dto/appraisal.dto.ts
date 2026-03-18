export interface CreateAppraisalRequest {
  exteriorCondition: number; // 1-5
  interiorCondition: number; // 1-5
  mechanicalCondition: number; // 1-5
  estimatedValue: number;
  notes?: string;
}

export interface AppraisalResponse {
  id: string;
  listingId: string;
  appraiserId: string;
  appraiserDealershipName: string;
  exteriorCondition: number;
  interiorCondition: number;
  mechanicalCondition: number;
  estimatedValue: number;
  notes: string | null;
  photos: string[];
  createdAt: string;
}
