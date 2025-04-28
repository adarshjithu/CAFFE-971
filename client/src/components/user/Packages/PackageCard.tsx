import { useNavigate } from "react-router";
import { findProductCount } from "../../../utils/util";
import { ShoppingCartIcon } from "lucide-react";

const ProductCard = ({ data, title = "Deluxe Dinner Buffet" }: any) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${data?._id}`)}
      className="cursor-pointer w-full sm:max-w-[280px] bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
    >
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden group">
        <img
          src={data?.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-t-lg"
          loading="lazy"
        />
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
          {data?.name}
        </h3>

        {/* Price & Quantity Section */}
        <div className="mb-2 p-2 border border-gray-200 dark:border-gray-600 rounded-lg">
          <div className="flex flex-col">
            <p className="text-lg font-bold text-gray-700 dark:text-green-400">
              AED {data?.price}
              <span className="text-xs font-normal text-gray-500 dark:text-gray-300"> / plate</span>
            </p>
            <span className="text-xs text-gray-500 dark:text-gray-400">Min 10 - Max 1500</span>
          </div>
        </div>

        {/* Categories & Items */}
        <div className="flex flex-col gap-1 text-gray-700 dark:text-gray-300 text-xs">
          <div className="flex items-center gap-1">
            <ShoppingCartIcon className="w-3 h-3" />
            <span>
              {Object?.keys(data?.products).length} Categories &{" "}
              {findProductCount(data?.products)} Items
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;