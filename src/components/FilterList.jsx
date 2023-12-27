import FilterBox from "./FilterBox"

const FilterList = ({ requirements, setFilter }) => {
    return (
        <div className="filter-list">
            {
                requirements.map((requirement, key) => <FilterBox  key={key} requirement={requirement} setFilter={setFilter} ></FilterBox>)
            }
        </div>
    )
}

export default FilterList