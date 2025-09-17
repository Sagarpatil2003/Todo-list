import { useDispatch, useSelector } from "react-redux"
import { toggleFavorite } from "../redux/actions"

export default function MatchCard({ match }) {
  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)
  const isFav = favorites.some(f => f.match_id === match.match_id)

  return (
    <div className="p-4 border rounded-lg shadow-md flex flex-col gap-2">
      <h2 className="font-bold">{match.team1} vs {match.team2}</h2>
      <p>Venue: {match.venue}</p>
      <p>Date: {match.date}</p>
      <p>Winner: {match.winner}</p>
      <button
        onClick={() => dispatch(toggleFavorite(match))}
        className={`px-3 py-1 rounded-lg ${isFav ? 'bg-red-500 text-white' : 'bg-gray-200'}`}
      >
        {isFav ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  )
}
