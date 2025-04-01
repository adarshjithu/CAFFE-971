const ProductCard = () => {
    return (
      <div className="w-full sm:max-w-[280px] bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
        {/* Product Image with Badge */}
        <div className="relative h-60 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt="Wireless Headphones"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
       
        </div>
  
        {/* Product Info */}
        <div className="p-5">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-bold text-gray-900">Wireless Headphones Pro</h3>
            <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
              -15%
            </span>
          </div>
  
          <p className="text-gray-500 text-sm mb-4">
            Premium noise-cancelling with 30hr battery life and deep bass
          </p>
  
          <div className="flex items-center justify-between">
            <div>
              <span className="text-gray-400 line-through text-sm">$229.99</span>
              <p className="text-2xl font-bold text-gray-900">$199.99</p>
            </div>
            
            <button className="bg-gray-900 hover:bg-gray-800 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCard;