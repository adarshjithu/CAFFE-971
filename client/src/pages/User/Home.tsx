import { Bell, MapPin, Search } from "lucide-react";
import SearchBar from "../../components/user/Home/Search";
import NotificationComponent from "../../components/user/Notification/NotificationComponent";
import ProfileComponent from "../../components/user/Profile/ProfileComponent";
import { PackageCard } from "../../components/user/Packages/PackageCard";
import { MostRatedProductCard } from "../../components/user/Packages/MostRatedProductCard";


const cardData = [
    { id: 1, title: "Deluxe Package", price: "100 AED" },
    { id: 2, title: "Premium ", price: "100 AED" },
    { id: 3, title: "Standard Package", price: "100 AED" },
    { id: 4, title: "Family Package", price: "100 AED" },
    { id: 5, title: "Budget Package", price: "100 AED" },
];

function Home() {
    return (
        <>
            <div className="lg:ml-24">
                <div className=" flex flex-col-reverse lg:flex-row">
                    <SearchBar />

                    <div className="w-full lg:w-1/2 flex lg:justify-end justify-between mt-6 lg:mb-0 mb-4 lg:mt-0">
                        <ProfileComponent />

                        <div className="mr-4 flex items-center gap-1 text-sm text-gray-700">
                            <MapPin size={16} className="text-[#b38c50]" />
                            <span className="text-white">Jumeirah, Dubai</span>
                        </div>

                        <NotificationComponent />
                    </div>
                </div>

                <div className="w-full flex justify-between mt-6 lg:mt-8">
                    <div className="flex flex-col">
                        <h1 className="text-[26px] text-white">Food Packages</h1>
                        <h3 className="text-[#b38c50]">Min 10 - Max 1500</h3>
                    </div>
                    <h2 className="mr-2 text-[#b38c50] cursor-pointer">See more</h2>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                    {cardData.map((card) => (
                        <PackageCard key={card.id} title={card.title} price={card.price} />
                    ))}
                </div>
                <div className="w-full flex justify-between items-center">

                <h1 className="text-[26px] text-white mt-8 mb-8">Most Rated</h1>
                 <h2 className="mr-2 text-[#b38c50] cursor-pointer">See more</h2>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-12">
                    {[1,1,2,2,3].map((obj:any)=>{
                        return (

                            <MostRatedProductCard key={obj}/>
                        )
                    })}
                </div>
            </div>
        </>
    );
}

export default Home;
