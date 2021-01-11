import React from 'react'

const MainNews = props => {
    const isMainNews = props.isMainNews;
    const isSecondNews = props.isSecondNews;
    const isThirdNews = props.isThirdNews;

    return (
        <>
            <div className="d-flex row">

                <div className="col-sm-12 col-md-6 card">

                    <div className="conatiner mt-2 mb-2">

                        <div>
                            <p className="text-muted h5 ">{props.newsTag}</p>
                        </div>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                        <a className="text-decoration-none" href={props.newsPath}>

                            {isMainNews ? <div className="">
                                <h2 className="text-primary mb-4">{props.newsTitle}</h2>
                                <p className="text-muted">{props.newsIntro}</p>
                            </div> : ''}

                        </a>

                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />

                    </div>

                </div>

                <div className="d-md-none mt-3" />

                <div className="col-sm-12 col-md-6">

                    <div className="d-flex row">

                        <div className="col-12">

                            {isSecondNews ? <a href={props.newsPath}>
                                <div className="card bg-dark text-white">
                                    <img src={props.newsImg} className="card-img" alt="..." />
                                    <div className="card-img-overlay">
                                        <h5 className="card-title">{props.newsTitle}</h5>
                                    </div>
                                </div>
                            </a> : ''}


                        </div>

                        <div className="mt-3" />

                        <div className="col-12">

                            {isThirdNews ? <a href={props.newsPath}>
                            <div className="card bg-dark text-white">
                                <img src={props.newsImg}
                                className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">{props.newsTitle}</h5>
                                </div>
                            </div>
                            </a> : ''}

                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default MainNews
