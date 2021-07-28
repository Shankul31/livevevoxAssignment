import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Panel from 'react-bootstrap/lib/Panel'
import ContactTable from './contactTable'
import Tabs from 'react-bootstrap/lib/Tabs'
import Tab from 'react-bootstrap/lib/Tab'
import Button from 'react-bootstrap/lib/Button'
import ContactModal from './contactModal'
import { setContacts } from '../redux/actions/contactActions'
import { useSelector, useDispatch } from 'react-redux'

const ContactPanel = () => {
    const [showModal, setShowModal] = useState(false);
    const contacts = useSelector(state => state)
    const dispatch = useDispatch();

    const fetchContacts = async () => {
        const res = await axios.get('http://localhost:3001/api')
            .catch((err) => {
                console.log('Err', err);
            })
        dispatch(setContacts(res.data));
    }

    useEffect(() => {
        fetchContacts()
    }, [])



    const handleAddClick = () => {
        setShowModal(true);
    }
    return (
        <div>
            <Panel>
                <Panel.Heading>
                    Phone Numbers
                    </Panel.Heading>
                <Panel.Body>
                    {/* <TableContainer /> */}
                    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                        <Tab eventKey={1} title="General">
                            <ContactTable />
                            <Button onClick={handleAddClick}>Add</Button>
                            <Button>Cancel</Button>
                        </Tab>
                        <Tab eventKey={2} title="Change History">
                            Coming Soon.....
                        </Tab>
                    </Tabs>
                    <ContactModal showModal={showModal} setShowModal={setShowModal} fetchContacts={fetchContacts} />
                </Panel.Body>
            </Panel>
        </div>
    );
}

export default ContactPanel;