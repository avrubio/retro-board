import { useState } from "react";

import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export function Buttons() {
//   // // useState will allow us add, delete, update items
//   // const [actionItems, setActionItems] = useState([]);
//   // // add a new item to actionsItems array
//   // const addItem = () => {
//   //   setActionItems([...actionItems, ""]);
//   // };
//   // // delete items in actionItems Array
//   // const deleteItem = (index) => {
//   //   setActionItems(
//   //     actionItems.filter((item, currentIndex) => currentIndex !== index)
//   //   );
//   // };

//   // // update items
//   // const updateItem = (userInput, index) => {
//   //   const newActionItems = [...actionItems];
//   //   newActionItems[index] = userInput;
//   //   setActionItems(newActionItems);
//   // };

//   return <></>;
// }

// export function DeleteButton() {}

// export function MoveRight() {}
// export function MoveLeft() {}

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
