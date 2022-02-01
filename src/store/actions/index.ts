import { ActionType } from "../action-types";


interface SearchReposAction {
  type: ActionType.SEARCH_REPOS;
}

interface SearchReposSuccessAction {
  type: ActionType.SEARCH_REPOS_SUCCESS;
  payload: string[];
}

interface SearchReposFailureAction {
  type: ActionType.SEARCH_REPOS_FAILURE;
  payload: string | null;
}

export type Action = SearchReposAction | SearchReposSuccessAction | SearchReposFailureAction;