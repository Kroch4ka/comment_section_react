import {createContext, FC, ReactNode, useContext, useState} from "react";
import {Comment} from "../types/comment.ts";
import {inMemoryComments} from "../services/storage.ts";

export type CommentsContextType = {
    comments: Comment[];
    setComments: (comments: Comment[]) => void;
}

export const CommentsContext = createContext<CommentsContextType>({} as CommentsContextType);

export const CommentsProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [comments, setComments] = useState<Comment[]>(inMemoryComments)
    return (
        <CommentsContext.Provider value={{ comments, setComments }}>
            {children}
        </CommentsContext.Provider>
    )
}

export const useCommentsContext = () => useContext(CommentsContext) as CommentsContextType