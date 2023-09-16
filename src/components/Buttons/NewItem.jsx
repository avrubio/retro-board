import {
  faChevronLeft,
  faChevronRight,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { DislikeBtn } from "./DislikeBtn";
import { LikeBtn } from "./LikeBtn";

export default function NewItem(props) {
  //declaring retroItems, since it will be updated
  // adding a new item to an array for retroItems

  const newItem = () => {
    let newId = props.id + 1;
    props.setRetroItems([
      ...props.retroItems,
      {
        category: props.category,
        userInput: "",
        id: newId,
        likes: 0,
        dislikes: 0,
      },
    ]);
    props.setId(newId);
  };
  // updates items in array
  const updateItem = (userInput, id) => {
    for (let i = 0; i < props.retroItems.length; i++) {
      if (id === props.retroItems[i].id) {
        const newRetroItems = [...props.retroItems];
        newRetroItems[i].userInput = userInput;
        props.setRetroItems(newRetroItems);
      }
    }
  };

  const deleteItem = (itemId) => {
    props.setRetroItems(props.retroItems.filter((item) => item.id !== itemId));
  };

  const handleLikeClick = (itemId) => {
    // Find the index of the item with the specified id
    const itemIndex = props.retroItems.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      // Create a copy of the items array
      const updatedItems = [...props.retroItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        likes: updatedItems[itemIndex].likes + 1, // updated likes count
      };
      // Update the state with the new array
      props.setRetroItems(updatedItems);
    }
  };

  const handleDislikeClick = (itemId) => {
    // Find the index of the item with the specified id
    const itemIndex = props.retroItems.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      // Create a copy of the items array
      const updatedItems = [...props.retroItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        dislikes: updatedItems[itemIndex].dislikes + 1, // updated likes count
      };
      // Update the state with the new array
      props.setRetroItems(updatedItems);
    }
  };
  // moves items in the direction user inputs
  const moveItem = (id, direction) => {
    for (let i = 0; i < props.retroItems.length; i++) {
      if (id === props.retroItems[i].id) {
        const newRetroItems = [...props.retroItems];

        //trying to change category

        let targetCategory;
        if (direction === "left") {
          if (newRetroItems[i].category > 1) {
            targetCategory = newRetroItems[i].category - 1;
          } else if (newRetroItems[i].category === 1) {
            targetCategory = 3;
          }
        } else if (direction === "right") {
          if (newRetroItems[i].category < 3) {
            targetCategory = newRetroItems[i].category + 1;
          } else if (newRetroItems[i].category === 3) {
            targetCategory = 1;
          }
        }
        newRetroItems[i].category = targetCategory;
        //then update the state
        props.setRetroItems(newRetroItems);
      }
    }
  };

  // const newArray = props.retroItems.filter((item) => {
  //   if (props.category === item.category) {
  //     // console.log(item); // Same idea, but change this
  //     // newRetroItems.push(props.retroItems[i]) // This should be different r

  //     return item;
  //   }
  // });

  return (
    <div className={`RetroCategory RetroCategory-${props.category}`}>
      <h2>{props.title}</h2>

      <button
        type="button"
        className="ButtonAdd button button-default"
        aria-label="Add new card"
        title="Add new card"
        onClick={newItem}
      >
        +
      </button>

      {props.retroItems
        .filter((item) => {
          if (props.category === item.category) {
            return item;
          }
        })
        .map((item, id) => {
          return (
            <div key={id} className="RetroCard" aria-label="Retro card">
              <div key={`retro-item${id}`}>
                <textarea
                  className="textbox"
                  placeholder="Enter text here"
                  aria-label="Enter text here"
                  rows="1"
                  value={item.userInput}
                  onInput={(e) => updateItem(e.target.value, item.id)}
                ></textarea>

                <div className="button-group">
                  <button
                    className="button button-left"
                    title="Move left"
                    onClick={() => moveItem(item.id, "left")}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  <button
                    type="button"
                    className="button button-delete"
                    title="Delete"
                    onClick={() => deleteItem(item.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </button>
                  <div>
                    <LikeBtn
                      likes={item.likes}
                      itemId={item.id}
                      onLikeClick={handleLikeClick}
                    />
                    <DislikeBtn
                      dislikes={item.dislikes}
                      itemId={item.id}
                      onDislikeClick={handleDislikeClick}
                    ></DislikeBtn>
                    <button
                      type="button"
                      className="button button-right"
                      title="Move right"
                      onClick={() => moveItem(item.id, "right")}
                    >
                      <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                  </div>
                </div>
              </div>{" "}
            </div>
          );
        })}

      {/* <!-- User input --> */}
    </div>
  );
}
