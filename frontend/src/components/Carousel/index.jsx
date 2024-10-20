import "./style.css";
import shelter from "/assets/1.jpg?url";
import shelterCats from "/assets/2.jpg?url";
import shelterPuppies from "/assets/3.jpg?url";
import cat from "/assets/4.jpg?url";
import puppies from "/assets/5.jpeg?url";
import catInGrass from "/assets/6.jpg?url";
import momWithHerPuppies from "/assets/7.jpg?url";
import shelterCat from "/assets/8.jpg?url";
import womanWithDogs from "/assets/9.jpg?url";
import cats from "/assets/10.jpeg?url";

const Carousel = () => {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="2000">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src={shelter} class="d-block w-100" alt="shelter" />
            </div>
            <div class="carousel-item">
                <img src={shelterCats} class="d-block w-100" alt="shelterCats" />
            </div>
            <div class="carousel-item">
                <img src={shelterPuppies} class="d-block w-100" alt="shelterPuppies" />
            </div>
            <div class="carousel-item">
                <img src={cat} class="d-block w-100" alt="cat" />
            </div>
            <div class="carousel-item">
                <img src={puppies} class="d-block w-100" alt="puppies" />
            </div>
            <div class="carousel-item">
                <img src={catInGrass} class="d-block w-100" alt="catInGrass" />
            </div>
            <div class="carousel-item">
                <img src={momWithHerPuppies} class="d-block w-100" alt="momWithHerPuppies" />
            </div>
            <div class="carousel-item">
                <img src={shelterCat} class="d-block w-100" alt="shelterCat" />
            </div>
            <div class="carousel-item">
                <img src={womanWithDogs} class="d-block w-100" alt="womanWithDogs" />
            </div>
            <div class="carousel-item">
                <img src={cats} class="d-block w-100" alt="cats" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
  );
};

export default Carousel;