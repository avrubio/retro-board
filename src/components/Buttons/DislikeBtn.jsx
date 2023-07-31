import { useState } from "react";

import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DislikeBtn() {
  // updates dislikes
  let [dislikes, setDislikes] = useState(0);
  const dislike = () => setDislikes(dislikes + 1);
  return (
    <button
      type="button"
      className="button button-left"
      title="Dislike "
      onClick={dislike}
      // when clicked on it increases the counter
    >
      <FontAwesomeIcon icon={faThumbsDown} />
      {dislikes}
      {/* increases the counter and displays it to user*/}
    </button>
  );
}
