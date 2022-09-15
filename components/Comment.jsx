import React from "react";
import { comments } from "../libs/comments";
import PostOwner from "./PostOwner";
import Reply from "./Reply";

export default function Comment(props) {
  return comments.map((x, i) => (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={x.userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{x.username}</span>
          <br />
          <span>{x.commentText}</span>
          <div className="d-flex align-items-center gap-1">
            {props.like > 0 ? <img src="/like.svg" width={20}></img> : null}
            {props.like > 0 ? <span className="text-muted">159 คน</span> : null}
          </div>
        </div>
      </div>
      {/*render Reply here... */}
      <Reply />
    </div>
  ));
  // .filter((y) => y.likeNum > 0);
}
