import CompanyDetail from "./CompanyDetail"
import FilterList from "./FilterList"
import { IMAGES } from "../data-img"


const InfoBar = ({ index, data: {company, logo, new: isNew, featured: isFeatured, position, role, level, postedAt, contract,
    location, languages, tools}, setFilter}) => {

    const logoImg = IMAGES[index].logo;  
    const details = { 
        company, 
        logo: logoImg,
        isNew,
        isFeatured, 
        position,
        postedAt,
        contract,
        location
    }

    const requirements = [ role, level, ...languages, ...tools ];

    return (
        <div className={`info-bar ${isFeatured ? 'featured' : null }`}>
            <CompanyDetail details={details} ></CompanyDetail>
            <FilterList requirements={requirements} setFilter={setFilter} ></FilterList>
        </div>
    )
}

export default InfoBar;