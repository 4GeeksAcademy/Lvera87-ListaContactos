import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const AddContact = () => {
    const { actions, store } = useContext(Context);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [slug, setSlug] = useState(store.slug);

    const newContact = (e) => {
        e.preventDefault(); 
       console.log(slug);
       
        let nuevoContacto = {
            "name": name,
            "phone": phone,
            "email": email,
            "address": address
        };
        actions.addData(nuevoContacto,slug);
        setName("");
        setAddress("");
        setPhone("");
        setEmail("");
        setSuccessMessage("Contacto agregado exitosamente!");
        setTimeout(() => setSuccessMessage(""), 3000); // Ocultar el mensaje después de 3 segundos
    };

    return (
        <div className='container mt-3'>
            <h1>Add Contact</h1>
            {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
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

            <button type="button" onClick={(e) => newContact(e)} className="btn btn-primary">Add Contact</button>
            <Link to="/">
                <button type="button" className="btn btn-secondary mx-2">Go Back</button>
            </Link>
        </div>
    );
};

export default AddContact;
