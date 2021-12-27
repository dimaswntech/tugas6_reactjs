import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Menu_Home from "./Page/Menu_Home";
import Menu_Makanan from "./Page/Menu_Makanan";
import Menu_Minuman from "./Page/Menu_Minuman";
import Kontak from "./Page/Kontak";

const AppRoute = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu_Home />} exact />
                <Route path="/menu_makanan" element={<Menu_Makanan />} />
                <Route path="/menu_minuman" element={<Menu_Minuman />} />
                <Route path="/kontak" element={<Kontak />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRoute;