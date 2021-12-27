import React from "react";
import "../Style/header.css"
import Header from "./Header.js";

class Menu_Home extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <br></br>
                <h1>
                    <center>
                        Selamat Datang Di Halaman Utama Masakan Nusantara
                    </center>
                </h1>
                <div className="image_header"></div>
                <br></br>
            </div>
        );
    }
}
export default Menu_Home;