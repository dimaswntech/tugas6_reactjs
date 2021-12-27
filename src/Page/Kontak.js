import React from "react";
import Header from "./Header";
import "../Style/kontak.css";

class Kontak extends React.Component{
    render(){
        return(
            <div id="kontak_bg">
                <Header />
                <div className="kontak">
                    <h3>
                        Jl. Kenangan Jl. Kenangan Jl. Kenangan Jl. Kenangan Jl. KenanganJl. KenanganJl. Kenangan
                    </h3>
                    <p>089876856785</p>
                </div>
            </div>
        );
    }
}
export default Kontak;