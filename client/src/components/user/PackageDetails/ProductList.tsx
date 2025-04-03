import DatePicker from "../../ui/form/date-picker";

const ProductList = () => {
    // Sample product data
    const products = [
        { id: 1, name: "Grilled Salmon", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2" },
        { id: 2, name: "Vegetable Pasta", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c" },
        { id: 3, name: "Chicken Tikka", image: "https://images.unsplash.com/photo-1501200297109-5c939d111d82" },
        { id: 4, name: "Caesar Salad", image: "https://images.unsplash.com/photo-1546793665-c74683f339c1" },
        { id: 5, name: "Chocolate Mousse", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb" },
        { id: 6, name: "Fresh Juice", image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a" },
    ];

    const handleRemove = (productId:any) => {
        console.log(`Removing product ${productId}`);
        // Add your removal logic here
    };

    return (
        <div className="container mx-auto px-4 py-8">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                    >
                        <div className="h-48 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                        </div>
                        <div className="p-4 flex-grow">
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                        </div>
                        <div className="px-4 pb-4">
                            <button
                                onClick={() => handleRemove(product.id)}
                                className="w-full py-2 bg-[#BD9455] text-white hover:bg-red-100 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
