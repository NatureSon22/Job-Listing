import FilterButton from "./FilterButton"

const FilterBar = ({ filter, setFilter }) => {

    const handleClick = () => {
        setFilter([]);
    }

    return (
        <div className="filter-bar">
            <div className="filter-div">
                {
                    filter.map((name, key) => <FilterButton key={key} name={name} setFilter={setFilter}></FilterButton>)
                }
            </div>

            <button className="filter-clear" onClick={handleClick}>Clear</button>
        </div>
    )
}

export default FilterBar