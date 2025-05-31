import { useState } from "react"
import PackagesList from "../../components/user/Home/PackagesList"


function AllPackages() {
    const [page,setPage] = useState(1)
  return (
    <div className=" lg:ml-24">

     <PackagesList search="" packagePage={1} setPackageCount={()=>{}}/>
    </div>
  )
}

export default AllPackages
