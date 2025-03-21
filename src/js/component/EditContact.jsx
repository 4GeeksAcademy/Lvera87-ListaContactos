import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';




const EditContact = ({id,contact}) => {

    const { store, actions } = useContext(Context);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const editContact = (e, id) => {
        e.preventDefault();
        //console.log(slug);

        let editContacto = {
            "name": name,
            "phone": phone,
            "email": email,
            "address": address
        };
        actions.editData(editContacto, store.slug, id);
        // setName("");
        // setAddress("");
        // setPhone("");
        // setEmail("");
        // setSuccessMessage("Contacto editado exitosamente!");
        // setTimeout(() => setSuccessMessage(""), 3000); // Ocultar el mensaje después de 3 segundos
    };
    return (

        <div className="modal fade" id="ModalEdit" tabindex="-1" aria-labelledby="ModalEdit" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Editar Contacto</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Address</span>
                        <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="Your Address" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Phone</span>
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" placeholder="Your Phone" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">Email</span>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary" onClick={(e)=>editContact(e,id)} data-bs-dismiss="modal">Editar Contacto</button>
                </div>
            </div>
        </div>
    </div>

    )
}

export default EditContact
