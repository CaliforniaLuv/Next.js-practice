import React, { useState, useEffect } from "react";
import Store_Info from "../Store_Info/Store_Info";
import Image from "next/image";

function Store_List({api_data}) {
    const [disPlay, setDisPlay] = useState("modal_none")
    const [result, setResult] = useState("")

    const handleModal = (e) => {
        setDisPlay(e)
        handleHtml()
    }


    const handleHtml = () => {
        setResult(document.querySelectorAll('.result'))
        for (let i = 0; i < result.length; i++) {
            result[i].innerHTML = api_data.description.replace(/\n/g, `${'<br/>'}`);
        }
    }

     useEffect(() => {
        handleHtml()
     } , [])

    return(
        <div key={api_data.id}>
            <li className="Store_List_container" onClick={() => handleModal('')}>
                <Image className="Store_List_img" src={api_data.image} alt="profile" width={320} height={320}/>
            </li>
            <Store_Info disPlay={disPlay} handleModal={handleModal} api_data={api_data}/>
        </div>
    )
}

export default Store_List