
import Banner from "../../components/user/Banner/Banner";
import Packages from "../../components/user/Packages/Packages";
import Pagination from "../../components/user/Pagination/Pagination";

function Home() {
    return (
        <div className="px-2 lg:px-8">
           
            <Banner />
            <Packages />
            <Pagination/>
        </div>
    );
}

export default Home;
