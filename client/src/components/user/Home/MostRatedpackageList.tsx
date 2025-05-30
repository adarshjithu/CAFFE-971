import { MostRatedProductCard } from "../Packages/MostRatedProductCard";


function MostRatedpackageList() {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-12">
                    {[1, 1, 2, 2, 3].map((obj: any) => {
                        return <MostRatedProductCard key={obj?._id} />;
                    })}
                </div>
  )
}

export default MostRatedpackageList
