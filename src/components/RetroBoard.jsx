import { useState } from "react";

import { DislikeBtn } from "./Buttons/DislikeBtn";
import { LikeBtn } from "./Buttons/LikeBtn";
import NewItem from "./Buttons/NewItem";

export function RetroBoard() {
  const [retroItems, setRetroItems] = useState([
    { category: "", userInput: "", id: 0 },
  ]);

  const [id, setId] = useState(0);

  let [likes, setLikes] = useState(0);
  let [dislikes, setDislikes] = useState(0);
  return (
    <>
      {/*<!-- The class "row" is for the layout changer --> */}
      <main className="content row">
        <h1>Retro Board</h1>

        {/* <!-- The class "row" is for the layout changer --> */}
        <div className="RetroApp row">
          {/* <!-- Retro category --> */}

          <NewItem
            retroItems={retroItems}
            setRetroItems={setRetroItems}
            category={1}
            id={id}
            setId={setId}
            title="Went Well"
            likes={likes}
            setLikes={setLikes}
            dislikes={dislikes}
            setDislikes={setDislikes}
          >
            <LikeBtn></LikeBtn>
            <DislikeBtn></DislikeBtn>
          </NewItem>

          {/* <!-- Retro category --> */}

          <NewItem
            retroItems={retroItems}
            setRetroItems={setRetroItems}
            category={2}
            id={id}
            setId={setId}
            title="To Improve"
            likes={likes}
            setLikes={setLikes}
            dislikes={dislikes}
            setDislikes={setDislikes}
          >
            <LikeBtn></LikeBtn>
            <DislikeBtn></DislikeBtn>
          </NewItem>
          {/* <!-- Retro category --> */}

          <NewItem
            retroItems={retroItems}
            setRetroItems={setRetroItems}
            category={3}
            id={id}
            setId={setId}
            title="Action Items"
            likes={likes}
            setLikes={setLikes}
            dislikes={dislikes}
            setDislikes={setDislikes}
          >
            <LikeBtn></LikeBtn>
            <DislikeBtn></DislikeBtn>
          </NewItem>
        </div>
      </main>
    </>
  );
}
