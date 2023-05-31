import React from "react";
import backgroundImage from "../assets/imageone.png";

function Body () {
    return(
        <section className = "h-screen w-full" style = {{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} >
            <div className="h-screen w-screen bg-cover flex items-center justify-end p">
                <p className="text-white font-bold left-1 text-4xl pr-5 md:text-5xl md:pr-20 pt-[20rem] lg:pt-0 ">
                    Have you ever had <br /> trust issues with a <br /> construction worker?
                </p>
            </div>  
        </section>
    )
}

export default Body;