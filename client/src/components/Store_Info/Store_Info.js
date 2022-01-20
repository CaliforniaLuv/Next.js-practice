import { useState } from "react"
import Image from "next/image";

function Store_Info({disPlay, handleModal, api_data}) {

    const handleClose = () => {
        handleModal('modal_none')
    }

    return(
        <>
            <div className={`Store_Info_modal ${disPlay}`}>
                <div className="Store_Info_overlay">hello</div>
                <div className="Store_Info_content">
                    <div className="Store_Info_content-box">
                            <Image className="Store_Info_img" src={`${api_data.image}`} 
                            alt="profile" width={1500} height={1500}/>
                        <div className="Store_Info_text-box">
                            <h2>{api_data.name}</h2>
                            <span className='result'></span>
                            
                            <p className="Store_Info_Url">URL 주소: {api_data.url ? <a href={api_data.url}>{api_data.url}</a> : "공개된 주소가 없습니다."}</p>
                            
                            
                            
                        </div>
                        <div className="Store_Info_closeBox">
                            <div onClick={handleClose}>
                                x
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Store_Info