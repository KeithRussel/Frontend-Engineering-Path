import React from "react";
// Add import statements below
import { useSelector } from "react-redux";
import { selectVisibleIDs, selectMatchedIDs } from "../../boardSlice.js";
import { useDispatch } from "react-redux";
import { flipCard, resetCards } from "../../boardSlice.js";

let cardLogo = "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png";

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const dispatch = useDispatch();
  const matchedIDs = useSelector(selectMatchedIDs);
  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id));
  };

  const tryAgainHandler = () => {
    // Add action dispatch below
    dispatch(resetCards());
  };

  let cardStyle = "resting";
  let click = () => flipHandler(id);

  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // 1st if statement
  // implement card id array membership check
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }

  // 2nd if statement
  // implement card id array membership check
  if (matchedIDs.includes(id)) {
    cardStyle = "matched";
  } else {
    cardStyle = "no-match";
  }

  // 3rd if statement
  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    // click = () => {};
    click = tryAgainHandler;
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
