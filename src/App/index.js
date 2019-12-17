import React, { useEffect, useState } from "react";
import produce from "immer";
import AppWrapper from "./AppWrapper";
import Pros from "../components/Pros";
import Cons from "../components/Cons";
import showErrorPopUp from "../utils/showErrorPopUp";
import { fetchProsAndCons, putProsAndCons } from "../services";

function App() {
  const [prosAndCons, setProsAndCons] = useState({});

  function handlePronsAndCons({ data }) {
    setProsAndCons(data);
  }

  useEffect(() => {
    fetchProsAndCons().then(handlePronsAndCons);
  }, []);

  function addItem(type, newItem) {
    if (!newItem) {
      showErrorPopUp("Please provide discription");
    } else if (prosAndCons[type].includes(newItem)) {
      showErrorPopUp("Such item already exist");
    } else {
      const nextState = produce(prosAndCons, draftState => {
        draftState[type] = [...draftState[type], newItem];
      });

      setProsAndCons(nextState);
      putProsAndCons(nextState);
    }
  }

  function deleteItem(type, index) {
    const nextState = produce(prosAndCons, draftState => {
      draftState[type].splice(index, 1);
    });
    setProsAndCons(nextState);
    putProsAndCons(nextState);
  }

  return (
    <AppWrapper>
      <Pros
        pros={prosAndCons["pros"]}
        addItem={addItem}
        deleteItem={deleteItem}
      />
      <Cons
        cons={prosAndCons["cons"]}
        addItem={addItem}
        deleteItem={deleteItem}
      />
    </AppWrapper>
  );
}

export default App;
