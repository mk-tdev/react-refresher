import { ActionType } from "../action-types";
import { Action } from "../actions";

export interface RepoState {
  repos: string[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  repos: [],
  loading: false,
  error: null,
};

export const reducer = (state: RepoState = initialState, action: Action): RepoState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOS:
      return {
        ...state,
        loading: true,
        error: null,
        repos: [],
      }
    case ActionType.SEARCH_REPOS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        repos: action.payload,
      }
    case ActionType.SEARCH_REPOS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        repos: [],
      }
    default:
      return state;
  }
}