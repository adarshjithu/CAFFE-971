import { useNavigate } from "react-router";
import { findProductCount } from "../../../utils/util";
import { ShoppingCartIcon, UsersIcon } from "lucide-react";

const ProductCard = ({ data, title = "Deluxe Dinner Buffet" }: any) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/product")}
      className="cursor-pointer w-full sm:max-w-[320px] bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative h-64 w-full overflow-hidden group">
        <img
          src={data?.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Info Section */}
      <div className="p-5">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
          {data?.name}
        </h3>
        <p className="text-gray-500 dark:text-gray-300 text-sm mb-3 line-clamp-2">
          {data?.description}
        </p>

        <div className="flex flex-col gap-2 text-gray-700 dark:text-gray-300 mb-3">
          <div className="flex items-center gap-2 text-sm">
            <UsersIcon className="w-4 h-4" />
            <span>
              Serves {data?.minQuantity}-{data?.maxQuantity} guests
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <ShoppingCartIcon className="w-4 h-4" />
            <span>
              {Object?.keys(data?.products).length} Categories &{" "}
              {findProductCount(data?.products)} Items
            </span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex justify-between items-center pt-3 border-t border-gray-100 dark:border-gray-600">
          <p className="text-2xl font-bold text-green-700 dark:text-green-400">
            AED {data?.price}
            <span className="text-sm font-normal text-gray-500 dark:text-gray-300"> / plate</span>
          </p>
          <button
            className="bg-[#BD9455] hover:bg-green-700 text-white px-3 py-2 text-sm font-semibold rounded-lg transition-all active:scale-95"
            aria-label={`Order ${title}`}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
