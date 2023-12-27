import InfoBar from "./InfoBar";

const InfoBarList = ({ filter, arr, setFilter }) => {
    
    return (
        <div className={`infobar-list ${filter.length == 0 ? 'pad-top' : '' }`}>
            {
                arr.map((data, key) => <InfoBar key={key} data={data} setFilter={setFilter} ></InfoBar>)
            }
        </div>
    )
}

export default InfoBarList;