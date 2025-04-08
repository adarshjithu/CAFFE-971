import ProductTable from "../../components/admin/products/ProductTable"
import PageBreadcrumb from "../../components/common/PageBreadCrumb"
import AddButton from "../../components/ui/button/AddButton"


function Products() {
  return (
    <div className='w-full'>
      <PageBreadcrumb pageTitle="Products"/>
      <ProductTable/>
      
    </div>
  )
}

export default Products
