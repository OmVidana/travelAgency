import "./Hotels.scss";
import NavBar from "../components/global/NavBar";
import OptionField from "../components/Search/OptionField";
import {useState} from "react";
import HotelCard from "../components/hotels/HotelCard";
import {useLocation, useNavigate} from "react-router-dom";
import "./Hotels.scss";


function Hotels() {
    // const [salida, setSalida] = useState('')
    // const [offers, setOffers] = useState([0])
    const {state} = useLocation();
    const { offers } = state;
    return (
        <>
            <NavBar></NavBar>
            <div className="hotels-search-view">
            {offers.map((data, key)=>(
                <HotelCard
                    key={key}
                    name={data.hotel.name}
                    checkIn={data.offers[0].checkInDate}
                    checkOut={data.offers[0].checkOutDate}
                    info={data.offers[0].room.type + ' ' +  data.offers[0].room.typeEstimated.category + ' camas: ' + data.offers[0].room.typeEstimated.beds + ' ' + data.offers[0].room.typeEstimated.bedType}
                    type={true}
                ></HotelCard>
            ))}
        </div>
        </>

    );
}

export default Hotels;
