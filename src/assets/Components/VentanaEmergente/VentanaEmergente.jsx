import React from 'react';
import './VentanaEmergente.css';
import Modal from 'react-bootstrap/Modal';


function VentanaEmergente() {

    return (



        <div className="modal show ventana-emergente" style={{ display: 'block', position: 'initial' }} >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title style={{ color: '#00748E' }}>Enviado</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p> Hemos enviado tu formulario a la protectora. Si quieres ponerte en
                        contacto con ellos puedes hacerlo via email o whatsapp</p>
                    <p> Recuerda que la protectora se pondrá en contacto contigo para poder
                        hacer la entrevista personal</p>
                    <img src="https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/CD531259-8B2F-4355-82C1-EAD2A754BB0E.png" alt="" />
                </Modal.Body>

                <Modal.Footer>
                </Modal.Footer>
            </Modal.Dialog>
        </div>

    );
}

export default VentanaEmergente;