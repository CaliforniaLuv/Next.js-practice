import React from "react";
import Link from "next/link"

function Header() {


    return (
        <>
            <header className="Header_container">
                <div className="Header_left"> 
                    korean
                </div>
                <nav className="Header_center">  
                    <h2 value="About" className="Header_center_text_L">
                        <Link href="/">
                            <a>About</a>
                        </Link>
                    </h2>
                    <h2 value="Store" className="Header_center_text_R">
                        <Link href="/store">
                            <a>Store</a>
                        </Link>
                    </h2>                         
                </nav>
                <div className="Header_right">
                <Link href="/">
                    <div className="Header_right_box">
                        <h1>
                            YUMMY FOOD
                        </h1>
                    </div>
                </Link>
                </div>    
            </header>    
        </>
    )
}

export default Header