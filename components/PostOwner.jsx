import React from "react";
import Comment from "./Comment";

export default function PostOwner(props) {
  return (
    <div className="vstack gap-3">
      <div className="d-flex align-items-center gap-3">
        <img
          src={
            "https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/274099911_3197464537152583_8727837563285133600_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGQ5g1K-jx0MRSJIq3szV09GTx_29JMj6QZPH_b0kyPpGWdaOvCe_08orayvT7hMM9qWOMLhdFYmd6jgJhVsM9u&_nc_ohc=XwF4gQ9p_qcAX_DE4lU&_nc_ht=scontent.fbkk14-1.fna&oh=00_AT9FpqU3WHamnNPqDZkmKkhYYH5Scg7hdVecPOJpfxSKYQ&oe=63272BB1"
          }
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <span className="fw-semibold fs-5">Pattharapon Takham 640610656</span>
      </div>
      <span>I love you 3000</span>
      <div className="d-flex align-items-center gap-1">
        {props.like > 0 ? <img src="/like.svg" width={20}></img> : null}
        {props.like > 0 ? (
          <span className="text-muted">{props.like} คน</span>
        ) : null}
      </div>
      <hr className="m-0" />
      {props.reply.map((x) => (
        <Comment
          name={x.username}
          img={x.userImagePath}
          text={x.userImagePath}
          like={x.likeNum}
          reply={x.repl}
        />
      ))}
    </div>
  );
}
