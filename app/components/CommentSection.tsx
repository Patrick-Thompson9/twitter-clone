import PostData from "@/types/post";
import Comment from "./Comment";

interface props {
  replies: PostData[];
  idsLikedByMe: string[];
}

function CommentSection({ replies, idsLikedByMe }: props) {
  return (
    <div className="flex flex-col justify-center card-size">
      {replies.length === 0 ? (
        <span className="text-xl font-medium my-4 mx-2 text-center">
          No comments yet
        </span>
      ) : (
        <>
          <span className="text-xl font-medium my-4 mx-2 ">Comments</span>
          <ul className="divide-y divide-slate-200/25 border border-sky-200/75 rounded-lg">
            {replies.map((comment, index) => (
              <Comment
                key={index}
                postData={comment}
                likedByMe={idsLikedByMe.includes(comment._id)}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default CommentSection;
