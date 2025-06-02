import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // if using react-router

function Success() {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center p-6 rounded-2xl">
        <CheckCircle className="w-16 h-16 mx-auto text-white" />
        <h2 className="text-5xl font-bold text-[#B38C50] mt-4">Thank you!</h2>
        <p className="mt-2 text-xl text-white">Your order is confirmed</p>
        <p className="mt-1 text-xl text-[#15C48F]">Enjoy our service</p>
        <button
          onClick={handleBackHome}
          className="mt-6 px-6 py-2 rounded bg-[#B38C50] text-white font-semibold hover:bg-[#8a6f3f] transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default Success;
