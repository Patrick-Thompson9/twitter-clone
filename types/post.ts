import User from "./user";

type PostData = {
  author: User;
  text: string;
  createdAt: Date;
  _id: string;
};

export default PostData;
