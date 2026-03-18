export interface SendMessageRequest {
  content: string;
}

export interface MessageResponse {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  createdAt: string;
}

export interface ConversationResponse {
  id: string;
  listingId: string;
  listingTitle: string;
  participants: { id: string; dealershipName: string }[];
  lastMessage: MessageResponse | null;
  unreadCount: number;
}
