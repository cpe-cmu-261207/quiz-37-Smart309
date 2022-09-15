import React from "react";
import { comments } from "../libs/comments";
import PostOwner from "./PostOwner";
import Reply from "./Reply";

export default function Comment(props) {
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={props.img}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{props.name}</span>
          <br />
          <span>{props.text}</span>
          <div className="d-flex align-items-center gap-1">
            {props.like > 0 ? <img src="/like.svg" width={20}></img> : null}
            {props.like > 0 ? (
              <span className="text-muted">{props.like} คน</span>
            ) : null}
          </div>
        </div>
      </div>
      {/*render Reply here... */}
      {props.reply.map((x) => (
        <Reply
          name={x.username}
          img={x.userImagePath}
          text={x.replyText}
          like={x.likeNum}
          reply={x.replies}
        />
      ))}
    </div>
  );
}
