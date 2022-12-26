import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import CustomModal from '../../../components/common/CustomModal'
import axios from "axios"
import { toast } from 'react-toastify'
import { Widget } from '@typeform/embed-react'
import { PopupButton } from '@typeform/embed-react'

// export const EarlyAccess = () => <a href='https://forms.gle/ANagxA5EGGVCGp899' target="_blank" rel="noreferrer" className="btn btn-primary">Get Early Access</a>
export const EarlyAccess = () => (<PopupButton id="ysdQsN5B" className="btn btn-primary">Get Early Access</PopupButton>)

export default function Content() {
    const [state, setState] = useState({
        showModal: false,
        email: '',
        loading: false
    })

    const toggleModal = () => {
        setState({
            ...state, showModal: !state.showModal, email: '', loading: false
        })
    }

    const handleChange = ({ target: { name, value } }) => {
        setState({
            ...state, [name]: value
        })
    }

    const submit = async (e) => {
        e.preventDefault()

    }
    return (
        <div className="content d-flex align-items-center  mx-0 mx-md-4">
            <Container fluid>
                <Row className='top-background'>
                    <Col md="7" className='mx-auto text-center'>
                        <div >
                               <h1 className="font-weight-bolder mb-2 main-text">Get into <span className='text-primary'> tech</span> and <span className='text-primary'>research</span> with experts,<i> fast</i> </h1>
                            <p className="mb-2 text-muted">
                                Hey👋, we are building a community where experts and learners can cowork, <b>1:1 or in groups</b>, to achieve more, together. Request an early access and we'll keep you posted when we launch🚀
                            </p>

                            <EarlyAccess />
                        </div>
                    </Col>
                    
                </Row>
            </Container>
        </div>
    )
}
