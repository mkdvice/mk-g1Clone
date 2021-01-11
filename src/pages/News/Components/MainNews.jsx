import React from 'react'

const MainNews = props => {
    return (
        <>
            <div className="d-flex row justify-content-md-evenly justify-content-sm-center">
                {/* Manchete */}
                <div className="col-sm-12 col-md-6 card">
                    <div className="container">
                        <p className="text-muted mt-2">Tag da noticia</p>
                        <div className="align-self-center">
                            <h1 className="text-primary">Titulo da noticia</h1>
                            <p className="text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem molestias nisi nesciunt perferendis, ab dicta repellendus tempore esse accusamus quo! Explicabo ratione, magni iusto iste tenetur animi veniam accusamus placeat.</p>
                        </div>
                    </div>
                </div>
                
                <div className="mt-2 d-md-none"/>

                {/* Outras noticias */}
                <div className="d-flex row col-sm-12 col-md-6">

                    <div className="col-sm-12">
                        <div className="card">
                            <img src="/img/prive.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex row text-light">
                                <h5 className="card-title">Card title</h5>
                                <h1 className="h2">Lorem ipsum dolor sit</h1>
                            </div>
                        </div>
                    </div>

                    <div className="mt-2" />

                    <div className="col-sm-12">
                        <div className="card">
                            <img src="/img/prive.jpg" className="card-img" alt="..." />
                            <div className="card-img-overlay d-flex row text-light">
                                <h5 className="card-title">Card title</h5>
                                <h1 className="h2">Lorem ipsum dolor sit</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainNews
