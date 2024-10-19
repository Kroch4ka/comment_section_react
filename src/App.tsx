import {CommentItem} from "./components/CommentItem/CommentItem.tsx";
import {AddCommentForm} from "./components/AddCommentForm/AddCommentForm.tsx";
import {useCommentsContext} from "./providers/CommentsProvider.tsx";

function App() {
  const { comments } = useCommentsContext();

  return (
      <div className="flex w-7/12 flex-col gap-2 justify-center items-center">
        {
          comments.map((comment) => {
            return <CommentItem comment={comment} key={comment.id}/>
          })
        }
        <AddCommentForm replyToId={null}/>
      </div>
  )
}

export default App
