import {SET_CHALLENGE} from './type';
import {SET_FILTERED_CHALLENGE} from './type';
import {SET_SELECTED_CHALLENGE} from './type';

export const _setChallenge = list => {
  return {
    type: SET_CHALLENGE,
    payload: list,
  };
};

export const _setFilteredChallenge = list => {
  return {
    type: SET_FILTERED_CHALLENGE,
    payload: list,
  };
};

export const _setSelectedChallenge = object => {
  return {
    type: SET_SELECTED_CHALLENGE,
    payload: object,
  };
};
