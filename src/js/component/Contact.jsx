import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import EditContact from './EditContact.jsx';
import ModalDelete from './ModalDelete.jsx';

const Contact = () => {
    const { store, actions } = useContext(Context);
    const [slug, setSlug] = useState("");
    const [showModalEdit, setShowModalEdit]= useState({
        showModal:false,
        id:undefined,
        contact:{}
    })
   
    const [showModalDelete, setShowModalDelete]= useState({
        showModal:false,
        id:undefined,
        name:""
    })

    useEffect(() => {
        actions.getList("Lvera");
        setSlug("Lvera")
    }, []);

    return (
        <div>

            <nav style={{ display: "flex", justifyContent: "flex-end" }}>
                <Link to="/addcontact">
                    <button type="button" className="btn btn-success m-2">
                        Add new contact
                    </button>
                </Link>
            </nav>

            {store.contacts.length > 0 &&
                store.contacts.map((contact, index) => {
                    return (
                        <div key={index} className="container border light-subtle rounded shadow-sm my-3 p-3">
                            <div className="row align-items-center">
                                <div className="col-3 text-center">
                                    <img src="https://cdn.autobild.es/sites/navi.axelspringer.es/public/media/image/2016/09/569465-whatsapp-que-tus-contactos-ponen-rana-perfil.jpg?tf=3840x" alt="Contact" className="img-fluid rounded-circle p-1" style={{ height: "150px", width: "150px", objectFit: "cover" }} />
                                </div>
                                <div className="col-6 d-flex flex-column justify-content-center">
                                    <h4 className="card-title">{contact.name}</h4>
                                    <p className="card-text"><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
                                    <p className="card-text"><i className="fas fa-phone"></i> {contact.phone}</p>
                                    <p className="card-text"><i className="fas fa-envelope"></i> {contact.email}</p>
                                </div>
                                <div className="col-3 d-flex align-items-center justify-content-center">


                                    <button 
                                     data-bs-toggle="modal"
                                     data-bs-target="#ModalEdit"
                                     type="button" 
                                     className="m-4"
                                     onClick={()=>setShowModalEdit({
                                        showModal:true,
                                        id:contact.id,
                                        contact:contact
                                     })} 

                                     style={{ background: "none", border: "none", padding: 1, cursor: "pointer", fontSize: "24px" }}>
                                        <i className="fas fa-edit" style={{ color: 'black' }}></i>
                                    </button>

                                    <button 
                                    type="button" data-bs-toggle="modal" 
                                    data-bs-target="#exampleModal" 
                                    onClick={()=>setShowModalDelete({
                                        showModal:true,
                                        id:contact.id,
                                        name:contact.name
                                     })} 
                                    style={{ background: "none", border: "none", padding: 1, cursor: "pointer", fontSize: "24px" }}>
                                        <i className="fas fa-trash-alt" style={{ color: 'black' }}></i>
                                    </button>
 
                                </div>
                            </div>
                        </div>
                    );
                })
            }

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "15vh", margin: "10px" }}>
                <h4>Search or Create.</h4>
                <input style={{ display: "flex", margin: "20px" }} value={slug} onChange={(e) => setSlug(e.target.value)} placeholder='Ingrese una Agenda' />
                <button type="button" onClick={() => actions.getList(slug)} className="btn btn-primary">
                    Search or Create
                </button>
            </div>
            <EditContact
            id={showModalEdit.id}
            showModal={showModalEdit.showModal}
            contact={showModalEdit.contact}
            onClose={()=>setShowModalEdit({showModal:false})}
            />
            <ModalDelete
            id={showModalDelete.id}
            showModal={showModalDelete.showModal}
            name={showModalDelete.name}
            onClose={()=>setShowModalDelete({showModal:false})}
            />
        </div>
    );
};

export default Contact;
