import React from 'react';
import '../assets/styles/SwitchTabSection.css'

const SwitchTabSection = () => {
  return (
     <>
     
     <section id="tabs" className="tabs section">
                <div className="container">
                    <ul
                    className="nav nav-tabs row  d-flex"
                    data-aos="fade-up"
                    data-aos-delay={100}
                    >
                    <li className="nav-item col-3">
                        <a
                        href='/'
                        className="nav-link active show"
                        data-bs-toggle="tab"
                        data-bs-target="#tabs-tab-1"
                        >
                        <i className="bi bi-binoculars" />
                        <h4 className="d-none d-lg-block">Modi sit est dela pireda nest</h4>
                        </a>
                    </li>
                    <li className="nav-item col-3">
                        <a
                        href='/'
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#tabs-tab-2"
                        >
                        <i className="bi bi-box-seam" />
                        <h4 className="d-none d-lg-block">Unde praesenti mara setra le</h4>
                        </a>
                    </li>
                    <li className="nav-item col-3">
                        <a
                        href='/'
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#tabs-tab-3"
                        >
                        <i className="bi bi-brightness-high" />
                        <h4 className="d-none d-lg-block">Pariatur explica nitro dela</h4>
                        </a>
                    </li>
                    <li className="nav-item col-3">
                        <a
                        href='/'
                        className="nav-link"
                        data-bs-toggle="tab"
                        data-bs-target="#tabs-tab-4"
                        >
                        <i className="bi bi-command" />
                        <h4 className="d-none d-lg-block">Nostrum qui dile node</h4>
                        </a>
                    </li>
                    </ul>
                    {/* End Tab Nav */}
                    <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
                    <div className="tab-pane fade active show" id="tabs-tab-1">
                        <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                            <h3>
                            Voluptatem dignissimos provident quasi corporis voluptates sit
                            assumenda.
                            </h3>
                            <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                            <li>
                                <i className="bi bi-check2-all" />
                                <spab>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </spab>
                            </li>
                            <li>
                                <i className="bi bi-check2-all" /> 
                                <span>
                                Duis aute irure dolor in reprehenderit in voluptate velit
                                </span>
                                .
                            </li>
                            <li>
                                <i className="bi bi-check2-all" /> 
                                <span>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate trideta
                                storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </span>
                            </li>
                            </ul>
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum
                            </p>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                            <img src="images/working-1.jpg" alt="" className="img-fluid" />
                        </div>
                        </div>
                    </div>
                    {/* End Tab Content Item */}
                    <div className="tab-pane fade" id="tabs-tab-2">
                        <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                            <h3>
                            Neque exercitationem debitis soluta quos debitis quo mollitia
                            officia est
                            </h3>
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum
                            </p>
                            <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                            <li>
                                <i className="bi bi-check2-all" />{" "}
                                <span>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check2-all" />{" "}
                                <span>
                                Duis aute irure dolor in reprehenderit in voluptate velit.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check2-all" />{" "}
                                <span>
                                Provident mollitia neque rerum asperiores dolores quos qui a.
                                Ipsum neque dolor voluptate nisi sed.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check2-all" />{" "}
                                <span>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate trideta
                                storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </span>
                            </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                            <img src="images/working-2.jpg" alt="" className="img-fluid" />
                        </div>
                        </div>
                    </div>
                    {/* End Tab Content Item */}
                    <div className="tab-pane fade" id="tabs-tab-3">
                        <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                            <h3>
                            Voluptatibus commodi ut accusamus ea repudiandae ut autem dolor ut
                            assumenda
                            </h3>
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum
                            </p>
                            <ul>
                            <li>
                                <i className="bi bi-check2-all" />{" "}
                                <span>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check2-all" />{" "}
                                <span>
                                Duis aute irure dolor in reprehenderit in voluptate velit.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check2-all" />{" "}
                                <span>
                                Provident mollitia neque rerum asperiores dolores quos qui a.
                                Ipsum neque dolor voluptate nisi sed.
                                </span>
                            </li>
                            </ul>
                            <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                            <img src="images/working-3.jpg" alt="" className="img-fluid" />
                        </div>
                        </div>
                    </div>
                    {/* End Tab Content Item */}
                    <div className="tab-pane fade" id="tabs-tab-4">
                        <div className="row">
                        <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0">
                            <h3>
                            Omnis fugiat ea explicabo sunt dolorum asperiores sequi inventore
                            rerum
                            </h3>
                            <p>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum
                            </p>
                            <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                            <li>
                                <i className="bi bi-check2-all" />{" "}
                                <span>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check2-all" />{" "}
                                <span>
                                Duis aute irure dolor in reprehenderit in voluptate velit.
                                </span>
                            </li>
                            <li>
                                <i className="bi bi-check2-all" />{" "}
                                <span>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate trideta
                                storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                </span>
                            </li>
                            </ul>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 text-center">
                            <img src="images/working-4.jpg" alt="" className="img-fluid" />
                        </div>
                        </div>
                    </div>
                    {/* End Tab Content Item */}
                    </div>
                </div>
            </section>

     
     
     </>
  )
}

export default SwitchTabSection