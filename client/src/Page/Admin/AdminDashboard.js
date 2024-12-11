import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HeaderAdmin from "../Admin/HeaderAdmin";
import SidebarAdmin from "./SlidebarAdmin";
import ItemProduct from "./TransactionsTable";
import AddProductForm from "./AddItem";
import "bootstrap/dist/css/bootstrap.min.css"
import "../Admin/admincss/Style.css"
import Brand from "./ThuongHieu";
import EditProductForm from "./EditProduct";
import AddBrandForm from "./AddBrand";
import EditBrandForm from "./EditBrand";

const AdminDashboard = () => (
  <BrowserRouter> 
    <div
      className="page-wrapper"
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin6"
      data-sidebartype="full"
      data-sidebar-position="fixed"
      data-header-position="fixed"
    >
      <SidebarAdmin />
      <div className="body-wrapper">
        <HeaderAdmin />
      </div>
      <div className="body-wrapper">
        <div className="container-fluid">
          {/*  Row 1 */}
          <div className="row">
            <Routes>
              <Route path="/Home" element={<ItemProduct/>}></Route>
              <Route path="/add" element={<AddProductForm/>}></Route>
              <Route path="/thuongHieu" element={<Brand/>}></Route>
              <Route path="/edit" element={<EditProductForm/>}></Route>
              <Route path="/addBrand" element={<AddBrandForm/>}></Route>
              <Route path="/editBrand" element={<EditBrandForm/>}></Route>
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </BrowserRouter>
);

export default AdminDashboard;