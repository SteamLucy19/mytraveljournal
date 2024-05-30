import React from "react";
import Navbar from "./Navbar";
import Location from "./Location";
import data from "./data"

export default function App() {
    const locations = data.map(item => {
        return (
            <Location
                key={item.id}
                img={item.coverImg}
                location={item.location}
                map={item.map}
                mapurl={item.mapurl}
                name={item.name}
                date={item.date}
                info={item.info}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <section className="location--list">
                {locations}
            </section>
        </div>
    )
}
