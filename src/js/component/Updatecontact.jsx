import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';


const Updatecontact = () => {
    return (
        <div>
            <form>
                <fieldset disabled>
                    <legend>Disabled fieldset example</legend>
                    <div className="mb-3">
                        <label htmlFor="disabledTextInput" className="form-label">Disabled input</label>
                        <input type="text" id="disabledTextInput" className="form-control" placeholder="Disabled input" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label">Disabled select menu</label>
                        <select id="disabledSelect" className="form-select">
                            <option>Disabled select</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled />
                            <label className="form-check-label" htmlFor="disabledFieldsetCheck">
                                Can't check this
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </fieldset>
            </form>

        </div>
    )
}

export default Updatecontact
