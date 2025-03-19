import React, { useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';

const AddContact = () => {
    const {actions, store}=useContext(Context)
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    const newContact = (e) => {
        e.preventDefault()
        console.log(name, address, phone, email);
        let nuevoContacto={
            "name": name,
            "phone": phone,
            "email": email,
            "address": address
          }
        actions.addData(nuevoContacto)
    }

    return (
        <div className='container mt-3'>
            <h1>Add Contact</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input value={name} onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="your Name" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Address</span>
                <input value={address} onChange={(e) => setAddress(e.target.value)} type="text" className="form-control" placeholder="your Address" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Phone</span>
                <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" className="form-control" placeholder="your Phone" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="your Email" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <button type="button" onClick={(e) => newContact(e)} className="btn btn-primary">Add Contact</button>
            <Link to="/">
                <button type="button" className="btn btn-secondary mx-2">Go Back</button>


            </Link>
        </div>
    );
};

export default AddContact;
