import PageBreadcrumb from "../../../components/common/PageBreadCrumb"
import UserTable from "../../../components/admin/users/UserTable"


function Userlist() {
  return (
    <div>
     <PageBreadcrumb pageTitle="Users"/>
     <UserTable/>
    </div>
  )
}

export default Userlist
