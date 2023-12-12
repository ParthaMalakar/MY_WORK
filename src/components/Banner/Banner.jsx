import banner from '../../assets/banner.jpg'

import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div>

            <div id="item1" className="carousel-item w-full">
                <div className="hero max-w-full mx-auto" style={{

                    background: 'rgba(255, 255, 255, 0.7)',

                    backgroundImage: `url(${banner})`,

                    backgroundSize: 'cover',

                    backgroundPosition: 'center',
                    backgroundAttachment:'fixed',

                    backgroundRepeat: 'no-repeat',

                    width: '100%',

                    height: '610px',

                }}>
                    {/* <div className="hero-overlay bg-opacity-75"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-white text-3xl font-bold w-96 md:w-[550px] ">Effortless Parcel Management,
                                Swift Deliveries at Your Fingertips!</h1>
                            <div className="mt-10">
                                <input type="text" className="border-solid border-2 border-[#DEDEDE] bg-[#FFF] py-2 pl-1 w-80" name="text" placeholder="Search our service here...." />
                                <button className="bg-[#FF444A] text-[#FFF] py-[9px] px-7">Search</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='md:flex gap-10'>
                 <div className="max-w-[500px] mt-6 space-y-3">
        <h3 className="text-4xl text-white font-bold">Hi, I  am Partha Malakar</h3>
        <h2 className='text-2xl font-semibold text-white'>MERN Stack developer</h2>
        <p className='text-white p-1'>Basically MERN Stack Developer works for building websites through javascript, react, tailwindCss and backend techs.Also capable of making user friendly websites and bosting users using ability and satisfaction</p>
    
    <button className="btn"> <a href="/Partha Malakar(Resume_).pdf" download="">Download Resume</a> </button>
        </div>
        <div>
        <img className='h-[250px] ml-24 md:ml-0 mt-10 md:mt-0 md:h-[300px] md:rounded-badge md:rounded-b-full md:rounded-l-2xl' src="https://i.ibb.co/VqgKz1m/Microsoft-Teams-image-1.jpg" alt="" />
        </div>
        </div>
</div>
            </div>
        </div>

    );
};

export default Banner;