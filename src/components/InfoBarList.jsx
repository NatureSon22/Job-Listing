import InfoBar from "./InfoBar";

const InfoBarList = ({ filter, arr, setFilter }) => {
    
    return (
        <div className={`infobar-list ${filter.length == 0 ? 'pad-top' : '' }`}>
            {
                arr.map((data, idx) => <InfoBar key={idx} index={idx} data={data} setFilter={setFilter} ></InfoBar>)
            }
        </div>
    )
}

export default InfoBarList;