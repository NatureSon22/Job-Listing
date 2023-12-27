const FilterBox = ({ requirement, setFilter }) => {
    const handleClick = (val) => {
        setFilter(prev => {
            if (!prev.includes(val)) {
                return [val, ...prev]; 
            }
            return prev; 
        });
    }
    

    return (
        <div className="filter-box" onClick={() => handleClick(requirement)}>
            <p>{requirement}</p>
        </div>
    )
}

export default FilterBox 