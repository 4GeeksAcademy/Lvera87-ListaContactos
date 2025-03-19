import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';

const Contact = () => {
    console.log("Contact component rendered");
    const { store, actions } = useContext(Context)
    const [slug, setSlug] = useState("")


    // useEffect(()=>{
    //actions.getList(slug)
    // },[])

    return (
        <div>
            <nav style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to="/addcontact">
                    <button type="button" className="btn btn-success m-2">
                        Add new contact
                    </button>
                </Link>
            </nav>

            <div className="container border light-subtle rounded shadow-sm my-3 p-3">
                <div className="row align-items-center">
                    <div className="col-3 text-center">
                        <img src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x" alt="Contact" className="img-fluid rounded-circle p-1" style={{ height: "150px", width: "150px", objectFit: "cover" }} />
                    </div>
                    <div className="col-6 d-flex flex-column justify-content-center">
                        <h4 className="card-title"> Mike Anamendolla</h4>
                        <p className="card-text"><i className="fas fa-map-marker-alt"></i>  5842 Hillcrest Rd</p>
                        <p className="card-text"><i className="fas fa-phone"></i>  (870) 288-4149</p>
                        <p className="card-text"><i className="fas fa-envelope"></i>  mike.ana@example.com</p>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-center ">
                        <button type="button" className="m-4" style={{ background: "none", border: "none", padding: 1, cursor: "pointer", fontSize: "24px" }}>
                            <i className="fas fa-edit" style={{ color: 'black' }}></i>
                        </button>


                        <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ background: "none", border: "none", padding: 1, cursor: "pointer", fontSize: "24px" }}>
                            <i className="fas fa-trash-alt" style={{ color: 'black' }}></i>
                        </button>


                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        ...
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15vh", margin:"10px"}}>
                <h4>
                    Search or Create.
                </h4>
                <input style={{display: "flex",margin: "20px"}} value={slug} onChange={(e) => setSlug(e.target.value)} placeholder='Ingrese Su Usuario' />
            </div>

        </div>
    );
};

export default Contact;
