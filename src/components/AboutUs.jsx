import React from "react";
import ImageIndonesia from '../assets/indonesia.png';
import Sovel from '../assets/shovel.png';
import People from '../assets/Frame 5.png';
import Seven from '../assets/7+.png';


export default function AboutUs () {
    return(
        <section>
            <div>
                <div className="h-auto w-screen bg-slate-300 front-semibold">
                    <div className="flex justify-center">
                        <p className="text-4xl py-10">
                            About Us
                        </p>
                    </div>
                    <div className="flex justify-around flex-wrap pb-20 text-xl font-semibold">
                        <div className=" h-auto w-[320px] grid justify-items-center py-10 mt-8">
                            <img src={ImageIndonesia} alt="Indonesia" className=" w-[15rem]"/>
                            <div className="pt-14">Available throughout Indonesia</div>
                        </div>
                        <div className="h-auto w-[320px] grid justify-items-center  py-10">
                            <img src={Sovel} alt="Indonesia" className=" h-40 w-[11rem]" />
                            <div className="pt-8">Over 1,000 partners</div>
                        </div>
                        <div className="h-auto w-[320px] grid justify-items-center  py-10">
                            <img src={People} alt="Indonesia" className=" h-40 w-[11rem]" />
                            <div className="pt-8">Over 100,000 users</div>
                        </div>
                        <div className="h-auto w-[320px] grid justify-items-center  py-10">
                            <img src={Seven} alt="Indonesia" className=" h-40 w-[15rem]" />
                            <div className="pt-8">Over 7 years experiecne</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}