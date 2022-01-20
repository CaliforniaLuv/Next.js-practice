import React, { useEffect, useState } from "react";
import Store_List from "../src/components/Store_List/Store_List";

function Body_Store() {
    const [data, setData] = useState([])

    useEffect(() => {    
        fetch("http://localhost:9000/stores")
        .then((res) => res.json())
        .then((json) => setData(json))
    },[])


    return(
        <> <div className="Body_container">
                <div className="Body_title_container">
                    <span className="Body_title_text">
                        Store
                    </span>
                </div>
                <section className="Body_Store_container">
                    <ul className="Body_Store_box">
                        {data.map((el) => {
                            return <Store_List api_data={el} key={el.id}/>
                        })}
                    </ul>
                </section>
            </div>
        </>
    )
}

export default Body_Store