import React from 'react'
import { Link } from 'react-router-dom'

const EditContact = () => {
    return (

        <div className='container mt-3'>
            <h1>Editar Contacto</h1>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Name</span>
                <input type="text" className="form-control" placeholder="Edit Your Name Here" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Address</span>
                <input type="text" className="form-control" placeholder="Edit Your Address Here" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Phone</span>
                <input type="text" className="form-control" placeholder="Edit Your Phone Here" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Email</span>
                <input type="text" className="form-control" placeholder="Edit Your Email Here" aria-label="Username" aria-describedby="basic-addon1" />
            </div>

            <Link to="/">
                <button type="button" className="btn btn-secondary mx-2">Go Back</button>
            </Link>

        </div>

    )
}

export default EditContact
