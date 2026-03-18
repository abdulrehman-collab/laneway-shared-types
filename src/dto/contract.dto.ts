import { ContractState } from '../enums/contract.enum';

export interface ContractResponse {
  id: string;
  listingId: string;
  buyerId: string;
  sellerId: string;
  purchasePrice: number;
  state: ContractState;
  docusignEnvelopeId: string | null;
  signedPdfUrl: string | null;
  createdAt: string;
}
