import {
  FETCH_MATCHES_REQUEST,
  FETCH_MATCHES_SUCCESS,
  FETCH_MATCHES_FAILURE,
  TOGGLE_FAVORITE,
  SET_SEARCH,
  SET_FILTERS
} from "./actions"

const initialState = {
  isLoading: false,
  isError: false,
  footballMatches: [],
  favorites: [],
  searchQuery: "",
  filters: { team: "", date: "", outcome: "" }
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MATCHES_REQUEST:
      return { ...state, isLoading: true }
    case FETCH_MATCHES_SUCCESS:
      return { ...state, isLoading: false, footballMatches: action.payload }
    case FETCH_MATCHES_FAILURE:
      return { ...state, isLoading: false, isError: true }
    case TOGGLE_FAVORITE:
      const exists = state.favorites.find(f => f.match_id === action.payload.match_id)
      return {
        ...state,
        favorites: exists
          ? state.favorites.filter(f => f.match_id !== action.payload.match_id)
          : [...state.favorites, action.payload]
      }
    case SET_SEARCH:
      return { ...state, searchQuery: action.payload }
    case SET_FILTERS:
      return { ...state, filters: { ...state.filters, ...action.payload } }
    default:
      return state
  }
}

export default reducer
