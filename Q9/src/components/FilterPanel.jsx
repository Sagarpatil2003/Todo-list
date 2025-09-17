import { useDispatch } from "react-redux"
import { setFilters } from "../redux/actions"

export default function FilterPanel() {
  const dispatch = useDispatch()
  return (
    <div className="flex gap-4 my-4">
      <input type="text" placeholder="Filter by team"
        className="p-2 border rounded-lg"
        onChange={(e) => dispatch(setFilters({ team: e.target.value }))} />
      <input type="date"
        className="p-2 border rounded-lg"
        onChange={(e) => dispatch(setFilters({ date: e.target.value }))} />
      <select className="p-2 border rounded-lg"
        onChange={(e) => dispatch(setFilters({ outcome: e.target.value }))}>
        <option value="">All</option>
        <option value="win">Win</option>
        <option value="loss">Loss</option>
        <option value="draw">Draw</option>
      </select>
    </div>
  )
}
