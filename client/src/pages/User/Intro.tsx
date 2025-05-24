import { ShoppingBasket } from "lucide-react";

function Intro() {
    return (
        <div className="w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col" style={{ backgroundImage: `url('/intro/intro.png')` }}>
            <div className="w-full h-35% flex flex-row justify-between position-relative">
                <div>
                    <div className="flex lg:p-24 p-12 ">
                        <div className="bg-[#b38c50]  rounded-full flex jusitfy-center items-center">
                            <img src="/intro/logo.png" alt="" />
                        </div>

                        <img src="/intro/title.png" alt="" />
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    {/* <div className="flex justify-center items-center p-4 rounded-full bg-[#b38c50] h-[50px] text-white">
                        <div className="bg-[black] rounded-full p-2">
                            <ShoppingBasket />
                        </div>
                        <span className="text-white">Add to order</span>
                    </div>
                    <img src="/intro/into-food.png" alt="" className="translate-x-1/2 md:translate-x-0" /> */}
                </div>
            </div>
            <div className="w-full h-[65%]"></div>
        </div>
    );
}

export default Intro;
