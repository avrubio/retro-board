import {
  faChevronLeft,
  faChevronRight,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DislikeBtn } from './DislikeBtn';
import { LikeBtn } from './LikeBtn';

export default function NewItem(props) {
  // console.log("new item", props.title, props.retroItems);
  //declaring retroItems, since it will be updated

  // const [retroItems, setRetroItems] = useState([
  //   { category, userInput: "example" },
  // ]);

  // {category: '1', userInput:'went well', {category: '2', userInput:'to improve'}, {category: '3', userInput: 'action items'}

  // adding a new item to an array for retroItems

  const newItem = () => {
    let newId = props.id + 1;
    props.setRetroItems([
      ...props.retroItems,
      { category: props.category, userInput: "", id: newId },
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

  ////TODOO: refactor to use id instead of index similar to update item, it needs to pass the id

  // deletes items by its index in the array
  // const deleteItem = (id) => {
  //   props.setRetroItems(props.retroItems.filter((id) => id !== id));
  // };

  const deleteItem = (itemId) => {
    props.setRetroItems(props.retroItems.filter((item) => item.id !== itemId));
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

  const newArray = props.retroItems.filter((item) => {
    if (props.category === item.category) {
      // console.log(item); // Same idea, but change this
      // newRetroItems.push(props.retroItems[i]) // This should be different r

      return item;
    }
  });

  // for (let i = 0; i < props.retroItems.length; i++) {
  //   // console.log(props.retroItems[i].category)
  //   if (props.category === props.retroItems[i].category) {
  //     // then post the object
  //     newRetroItems.push(props.retroItems[i]);
  //   }
  // }

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
            // console.log(item); // Same idea, but change this
            // newRetroItems.push(props.retroItems[i]) // This should be different r

            return item;
          }
        })
        .map((item, id) => {
          return (
            <div className="RetroCard" aria-label="Retro card">
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
                    <LikeBtn></LikeBtn>
                    <DislikeBtn></DislikeBtn>
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
