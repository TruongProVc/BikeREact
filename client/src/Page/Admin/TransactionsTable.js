import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
const ItemProduct = () => (
  <div className="row"> 
  {/* Bảng Recent Transactions */}
  <div className="col-lg-12 d-flex align-items-stretch"> 
    <div className="card w-100"> 
      <div className="card-body p-4"> 
        <h5 className="card-title fw-600 mb-4">Recent Transactions</h5> 
        <div className="table-responsive"> 
          <table className="table text-nowrap mb-0 align-middle"> 
            <thead className="text-dark fs-4"> 
              <tr> 
                <th className="border-bottom-0 text-center"> 
                  <h6 className="fw-600 mb-0">Id</h6> 
                </th>  
                <th className="border-bottom-0 text-center"> 
                  <h6 className="fw-600 mb-0">Tên sản phẩm</h6> 
                </th> 
                <th className="border-bottom-0 text-center"> 
                  <h6 className="fw-600 mb-0">Số tiền</h6> 
                </th> 
                <th className="border-bottom-0 text-center"> 
                  <h6 className="fw-600 mb-0">Thương hiệu</h6> 
                </th> 
                <th className="border-bottom-0 text-center"> 
                  <h6 className="fw-600 mb-0">Tình trạng</h6> 
                </th> 
                <th className="border-bottom-0 text-center"> 
                  <h6 className="fw-600 mb-0">Trạng thái</h6> 
                </th> 
              </tr> 
            </thead> 
            <td colSpan="6">
                  <hr style={{ width: '100%', margin: '10px auto', border: '1px solid #000' }} />
                </td>
            <tbody> 
              <tr> 
                <td className="border-bottom-0"> 
                  <h6 className="fw-600 mb-0">2</h6> 
                </td> 
                <td className="border-bottom-0"> 
                  <h6 className="fw-600 mb-1">David Warner</h6> 
                </td> 
                <td className="border-bottom-0"> 
                  <p className="mb-0 fw-normal">Tech Admin</p> 
                </td> 
                <td className="border-bottom-0"> 
                  <p className="mb-0 fw-normal">Nike</p> 
                </td> 
                <td className="border-bottom-0"> 
                  <div className="d-flex align-items-center justify-content-center gap-2"> 
                    <span className="badge bg-warning rounded-3 fw-600">Pending</span> 
                  </div> 
                </td> 
                <td className="border-bottom-0"> 
                  
                  <Menu/>
                </td> 
              </tr> 
            </tbody> 
          </table> 
        </div> 
      </div> 
    </div> 
  </div> 
</div>
);
const Menu =()=>{
  return(
    <div className="d-flex gap-3 justify-content-center">
    <Link to="/add" className="btn btn-success btn-sm">Thêm</Link> 
    <button className="btn btn-danger btn-sm">Xóa</button> 
    <Link to="/edit" className="btn btn-warning btn-sm">Sửa</Link> 
  </div>
  )
}
export default ItemProduct;
