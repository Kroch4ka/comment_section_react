import {FC, useRef} from "react";
import { inMemoryCurrentUser } from "../../services/storage.ts";
import {useCommentsContext} from "../../providers/CommentsProvider.tsx";
import {Comment} from "../../types/comment.ts";

interface Props {
    replyToId: number | null;
}

export const AddCommentForm: FC<Props> = ({ }) => {
    const ref = useRef<string>()
    const { comments, setComments } = useCommentsContext()

    const onClickHandler = () => {
        const comment: Comment = {
            id: comments[comments.length - 1].id + 1,
            content: ref.current!,
            createdAt: "Now",
            score: 0,
            user: inMemoryCurrentUser,
            replyingTo: null,
            replies: []
        }
        const newComments = [
            ...comments,
            comment
        ]
        setComments(newComments)
    }

    return (
        <div className="w-full flex-col bg-white rounded-md gap-6">
            <div className="p-6 flex items-start justify-between">
                <img className="max-w-8" src={inMemoryCurrentUser.image.webp}/>
                <textarea onChange={(e) => ref.current = e.target.value} className="resize-none basis-2/3 border-2 border-gray-200 rounded-md py-3 px-6 focus:outline-none" placeholder="Add a comment..."/>
                <button onClick={onClickHandler} className="uppercase py-3 px-8 bg-blue-500 rounded-md text-white">Send</button>
            </div>
        </div>
    )
}
