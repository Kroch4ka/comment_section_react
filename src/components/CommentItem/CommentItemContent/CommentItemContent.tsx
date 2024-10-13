import {FC} from "react";
import {Comment} from "../../../types/comment.ts";
import ReplyIcon from "../../../assets/images/icon-reply.svg?react"

export const CommentItemContent: FC<Comment> = (comment: Comment) => {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex flex-row items-center justify-between">
                <div className="flex items-center flex-row gap-4">
                    <img className="max-w-8" src={comment.user.image.webp}/>
                    <span>{comment.user.username}</span>
                    <span>{comment.createdAt}</span>
                </div>
                <div className="flex flex-row items-center gap-1.5">
                    <ReplyIcon/>
                    <span>Reply</span>
                </div>
            </div>
            <div className="text-left">
                {comment.content}
            </div>
        </div>
    )
}
