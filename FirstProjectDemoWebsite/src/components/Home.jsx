import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle, AiFillAmazonCircle, AiFillYoutube, AiFillInstagram} from "react-icons/ai";
const Home = () => {
  return (
    <>
    <div className='home'>
        <main>
            <h1>TechGuru</h1>
            <p>Solution to all your problems.</p>
        </main>

    </div>

    <div className='home2'>
        <img src={vg} alt="Graphics" />
        <div>
            <p>
                We are your one and only friend for your tech problems you face every day.
                We are leading tech company whose aim is to increase the problem solving ability in children.
            </p>
        </div>
    </div>

    <div className="home3" id='about'>
        <div>
            <h1>
                Who we are?
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae obcaecati perspiciatis nam eveniet odio incidunt doloribus est temporibus sunt assumenda harum libero ducimus nobis possimus repellat repellendus aperiam eos deleniti nulla, voluptate veniam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam debitis quia est, nulla voluptates numquam tenetur magnam, labore quo eveniet quasi corrupti totam velit vero error ex cum fugit sapiente, ratione optio laudantium? Assumenda non necessitatibus aspernatur, explicabo ex inventore ullam, praesentium quidem sint veniam sequi saepe? Id unde nam ex iusto, molestiae sint.  
            </p>
        </div>
    </div>
    <div className="home4" id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{animationDelay:"0.3s"}}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{animationDelay:"0.7s"}}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style={{animationDelay:"1s"}}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{animationDelay:"1.3s"}}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home