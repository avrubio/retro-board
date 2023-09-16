import React from "react";

import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DislikeBtn({ dislikes, itemId, onDislikeClick }) {
  return (
    <button
      type="button"
      className="button button-right"
      title="Dislike"
      onClick={() => onDislikeClick(itemId)}
      // when clicked on it increases the counter
    >
      <FontAwesomeIcon icon={faThumbsDown} /> {dislikes}
      {/* increases the counter and displays it to user*/}
    </button>
  );
}
