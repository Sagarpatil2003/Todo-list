import { useDispatch } from "react-redux"
import { setSearch } from "../redux/actions"

export default function SearchBar() {
  const dispatch = useDispatch()
  return (
    <input
      type="text"
      placeholder="Search by team, venue, date..."
      className="w-full p-2 border rounded-lg"
      onChange={(e) => dispatch(setSearch(e.target.value))}
    />
  )
}
