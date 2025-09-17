import axios from "axios"

export const FETCH_MATCHES_REQUEST = "FETCH_MATCHES_REQUEST"
export const FETCH_MATCHES_SUCCESS = "FETCH_MATCHES_SUCCESS"
export const FETCH_MATCHES_FAILURE = "FETCH_MATCHES_FAILURE"
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE"
export const SET_SEARCH = "SET_SEARCH"
export const SET_FILTERS = "SET_FILTERS"

const API_URL = "https://jsonmock.hackerrank.com/api/football_matches?page=2"

export const fetchMatches = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_MATCHES_REQUEST })
    try {
      const res = await axios.get(API_URL)
      dispatch({ type: FETCH_MATCHES_SUCCESS, payload: res.data.data })
    } catch (err) {
      dispatch({ type: FETCH_MATCHES_FAILURE })
    }
  }
}

export const toggleFavorite = (match) => ({ type: TOGGLE_FAVORITE, payload: match })
export const setSearch = (query) => ({ type: SET_SEARCH, payload: query })
export const setFilters = (filters) => ({ type: SET_FILTERS, payload: filters })
