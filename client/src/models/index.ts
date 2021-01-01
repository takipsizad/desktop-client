export type User = {
  id: string;
  name: string;
  avatarUrl?: string;
  bot: boolean;
  status: UserStatus;
};

export type UserStatusValue = "online" | "offline" | "dnd" | "away";
export type UserStatus = {
  statusText?: string;
  value: UserStatusValue;
};

export type ServerMessage = {
  id: string;
  channelId: string;
  author: User;
  embed?: Embed;
  content: string;
  timestamp: Date;
  //  mentions: string[];
};

export interface ServerEditMessage extends ServerMessage {
  newContent: string;
  newEmbed?: Embed;
  updatedTimestamp: number;
}

type MessageBase = {
  user: User;
  mentions: string[];
};

export type ScrollPosition = number | "end";

export type ServerChannel = {
  id: string;
  system: boolean;
  name: string;
  members: User[];
};

export type Channel = {
  id: string;
  system: boolean;
  name: string;
  members: string[];
  scroll: ScrollPosition;
  lastMessageId?: string;
  unreadAmount: number;
  mentionAmount: number;
};

export type Embed = {
  author?: EmbedAuthor;
  title?: string;
  description?: string;
  color?: number;
  footer?: string;
  imageUrl?: string;
  thumbnailUrl?: string;
}

export type EmbedAuthor = {
  value: string;
  iconUrl: string;
}

export type MessagePart = {
  id: string;
  content: string;
  embed?: Embed;
  isEmojiOnly: boolean;
  isMention: boolean;
}

export type Message = {
  id: string;
  author: User;
  timestamp: Date;
  parts: MessagePart[];
}

export type UserTyping = {
  id: string;
  lastTypingTime: number;
}

export type MessagePartContent = {
  content: string
  mentionType?: "user" | "channel"
  mentionId?: string
}
