import {User} from "./user.ts";

export type Comment = {
    id: number,
    content: string,
    createdAt: string,
    score: number,
    user: User,
    replyingTo: string | null,
    replies: Comment[]
}
