import { Comment } from "../../types/comment.ts";
import {FC} from "react";
import {CommentItemScoreSwitcher} from "./CommentItemScoreSwitcher/CommentItemScoreSwitcher.tsx";
import {CommentItemContent} from "./CommentItemContent/CommentItemContent.tsx";
import {CommentItemReplyList} from "./CommentItemReplyList/CommentItemReplyList.tsx";

interface Props {
    comment: Comment;
    level?: number;
}

export const CommentItem: FC<Props> = ({ comment, level = 0 }) => {
    return (
        <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-row items-center bg-white rounded-md gap-6 p-6">
                <CommentItemScoreSwitcher score={comment.score}/>
                <CommentItemContent {...comment}/>
            </div>
            { comment.replies.length > 0 ? <CommentItemReplyList replies={comment.replies} level={level + 1}/> : <></> }
        </div>
    )
}
