import {
  SET_CHALLENGE,
  SET_FILTERED_CHALLENGE,
  SET_SELECTED_CHALLENGE,
} from '../actions/type';

const initialState = {
  challenge: [],
  filteredChallenge: [],
  selectedChallenge: {},
};

const _challengeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHALLENGE:
      return {...state, challenge: action.payload};

    case SET_FILTERED_CHALLENGE:
      return {...state, filteredChallenge: action.payload};

    case SET_SELECTED_CHALLENGE:
      return {...state, selectedChallenge: action.payload};

    default:
      return state;
  }
};

export default _challengeReducer;
