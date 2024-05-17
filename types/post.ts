import User from "./user";

type PostData = {
  author: User;
  text: string;
  createdAt: Date;
  _id: string;
  likeCount: number;
  commentCount: number;
  shareCount: number;
};

export default PostData;
