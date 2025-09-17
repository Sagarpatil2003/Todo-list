import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FETCH_MATCHES_REQUEST, FETCH_MATCHES_SUCCESS, FETCH_MATCHES_FAILURE, toggleFavorite, setSearch, setFilters } from "./redux/actions"
import MatchCard from "./components/MatchCard"
import SearchBar from "./components/SearchBar"
import FilterPanel from "./components/FilterPanel"

export default function App() {
  const dispatch = useDispatch()
  const { isLoading, isError, footballMatches, searchQuery, filters } = useSelector(state => state)

  useEffect(() => {
    dispatch({ type: FETCH_MATCHES_REQUEST })
    fetch("https://jsonmock.hackerrank.com/api/football_matches?page=2")
      .then(res => res.json())
      .then(data => dispatch({ type: FETCH_MATCHES_SUCCESS, payload: data.data }))
      .catch(() => dispatch({ type: FETCH_MATCHES_FAILURE }))
  }, [dispatch])

  const filtered = footballMatches.filter(m =>
    (m.team1.toLowerCase().includes(searchQuery.toLowerCase()) ||
     m.team2.toLowerCase().includes(searchQuery.toLowerCase()) ||
     m.venue.toLowerCase().includes(searchQuery.toLowerCase()) ||
     m.date.includes(searchQuery)) &&
    (!filters.team || m.team1 === filters.team || m.team2 === filters.team) &&
    (!filters.date || m.date === filters.date)
  )

  return (
    <div className="p-6">
      <header className="bg-blue-600 text-white p-4 text-xl font-bold">
        Football Match Tracker
      </header>
      <SearchBar />
      <FilterPanel />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error fetching matches</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filtered.map(match => <MatchCard key={match.match_id} match={match} />)}
      </div>
    </div>
  )
}
