import EventDetailsForm from "../../components/user/EventDetails/EventDetailsForm";
import Header from "../../components/user/Header/Header";

function EventDetails() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
            <Header />
            <EventDetailsForm/>
        </div>
    );
}

export default EventDetails;
