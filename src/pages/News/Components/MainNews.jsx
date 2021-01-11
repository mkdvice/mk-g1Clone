import React from 'react'

const MainNews = props => {
    const isMainNews = props.isMainNews;
    const isSecondNews = props.isSecondNews;
    const isThirdNews = props.isThirdNews;

    return (
        <>
            <div className="d-flex row justify-content-md-between justify-content-sm-center">
                {/* Manchete */}
                {isMainNews ? <div className="col-sm-12 col-md-6 card">
                    <a className="text-decoration-none" href={props.newsPath}>
                        <div className="container">
                            <p className="text-muted mt-2">{props.newsTag}</p>
                            <div className="align-self-center">
                                <h1 className="text-primary">{props.newsTitle}</h1>
                                <p className="text-muted">{props.newsIntro}</p>
                            </div>
                        </div>
                    </a>
                </div> : ''}

                <div className="mt-2 d-md-none" />

                {/* Outras noticias */}
                <div className="d-flex row col-sm-12 col-md-6">

                    {isSecondNews ? <a href={props.newsPath} className="text-decoration-none">
                        <div className="col-sm-12">
                            <div className="card">
                                <img src={props.newsImg} className="card-img" alt={props.altImg} />
                                <div className="card-img-overlay d-flex row text-light">
                                    <h5 className="card-title">{props.newsTag}</h5>
                                    <h1 className="h2">{props.newsTitle}</h1>
                                </div>
                            </div>
                        </div>
                    </a> : ''}

                    <div className="mt-2" />

                    {isThirdNews ? <a href={props.newsPath} className="text-decoration-none">
                        <div className="col-sm-12">
                            <div className="card">
                                <img src={props.newsImg} className="card-img" alt={props.altImg} />
                                <div className="card-img-overlay d-flex row text-light">
                                    <h5 className="card-title">{props.newsTag}</h5>
                                    <h1 className="h2">{props.newsTitle}</h1>
                                </div>
                            </div>
                        </div>
                    </a> : ''}

                </div>
            </div>
        </>
    )
}

export default MainNews
