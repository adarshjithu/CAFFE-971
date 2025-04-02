
import PackageDetailsHeader from '../../components/user/PackageDetails/PackageDetailsHeader'
import Header from '../../components/user/Header/Header'
import ProductList from '../../components/user/PackageDetails/ProductList'

function PackageDetails() {
  return (
    <div className='w-full h-full'>
      <Header/>
      <PackageDetailsHeader/>
      <ProductList/>
      
    </div>
  )
}

export default PackageDetails
