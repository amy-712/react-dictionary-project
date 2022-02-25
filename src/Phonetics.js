import React from "react";

export default function Phonetics(props) {
  if (props.phonetics)
    return <div className="Phonetics">{props.phonetics.text}</div>;
}
