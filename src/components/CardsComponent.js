import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap'
import background2 from '../asset/gambar-kota.jpg'

const CardsComponent = (props) => {
    return (
        <Card style={{ width: '18rem', marginTop: "20px", marginLeft: '20px' }}>
            <Card.Img variant="top" src={background2} />
            <Card.Body>
                <Card.Title>{props.namaKegiatan}</Card.Title>
                <Card.Text>
                    {props.deskripsi}
                </Card.Text>
                <Button variant="primary">detail</Button>
            </Card.Body>
        </Card>

    )
}
export default CardsComponent