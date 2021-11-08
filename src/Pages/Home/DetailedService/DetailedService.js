import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useService from '../../../hooks/useService';
import './DetailedService.css'

const DetailedService = () => {
    const services = useService();
    const { serviceId } = useParams();

    const history = useHistory();
    const handleReturn = () => {
        history.push('/');
    }
    let matched = {};

    matched = services.find(service => service._id === serviceId)


    return (
        <div>
            {!matched ? <> <Spinner animation="border" variant="danger" /><h1>Wait..It's loading or Go Back to home</h1> </> :
                <div className="detailed-service-container">
                    <div className="detail-card container">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={matched.img} />
                            <Card.Body>
                                <Card.Title>{matched.name}</Card.Title>
                                <Card.Text>
                                    {matched.content}
                                </Card.Text>
                                <h4> Cost: $ {matched.fee}</h4><br />


                                <button style={{ backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '5px' }} onClick={handleReturn}> Return </button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>

            }






        </div>
    );
};

export default DetailedService;