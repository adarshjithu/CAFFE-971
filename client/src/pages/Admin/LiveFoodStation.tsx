import LiveFoodStationTable from "../../components/admin/foodstation/FoodStationTable"
import PageBreadcrumb from "../../components/common/PageBreadCrumb"

function LiveFoodStation() {
  return (
    <div className="w-full">
        <PageBreadcrumb pageTitle="Live Food Station"/>
        <LiveFoodStationTable/>
      
    </div>
  )
}

export default LiveFoodStation
