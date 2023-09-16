import React from 'react';

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function LikeBtn({ likes, itemId, onLikeClick }) {

  return (
    <button
      type="button"
      className="button button-left"
      title="Like"
      onClick={() => onLikeClick(itemId)}
    >
      <FontAwesomeIcon icon={faThumbsUp} /> {likes}
    </button>
  );
}
