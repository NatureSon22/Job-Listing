const FilterButton = ({name, setFilter}) => {

    const handleClick = (val) => {
        setFilter(prev => prev.filter(item => item !== val));
    }

    return (
        <div className="filter-button">
            <p>{name}</p>
            <button onClick={() => handleClick(name)}>
                <img src="images\icon-remove.svg" alt="" />
            </button>
        </div>
    )
}

export default FilterButton