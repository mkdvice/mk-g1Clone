import React from 'react'

const NewsPage = props => {
    return (
        <>
            <ul className="list-group list-group-flush ">
                <li className="list-group-item bg-light">

                    <h1 className="h1">{props.title}</h1>
                    <small>{props.date}</small>

                </li>

                <li className="list-group-item bg-light mt-4">

                    <div className="d-flex row justify-content-center">

                        <div className="col-md-6 col-sm-12">
                            <img className="img-fluid" src={props.sourceUrl} alt={props.alt} />
                            <small className="text-muted">{props.alt}</small>

                        </div>


                        <p className="fs-5 mt-3">{props.content}</p>

                    </div>

                </li>

            </ul>
        </>
    )
}

export default NewsPage
