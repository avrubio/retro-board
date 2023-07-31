import NewItem from './Buttons/NewItem';

export function RetroBoard() {
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

          <NewItem category="1" title="Went Well"></NewItem>

          {/* <!-- Retro category --> */}

          <NewItem category="2" title="To Improve"></NewItem>
          {/* <!-- Retro category --> */}

          <NewItem category="3" title="Action Items"></NewItem>
        </div>
      </main>
    </>
  );
}
