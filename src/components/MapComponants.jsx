import {GoogleMap , LoadScript , Marker} from "@react-google-maps/api"
export default function MapComponants() {
    const center = {
        lat: -3.745,
        lng: -38.523
    };
    return ( 
        <LoadScript googleMapsApiKey="AIzaSyBlM2Lb2ytBtiT60EvoAVt09Mhv-e2v2pY">
            <GoogleMap
                zoom={10}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    )
}