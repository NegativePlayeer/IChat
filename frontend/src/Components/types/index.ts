export interface Message {
	id: string;
	text: string;
	senderId: string;
	timestamp: Date;
}

export interface User {
	id: string;
	username: string;
	avatarUrl?: string;
	isActive: boolean;
	messages: Message[];
}

export interface CurrentUser {
	id: string;
	username: string;
}
