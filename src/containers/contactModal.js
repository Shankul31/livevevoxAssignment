import React, { useState } from 'react';
import Modal from 'react-bootstrap/lib/Modal'
import ModalTitle from 'react-bootstrap/lib/ModalTitle'
import ModalBody from 'react-bootstrap/lib/ModalBody'
import ModalHeader from 'react-bootstrap/lib/ModalHeader'
import ModalFooter from 'react-bootstrap/lib/ModalFooter'
import Button from 'react-bootstrap/lib/Button'
import '../../src/App.css'
import axios from 'axios'

const ContactModal = ({ showModal, setShowModal, fetchContacts }) => {
    const [state, setState] = useState({
        desc: '',
        numberType: '',
        extenstion: '',
        state: '',
        city: '',
        status: 'active'
    })

    const handleChange = evt => {
        evt.preventDefault();
        let data = { ...state }
        data[evt.target.name] = evt.target.value;
        setState(data)
    }
    console.log('ddd', state);


    const handleSubmit = evt => {
        evt.preventDefault();
        axios.post('http://localhost:3001/save', {
            data: state
        })
            .then(res => {
                setShowModal(false);
                fetchContacts();
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleClose = () => {
        setShowModal(false);
    }

    return (
        <div>
            <Modal show={showModal}>
                <ModalHeader>
                    Phone Number
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={evt => handleSubmit(evt)}>
                        <section className="form-container">
                            <div className="left-input-container">
                                <label>Phone Number</label>
                                <span>1111</span><br />
                                <label>Number Type</label>
                                <select name="numberType" className='select-number' onChange={evt => handleChange(evt)}>
                                    <option value="">Operator</option>
                                    <option value="xxxx">xxxx</option>
                                    <option value="yyyy">yyyy</option>
                                </select>
                                <br />
                                <label>State</label>
                                <select name="state" className='select-state' onChange={evt => handleChange(evt)}>
                                    <option value="Texas">Taxas</option>
                                    <option value="MP">MP</option>
                                    <option value="UP">UP</option>
                                </select>
                                <br />
                                <label>Status</label>
                                <input type="radio" className='active-status' name="status" value="active" />Active
                            <input type="radio" name="status" className='inactive-status' value="inactive" />Inactive<br />
                            </div>
                            <div className="right-input-container">
                                <label>Description</label>
                                <input type="text" className='input-desc' name="desc" value={state.desc} onChange={evt => handleChange(evt)} /><br />
                                <label>Extension</label>
                                <input type="text" className='input-extn' name="extenstion" value={state.extenstion} onChange={evt => handleChange(evt)} /><br />
                                <label>City</label>
                                <input type="text" className='input-city' name="city" value={state.city} onChange={evt => handleChange(evt)} /><br />
                            </div>
                        </section>
                        <Button type="submit" className="save-btn">Save</Button>
                        <Button onClick={handleClose} className="close-btn">Close</Button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default ContactModal;