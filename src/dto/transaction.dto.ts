import { PaymentStatus } from '../enums/payment.enum';

export interface TransactionResponse {
  id: string;
  listingId: string;
  contractId: string;
  buyerDealershipName: string;
  sellerDealershipName: string;
  agentName: string;
  purchasePrice: number;
  buyerFeePercent: number;
  buyerFeeAmount: number;
  sellerFeePercent: number;
  sellerFeeAmount: number;
  netBuyerPrice: number;
  netSellerPrice: number;
  paymentStatus: PaymentStatus;
  completedAt: string | null;
  createdAt: string;
}
