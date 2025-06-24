export type Jot = {
  id: string;
  status: "PUBLISHED" | "MUTABLE";
  inviteCode?: string | undefined;
  isInviteCodeExpired?: boolean | undefined;
  title: string;
  html?: string | undefined;
  state: string;
  updatedAt: number;
  timeSinceLastUpdated: string;
  createdAt: number;
};
