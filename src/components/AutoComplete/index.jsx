import React, { useState, Fragment } from "react";
import "./AutoComplete.styles.scss";

const AutoComplete = ({ suggestions, ...props }) => {
  const [state, setState] = useState({
    activeSuggestion: 0,
    filteredSuggestions: [],
    showSuggestions: false,
    userInput: "",
  });

  const onChange = (e) => {
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setState({
      activeSuggestion: 0,
      showSuggestions: true,
      userInput: userInput,
      filteredSuggestions: filteredSuggestions,
    });
  };

  const onClick = (e) => {
    setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText,
    });
  };

  const onKeyDown = (e) => {
    const { activeSuggestion, filteredSuggestions } = state;

    if (e.keyCode === 13) {
      setState((prev) => ({
        ...prev,
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion],
      }));
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setState((prev) => ({ ...prev, activeSuggestion: activeSuggestion - 1 }));
    }
    // User pressed the down arrow, increment the index
    else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setState((prev) => ({ ...prev, activeSuggestion: activeSuggestion + 1 }));
    }
  };

  let suggestionsListComponent;

  const {
    activeSuggestion,
    filteredSuggestions,
    showSuggestions,
    userInput,
  } = state;

  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = "suggestion-active";
            }
            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <em>No suggestions available.</em>
        </div>
      );
    }
  }

  return (
    <Fragment>
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={state.userInput}
      />
      {suggestionsListComponent}
    </Fragment>
  );
};

export default AutoComplete;
