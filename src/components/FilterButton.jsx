import iconremove from '../../images/iconremove.svg'

const FilterButton = ({name, setFilter}) => {

    const handleClick = (val) => {
        setFilter(prev => prev.filter(item => item !== val));
    }

    return (
        <div className="filter-button">
            <p>{name}</p>
            <button onClick={() => handleClick(name)}>
                <img src={iconremove} alt="" />
            </button>
        </div>
    )
}

export default FilterButton