import React from "react";
import { comments } from "../libs/comments";

export default function Reply(props) {
  const likeed = comments.filter((x) => x.replies.likeNum > 0);
  return comments.map((x) =>
    x.replies.map((y) => (
      <div className="d-flex gap-2 my-2 ps-5">
        <img
          src={y.userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{y.username}</span>
          <br />
          <span>{y.replyText}</span>
          <div className="d-flex align-items-center gap-1">
            <img src="/like.svg" width={20}></img>
            <span className="text-muted">{y.likeNum} คน</span>
          </div>
        </div>
      </div>
    ))
  );
}
