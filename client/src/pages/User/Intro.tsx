import { ShoppingBag, ShoppingBasket, ShoppingCart, Trash } from "lucide-react";

function Intro() {
    return (
        <div
            className="pl-12 pt-12 lg:p-24 w-full h-[100%] lg:h-[850px] bg-cover bg-center bg-no-repeat flex flex-col"
            style={{ backgroundImage: `url('/intro/intro.png')` }}
        >
            <div className="w-full">
                <div className="flex  ">
                    <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px] bg-[#b38c50]  rounded-full flex jusitfy-center items-center">
                        <img className="" src="/intro/logo.png" alt="" />
                    </div>

                    <img className="w-[80px] lg:w-[120px]" src="/intro/title.png" alt="" />
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between lg:justify-end relative">
                {/* Button */}
                <div className="text-white bg-[#b38c50] flex items-center px-3 py-1 rounded-full text-sm sm:text-base sm:px-4 sm:py-2">
  <div className="bg-black rounded-full p-2 mr-2 flex items-center justify-center">
    <ShoppingBasket className="w-4 h-4 sm:w-5 sm:h-5" />
  </div>
  <span>Add to orders</span>
</div>


                {/* Image */}
                <img src="/intro/into-food.png" alt="" className="w-[200px] sm:w-[300px] object-contain" />
            </div>

            <div className="w-full">
                <div className="text-white text-[24px] lg:text-[45px] mt-12">
                    <h1>Where Taste</h1>
                    <h1>Meets Trust</h1>
                    <h1>Every Time</h1>
                </div>
                <h1 className="text-[18px text-[#b38c50] lg:text-[26px]">Event Dining Solutions</h1>
                <button className="text-white rounded-4xl mt-4 border border-white px-4 py-2">Explore More</button>
            </div>
        </div>
    );
}

export default Intro;
