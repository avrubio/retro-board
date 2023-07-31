import { useState } from 'react';

import {
  faChevronLeft,
  faChevronRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DislikeBtn } from './DislikeBtn.jsx';
import { LikeBtn } from './LikeBtn.jsx';

export default function NewItem({ category, title }) {
  //declaring retroItems, since it will be updated

  const [retroItems, setRetroItems] = useState([
    { category, userInput: "example" },
  ]);

  // adding a new item to an array for retroItems
  const newItem = () => {
    setRetroItems([...retroItems, { category, userInput: "" }]);
  };
  // updates items in array
  const updateItem = (userInput, index) => {
    const newRetroItems = [...retroItems];
    newRetroItems[index].userInput = userInput;
    setRetroItems(newRetroItems);
  };
  // deletes items by its index in the array
  const deleteItem = (index) => {
    setRetroItems(
      retroItems.filter((item, currentIndex) => currentIndex !== index)
    );
  };

  // moves items in the direction user inputs
  const moveItem = (index, direction) => {
    const newRetroItems = [...retroItems];
    const currentItem = newRetroItems[index];
    newRetroItems.splice(index, 1);

    let left = document.getElementsByClassName("left");
    let right = document.getElementsByClassName("left");
    let targetCategory;
    if (left === "left") {
      targetCategory = currentItem.category - 1;
    } else if (right === "right") {
      targetCategory = currentItem.category + 1;
    }

    newRetroItems.splice(index, 0, {
      ...currentItem,
      category: targetCategory,
    });

    setRetroItems(newRetroItems);
  };

  return (
    <div className={`RetroCategory RetroCategory-${category}`}>
      <h2>{title}</h2>

      <button
        type="button"
        className="ButtonAdd button button-default"
        aria-label="Add new card"
        title="Add new card"
        onClick={newItem}
      >
        +
      </button>

      {retroItems.map((item, index) => {
        return (
          <div className="RetroCard" aria-label="Retro card">
            <div key={`retro-item${index}`}>
              <textarea
                className="textbox"
                placeholder="Enter text here"
                aria-label="Enter text here"
                rows="1"
                value={item.userInput}
                onInput={(e) => updateItem(e.target.value, index)}
              ></textarea>

              <div className="button-group">
                <button
                  type="button"
                  className="button button-left"
                  title="Move left"
                  onClick={() => moveItem(index, "left")}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  type="button"
                  className="button button-delete"
                  title="Delete"
                  onClick={() => deleteItem(index)}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <div>
                  <LikeBtn></LikeBtn>
                  <DislikeBtn></DislikeBtn>
                  <button
                    type="button"
                    className="button button-right"
                    title="Move right"
                    onClick={() => moveItem(index, "right")}
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
