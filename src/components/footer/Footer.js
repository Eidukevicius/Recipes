import Logo from "../../svg/Vector(2).svg"
import "./footer.scss"

const Footer = ()=>{
    return(
    <footer>
        <div className="container mt-5">
            <img src={Logo}/>
            <a className="navbar-brand mx-2" href="#">Recipedia</a>
        </div>
        <div class="container mt-5 mb-5">
          <div class="row mt-5">
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Menu</h6>
              <ul class="list-unstyled mb-0">   
                <li class="mb-2">Home</li>
                <li class="mb-2">Recipe</li>
                <li class="mb-2">Community</li>
                <li class="mb-2">About Us</li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Categories</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">Breakfast</li>
                <li class="mb-2">Lunch</li>
                <li class="mb-2">Dinner</li>
                <li class="mb-2">Dessert</li>   
                <li class="mb-2">Drink</li>
              </ul>
            </div>
            <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
              <h6 class="text-uppercase font-weight-bold mb-4">Social</h6>
              <ul class="list-unstyled mb-0">
                <li class="mb-2">Instagram</li>
                <li class="mb-2">Twitter</li>
                <li class="mb-2">Youtube</li>
                <li class="mb-2">Facebook</li>
              </ul>
            </div>
            <div class="col-lg-4 col-md-6">
              <h3>Sign up for our newsletter</h3>
					    <div className='d-flex mt-5'>
						  <input type='text' className='border-0' placeholder='Your Email Address' />
						  <button type="button" class="btn btn-warning btn-lg">Submit</button>
            </div>
            </div>
          </div>
        </div>
    </footer>
    );
}

export default Footer