import {Container, Row, Col} from 'react-bootstrap';
import Image1 from "../../svg/image 8.svg"
import Image2 from "../../svg/image 11.svg"
import Image3 from "../../svg/image 7.svg"
import Image4 from "../../svg/image 10.svg"
import Image5 from "../../svg/image 6.svg"
import Image6 from "../../svg/image 9.svg"
import "./recipes.scss"

const Recipes = ()=>{
    return(
    <Container>
      <Row>
        <Col>
          <h2 className="mt-5">Discover, Create, Share</h2>
          <p>Check our most popular recipes of this week</p>
          </Col>
          <Col>
           <div className='d-flex justify-content-end'>
                <button type="button" class="btn btn-warning btn-lg mt-5">See all</button>
            </div>
          </Col>
      </Row>
      <div class="container mt-5">
         <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="card border-0 shadow rounded-lg mx-3 mt-5">
                  <img src={Image1}/>
                <div className='mx-3'>
                  <h4>Creamy Salad</h4>
                  <p><a href=''>View Recipe</a></p>
                </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card border-0 shadow rounded-lg mx-3 mt-5">
                  <img src={Image2}/>
                <div className='mx-3'>
                  <h4>Tofu Tomatoes Soup</h4>
                  <p><a href=''>View Recipe</a></p>
                </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card border-0 shadow rounded-lg mx-3 mt-5">
                  <img src={Image3}/>
                <div className='mx-3'>
                  <h4>Crunchy Potatoes</h4>
                  <p><a href=''>View Recipe</a></p>
                </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card border-0 shadow rounded-lg mx-3 mt-5 mb-5">
                  <img src={Image4}/>
                <div className='mx-3'>
                  <h4>Mushroom Soup</h4>
                  <p><a href=''>View Recipe</a></p>
                </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="card border-0 shadow rounded-lg mx-3 mt-5 mb-5">
                  <img src={Image5}/>
                <div className='mx-3'>
                  <h4>Raspberry Pancake</h4>
                  <p><a href=''>View Recipe</a></p>
                </div>
               </div>
            </div>
            <div class="col-lg-4 col-md-6">
               <div class="card border-0 shadow rounded-lg mx-3 mt-5 mb-5">
                  <img src={Image6}/>
                <div className='mx-3'>
                  <h4>Beef Teriyaki</h4>
                  <p><a href='#'>View Recipe</a></p>
                </div>
               </div>
            </div>
         </div>
      </div>
    </Container>
    );
}       

export default Recipes