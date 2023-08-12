import { useState } from 'react';

import NewItem from './Buttons/NewItem';

export function RetroBoard() {
  const [retroItems, setRetroItems] = useState([
    { category: "", userInput: "example", id: 0 },
  ]);

  const [id, setId] = useState(0);
  // console.log("retro board state", retroItems);
  return (
    <>
      {/*<!-- The class "row" is for the layout changer --> */}
      <main className="content row">
        <h1>Retro Board</h1>
        {/* <!-- Layout changer --> */}
        <div>
          Layout &nbsp;
          <button
            className="button button-default"
            // onClick={() => setLayout("desktop")}
          >
            Desktop
          </button>
          <button
            className="button button-default"
            // onClick={() => setLayout("mobile")}
          >
            Mobile
          </button>
        </div>

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
          ></NewItem>

          {/* <!-- Retro category --> */}

          <NewItem
            retroItems={retroItems}
            setRetroItems={setRetroItems}
            category={2}
            id={id}
            setId={setId}
            title="To Improve"
          ></NewItem>
          {/* <!-- Retro category --> */}

          <NewItem
            retroItems={retroItems}
            setRetroItems={setRetroItems}
            category={3}
            id={id}
            setId={setId}
            title="Action Items"
          ></NewItem>
        </div>
      </main>
    </>
  );
}
