import React from 'react';
import Table from 'react-bootstrap/lib/Table'
import { useSelector } from 'react-redux'

const ContactTable = () => {
    const contactsData = useSelector(state => state.allContacts.contacts);

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Extension</th>
                        <th>Type</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Description</th>
                        <th>Date Created</th>
                        <th>Active</th>


                    </tr>
                </thead>
                <tbody>
                    {contactsData && contactsData.map((contact, index) => (
                        <tr key={index}>
                            <td>{contact.number}</td>
                            <td>{contact.extension}</td>
                            <td>{contact.type}</td>
                            <td>{contact.city}</td>
                            <td>{contact.state}</td>
                            <td>{contact.desc}</td>
                            <td>{contact.dateCreated}</td>
                            <td>{contact.active}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ContactTable;