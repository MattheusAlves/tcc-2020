import * as React from 'react';
import { Modal, Portal, Text, Button, Provider } from 'react-native-paper';

const MyComponent = () => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);

    const hideModal = () => setVisible(false);

    return (
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
    );
};

export default MyComponent;