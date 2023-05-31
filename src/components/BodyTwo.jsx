import React from "react";
import imageOne from  "../assets/image2.png";
import imageTwo from "../assets/image3.png";

export default function BodyTwo () {
    return(
        <section>
            <div className="grid grid-rows-4 grid-flow-col bg-black text-white h-[100rem] lg:h-[70rem]">
                <div className="md:row-span-2 bg-white text-black grid content-center pl-7 space-y-10 text-9 font-semibold w-auto pr-7 lg:text-xl">
                    <div>In fact, there are 1.2 million houses in the Greater Jakarta area alone that need repairs every day.</div>
                    <div>And the renovation cost per square meter is 3 million Indonesian Rupiah, with the average house size in the Greater Jakarta area being 21 square meters.</div>
                    <div>It means that there are job opportunities worth 75.6 trillion Indonesian Rupiah every day in the Greater Jakarta area alone.</div>
                </div>
                <div class="md:row-span-2" style={{ backgroundImage: `url(${imageTwo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>

                <div class="md:row-span-2" style={{ backgroundImage: `url(${imageOne})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></div>
                <div class="md:row-span-2 bg-white text-black grid content-center pl-7 space-y-10 text-9 font-semibold w-auto pr-7 lg:text-xl">
                    <div>What if the trust issue can be resolved?</div>
                    <div>What if transparency and trust can be built with the worker?</div>
                    <div>What if we can provide job certainty to the workers?</div>
                    <div>
                        It means that there are job opportunities worth 75.6 trillion Indonesian Rupiah every day in the Greater Jakarta area alone.
                    </div>
                </div>
            </div>
        </section>
    )
}