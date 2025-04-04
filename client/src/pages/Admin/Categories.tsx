import CategoryTable from "../../components/admin/category/CategoryTable"
import PageBreadcrumb from "../../components/common/PageBreadCrumb"


function Categories() {
  return (
    <div className="w-full ">
        <PageBreadcrumb pageTitle="Categories"/>
         <CategoryTable/>
    </div>
  )
}

export default Categories
