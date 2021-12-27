import React from "react";
import DaftarMinuman from "../Lib/DaftarMinuman";
import Header from "./Header";

class Menu_Minuman extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h3>Daftar Minuman</h3>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            {DaftarMinuman.map((data, index) => {
                                return (
                                    <td key={index}>
                                        <center>
                                            <img alt="Produk Minuman"
                                                src={data.img}
                                                width="150"
                                                height="100"></img>
                                            <p>{data.NamaMakanan}</p>
                                            <p>Harga : Rp. {data.Harga}</p>
                                        </center>
                                    </td>
                                );
                            })}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Menu_Minuman;