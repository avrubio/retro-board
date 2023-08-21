import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function DislikeBtn(props) {
  // updates dislikes

  const dislike = () => props.setDislikes(props.dislikes + 1);
  return (
    <button
      type="button"
      className="button button-left"
      title="Dislike "
      onClick={dislike}
      // when clicked on it increases the counter
    >
      <FontAwesomeIcon icon={faThumbsDown} /> {props.dislikes}
      {/* increases the counter and displays it to user*/}
    </button>
  );
}
