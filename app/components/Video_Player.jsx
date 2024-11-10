"use client"
import ReactPlayer from "react-player";
export default function Video_Player({coverVideo}) {
    return(
    <ReactPlayer width="100%" url={coverVideo} />
    )
};
