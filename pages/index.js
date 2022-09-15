import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  const postOwn = [{ comment: comments, likeNum: 159 }];
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        {/* <PostOwner /> */}
        {postOwn.map((x) => (
          <PostOwner like={x.likeNum} reply={x.comment} />
        ))}
      </div>
    </div>
  );
}
