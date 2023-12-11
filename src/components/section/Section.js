import Plate from "../../svg/chris-ralston-09HGdZzkP-Q-unsplash 1.svg"
import {Container, Row, Col} from 'react-bootstrap';
import "./section.scss"

const Section = () => {
    return (
    <Container>
        <Row>
          <Col>
            <h1 className="mt-5">Cooking Made Fun<br></br>and Easy: Unleash<br></br>Your Inner Chef</h1>
            <p>Discover more than <span>10,000 recipes</span> in your hand with thebest recipe. Help you to find the easiest way to cook.</p>
            <button type="button" class="btn btn-warning btn-lg mt-3">Explore Recipes</button>
            </Col>
            <Col className='plate'>
              <img src={Plate}/>
            </Col>
        </Row>
    </Container>
    );
};
export default Section;