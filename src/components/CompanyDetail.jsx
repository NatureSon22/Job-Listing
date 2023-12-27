const CompanyDetail = ({ details : { company, logo, isNew, isFeatured, position, postedAt, contract,
    location } }) => {
    return (
        <div className="company-detail">
            <div className="company-img">
                <img src={logo} alt="" />
            </div>

            <div className="company-info">
                <div className="main-label">
                    <p>{company}</p>
                    <div className="main-feature">
                        {
                            isNew &&  <div><p>NEW!</p></div>
                        }

                        {
                            isFeatured &&  <div><p>FEATURED</p></div>
                        }
                    </div>
                </div>
                
                <p className="company-position">{position}</p>

                <div className="company">
                    <p>{postedAt}</p>
                    <p>&#8226;</p>
                    <p>{contract}</p>
                    <p>&#8226;</p>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetail