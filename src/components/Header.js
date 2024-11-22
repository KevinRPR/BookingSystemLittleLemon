import React from 'react'
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg'

const Header = () => {
    return(
        <div>
            <header className='header'>
                <section>
                    <div className='banner'>
                        <h2>
                            Little Lemon
                        </h2>
                        <h3>
                            Chicago
                        </h3>
                        <p>
                            We are a family owned Mediterranian restaurant, focused on traditional recipies servred with a modern twist. 
                        </p>
                        <Link to= "/booking"><button aria-label='On Click'>Reserve Table</button></Link>
                       
                    </div>


                    <div className='banner-img'> 
                        <img src={bannerImg} alt='banner image'/>
                    </div>
                </section>
            </header>
        </div>
    );
};
export default Header