import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function LikeBtn(props) {
  // updates likes

  const like = () => props.setLikes(props.likes + 1);
  return (
    <button
      type="button"
      className="button button-left"
      title="Like"
      onClick={like}
      // when clicked on it increases the counter
    >
      <FontAwesomeIcon icon={faThumbsUp} /> {props.likes}
      {/* increases the counter and displays it to user*/}
    </button>
  );
}
