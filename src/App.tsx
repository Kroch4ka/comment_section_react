import {useState} from "react";
import {Comment} from "./types/comment.ts";
import {CommentItem} from "./components/CommentItem/CommentItem.tsx";
import {inMemoryComments} from "./services/storage.ts";

function App() {
  const [comments, _] = useState<Comment[]>(inMemoryComments)

  return (
    <div className="flex w-7/12 flex-col gap-2 justify-center items-center">
      {
        comments.map((comment) => {
          return <CommentItem comment={comment} key={comment.id}/>
        })
      }
    </div>
  )
}

export default App
