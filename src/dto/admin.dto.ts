export interface UpdateUserStatusRequest {
  status: 'active' | 'rejected' | 'suspended';
  reason?: string;
}

export interface AdminDashboard {
  users: {
    total: number;
    active: number;
    pendingApproval: number;
    suspended: number;
    newToday: number;
    newWeek: number;
    newMonth: number;
  };
  listings: {
    total: number;
    active: number;
    sold: number;
    expired: number;
    draft: number;
  };
  transactions: {
    total: number;
    totalVolume: number;
    totalFeesCollected: number;
    completedToday: number;
    completedWeek: number;
    completedMonth: number;
  };
  platform: {
    apiAvgResponseMs: number;
    apiP95ResponseMs: number;
    apiErrorRatePercent: number;
    websocketConnections: number;
    uptimePercent30d: number;
  };
}
