import {FC} from "react";
import {Comment} from "../../../types/comment.ts";
import {CommentItem} from "../CommentItem.tsx";

interface Props {
    replies: Comment[],
    level: number
}

export const CommentItemReplyList: FC<Props> = ({ replies, level }) => {
    return (
        <div className="flex flex-row">
            <div className="flex flex-row basis-1/5">
                <div className="w-full border-r-2 border-b-gray-500"></div>
                <div className="w-full"></div>
            </div>
            <div className="flex flex-col gap-2">
                {
                    replies.map((reply) => {
                        return <CommentItem key={reply.id} comment={reply} level={level}/>
                    })
                }
            </div>
        </div>
    )
}
