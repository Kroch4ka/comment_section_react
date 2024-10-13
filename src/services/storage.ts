import data from '../assets/json/data.json'
import { Comment } from "../types/comment.ts";
import {User} from "../types/user.ts";

export const inMemoryComments: Comment[] = data.comments
export const inMemoryCurrentUser: User = data.currentUser