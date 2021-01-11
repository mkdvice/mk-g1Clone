import React from 'react'

const RegularNews = props => {

    const isSponsored = props.isSponsored

    return (
        <>
            <div className="mt-3 card">
                <div className="d-flex row justify-content-md-evenly justify-content-sm-center align-items-center">
                    <div className="col-sm-12 col-md-4">
                        <a href={props.newsPath}>
                            <img className="img-fluid" src={props.newsImg} alt="" srcSet={props.newsImg} />
                        </a>
                    </div>
                    <div className="col-sm-12 col-md-8">
                        <a className="text-decoration-none" href={props.newsPath}>
                            <div className="container">

                                {isSponsored ? <p><span className="bg-warning text-dark">Anúncio</span></p> : <p className="mt-2 text-muted">{props.newsTag}</p>}

                                {isSponsored ? <h3 className="text-dark">{props.newsTitle}</h3> : <h3 className="text-primary">{props.newsTitle}</h3> }

                                <p className="text-muted">{props.newsIntro}</p>
                                <small className="text-muted mb-2">{props.timePost}</small>
                            </div>
                        </a>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default RegularNews
