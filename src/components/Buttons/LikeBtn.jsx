import { useState } from 'react';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function LikeBtn() {
  // updates likes
  let [likes, setLikes] = useState(0);
  const like = () => setLikes(likes + 1);
  return (
    <button
      type="button"
      className="button button-left"
      title="Like"
      onClick={like}
      // when clicked on it increases the counter
    >
      <FontAwesomeIcon icon={faThumbsUp} /> {likes}
      {/* increases the counter and displays it to user*/}
    </button>
  );
}
