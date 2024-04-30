import { Link } from 'react-router-dom';



const Banner = () => {
  return (
<div className='flex flex-col lg:flex-row gap-10 items-center mb-16'>
<div className='mt-10 lg:mb-10 text-center lg:w-1/3 font-bold space-y-3 animate__animated animate__bounceInLeft'>
  <p className='text-[#8F3034] text-2xl'>Welcome at Creative Canvas</p>
      <h3 className="text-3xl pb-4">Express Yourself in Colors</h3>
      <Link to="/about">
      <button className='btn bg-[#8F3034] text-white'>About Us</button>
      </Link>
    </div>
<div className="lg:w-2/3 carousel lg:h-[450px] lg:mt-10 mb-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://imgbb.host/images/Lvdbb.jpeg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://imgbb.host/images/LvPDE.jpeg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
        src="https://imgbb.host/images/LvWdM.jpeg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://imgbb.host/images/LvEaP.jpeg"
          className="w-full"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>

    
</div>
  );
};

export default Banner;
