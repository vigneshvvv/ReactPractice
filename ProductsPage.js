import turbo from './turbo.jpg';
import GTR from './GTR.jpg';
import supra from './supra.jpg';
import supraNew from './supra2.jpg';


function ProductsPage(){
    return (
        <>
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={GTR} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={supraNew} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className="w-100 overflow-auto">
  <div className="d-flex flex-nowrap p-3">
    <div className="card flex-shrink-0 me-3" style={{ width: "18rem" }}>
      <img src={turbo} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Turbo Charger</h5>
        <p className="card-text text-break">
          Turbo charger for Nissan GTR 
        </p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    {/* repeat more cards */}
    <div className="card flex-shrink-0 me-3" style={{ width: "18rem" }}>
      <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text text-break">Another example card with wrapping text inside.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
       <div className="card flex-shrink-0 me-3" style={{ width: "18rem" }}>
      <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text text-break">Another example card with wrapping text inside.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        <div className="card flex-shrink-0 me-3" style={{ width: "18rem" }}>
      <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text text-break">Another example card with wrapping text inside.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        <div className="card flex-shrink-0 me-3" style={{ width: "18rem" }}>
      <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text text-break">Another example card with wrapping text inside.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
        <div className="card flex-shrink-0 me-3" style={{ width: "18rem" }}>
      <img src="https://via.placeholder.com/400x200" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text text-break">Another example card with wrapping text inside.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    {/* ...add more cards the same way */}
  </div>
</div>

        </>
    );
}
export default ProductsPage;