import React from 'react'
import {Card , Button} from 'react-bootstrap'
import image1 from '../../CommonComponent/Assets/kfc.png'
import image2 from '../../CommonComponent/Assets/mc.png'
import image3 from '../../CommonComponent/Assets/hard.png'
import image4 from '../../CommonComponent/Assets/kfc.png'
import "./card.css"



export default function card() {
    return (
      <Card>
  <Card.Body>
  <div class="row">
            <div class="column">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Restuarants</Button>
  </Card.Body>
</Card>
</div>

<div class="column">

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image2} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Restuarants</Button>
  </Card.Body>
</Card>
</div>



<div class="column">

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image3} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Restuarants</Button>
  </Card.Body>
</Card>
</div>


<div class="column">


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Restuarants</Button>
  </Card.Body>
</Card>
</div>



<div class="column">



<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Restuarants</Button>
  </Card.Body>
</Card>

</div>


<div class="column">



<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Restuarants</Button>
  </Card.Body>
</Card>
</div>


<div class="column">



<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Restuarants</Button>
  </Card.Body>
</Card>
</div>

<div class="column">



<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Visit Restuarants</Button>
  </Card.Body>
</Card>
</div>
        </div>
  </Card.Body>
</Card>

    )
}
