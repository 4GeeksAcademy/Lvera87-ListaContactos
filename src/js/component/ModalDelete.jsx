import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const ModalDelete=({id,name})=>{
     const { store, actions } = useContext(Context);
    return(
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Borrar Contacto</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                </div>
                <div className="modal-body">
                    desea borrar el contacto: <strong>{name}</strong>?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => actions.deleteContact(id, store.slug)}>Borrar</button>
                </div>
            </div>
        </div>
    </div>
    )
}
export default ModalDelete