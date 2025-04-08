import PackageTable from "../../components/admin/packages/PackageTable"
import PageBreadcrumb from "../../components/common/PageBreadCrumb"


function Packages() {
  return (
    <div className="w-full">
      <PageBreadcrumb pageTitle="Packages"/>
      <PackageTable/>
    </div>
  )
}

export default Packages
