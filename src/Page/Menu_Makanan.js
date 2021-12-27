import React from "react";
import Header from "./Header";
import DaftarMakanan from "../Lib/DaftarMakanan";

class Menu_Makanan extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <h3>
                    Daftar Makanan Favourite
                </h3>
                <table style={{ width: "100%" }}>
                    <tbody>
                        <tr>
                            {DaftarMakanan.map((data, index) => {
                                return (
                                        <td key={index}>
                                            <center>
                                                <img src={data.img} alt="Produk Makanan" width="150" height="100"></img>
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
export default Menu_Makanan;