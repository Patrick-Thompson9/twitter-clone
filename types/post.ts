import User from "./user";

type PostData = {
  author: User;
  text: string;
  createdAt: Date;
};

export default PostData;
