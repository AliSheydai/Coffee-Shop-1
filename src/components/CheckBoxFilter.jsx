import { FILTEROPTIONS } from "../assets/data"
import { UseClearBtnContext } from "../contexts/ClearBtnContext"
import "../css/CheckBox.css"

function CheckBoxFilter({ filterKey }) {

    const { selectedFilters, toggleFilter } = UseClearBtnContext()
const options = FILTEROPTIONS[filterKey] || []

  return (
    <div className="space-y-2">
      {options.map((value, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            type="checkbox"
            id={`${filterKey}-${i}`}
            checked={selectedFilters[filterKey]?.includes(value)}
            onChange={() => toggleFilter(filterKey, value)}
            className="custom-checkbox"
          />
          <label
            htmlFor={`${filterKey}-${i}`}
            className="ml-2 text-sm text-gray-700 cursor-pointer"
          >
            {value}
          </label>
        </div>
      ))}
    </div>
  )
}
export default CheckBoxFilter