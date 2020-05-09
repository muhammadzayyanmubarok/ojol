import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button, Carousel, Card, Container, Row } from 'react-bootstrap'
import background1 from './asset/gambar-pantai.jpg'
import background2 from './asset/gambar-kota.jpg'
import NavbarComponent from './components/NavbarComponent'
import CardsComponent from './components/CardsComponent'
import axios from 'axios'

function App() {
  const [angka, setAngka] = useState(7)
  const [index, setIndex] = useState(0);
  const [dapatDataDariBackend, setDapatDataDariBackend] = useState([])


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const pengurangan = () => setAngka(angka - 1)
  const penambahan = () => setAngka(angka + 1)
  const penambahanDua = (param) => setAngka(angka + param)
  //data
  const dataCards = [
    { namaKegiatan: 'festival', deskripsi: 'ini kegiatan konser' },
    { namaKegiatan: 'konseer', deskripsi: 'ini kegiatan konser' },

  ]
  const _getDataCards = async () => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/hlmifzi/sharing-react/dataCards');
      console.log(response.data)
      setDapatDataDariBackend(response.data)
    } catch (error) {

    }
  }
  useEffect(() => {
    _getDataCards()
  }, [])
  return (
    <>
      <NavbarComponent />

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 background"
            src={background1}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 background "
            src={background2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Container>
        <Row>
          {
            dapatDataDariBackend.map((v, i) => {
              console.log(v)
              return (

                <CardsComponent
                  background={background2}
                  namaKegiatan={v.namaKegiatan}
                  deskripsi={v.deskripsi}
                  button='detail'
                />
              )
            })
          }
        </Row>
      </Container>
      {/* <div className="google-merah">ini tulisan merah</div>
      <div id="google-hijau">ini tulisan biru</div>

      <div className="google-merah">

        <button onClick={pengurangan}> -</button>
          hasil {angka}
        <button onClick={penambahan}> +</button>
        <button onClick={() => penambahanDua(2)}> +2</button>
      </div> */}
    </>
  );
}
export default App;
