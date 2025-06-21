export type Jot = {
  id: string;
  status: "PUBLISHED" | "MUTABLE";
  inviteCode?: string | undefined;
  isInviteCodeExpired?: boolean | undefined;
  title: string;
  content: string;
  createdAt: string;
};
