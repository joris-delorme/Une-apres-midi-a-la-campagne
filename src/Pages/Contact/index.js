import React, { useRef, useState, useEffect } from 'react'
import PagesTransition from '../../Components/PagesTransition'
import {
    GoogleMap,
    useJsApiLoader,
    Marker,
} from "@react-google-maps/api";


const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const [office] =  useState({
        locality: "Anecy",
        postal_code: "74000",
        address_line1: "2 Bd Jacques Replat",
        address_line2: "",
        latitude: 45.90535729075245,
        longitude: 6.11921330830142
    })

    const mapRef = useRef(null);

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyCrZtyKNxerKtAciSQX_ESgVT3QohVSDtk"
    });

    const onLoad = React.useCallback(
        (mapInstance) => {
            const bounds = new window.google.maps.LatLngBounds();
            bounds.extend(
                new window.google.maps.LatLng(
                    office.latitude,
                    office.longitude
                )
            );
            mapRef.current = mapInstance;
            mapInstance.fitBounds(bounds);
        },
        [office]
    );

    return (
        <section className='contact' >
            <div className="contact-info">
                <div className="map">
                    <h2>2 boulevard Jaques replat, 74000 Annecy</h2>
                    {isLoaded &&
                        <GoogleMap
                        zoom={15}
                            mapContainerClassName="c-office-overview__map"
                            onLoad={onLoad}
                        >
                            <Marker
                                key={"1"}
                                position={{
                                    lat: office.latitude,
                                    lng: office.longitude
                                }}
                            />
                        </GoogleMap>
                    }
                </div>

                <div className="tel-hor">
                    <div className="horaire">
                        <h3>Horaires d'ouvertures</h3>
                        <ul>
                            <li>Lundi : Fermé</li>
                            <li>Marid : 9h - 19h</li>
                            <li>Mercredi : 8h15 - 13h</li>
                            <li>Jeudi : 9h - 19h</li>
                            <li>Vendredi : 9h - 19h</li>
                            <li>Samedi : 9h - 16h</li>
                            <li>Dimanche : Fermé</li>
                        </ul>
                    </div>
                    <div className="tel">
                        <h3>Téléphone</h3>
                        <p>04 50 67 49 34</p>
                    </div>
                </div>
            </div>

            <PagesTransition />
        </section >
    )
}

export default Contact