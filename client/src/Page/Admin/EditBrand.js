
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EditBrandForm = () => {
  // Trạng thái của các trường trong form
  const [productName, setProductName] = useState('');
  const [productBrand, setProductBrand] = useState('');
  const [productDescription, setProductDescription] = useState('');

  // Xử lý khi người dùng gửi form
  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý gửi form ở đây
    console.log({
      productName,
      productBrand,
      productDescription,
    });
  };

  return (
    <div className="row">
      {/* Khu vực thêm sản phẩm */}
      <div className="col-lg-12 d-flex align-items-stretch">
        <div className="card w-100">
          <div className="card-body p-4">
            <h5 className="card-title fw-600 mb-4">Sửa thương hiệu</h5>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="productName" className="form-label fw-600">ID Thương hiệu</label>
                <input
                  type="text"
                  className="form-control"
                  id="productName"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  placeholder="nhâp id"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="productBrand" className="form-label fw-600">Thương hiệu</label>
                <select
                  className="form-select"
                  id="productBrand"
                  value={productBrand}
                  onChange={(e) => setProductBrand(e.target.value)}
                >
                  <option value="">Chọn thương hiệu</option>
                  <option value="1">Thương hiệu A</option>
                  <option value="2">Thương hiệu B</option>
                  <option value="3">Thương hiệu C</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="productDescription" className="form-label fw-600">Mô tả</label>
                <textarea
                  className="form-control"
                  id="productDescription"
                  rows="4"
                  value={productDescription}
                  onChange={(e) => setProductDescription(e.target.value)}
                  placeholder="Nhập mô tả chi tiết"
                />
              </div>
              <div className="d-flex justify-content-end">
                <Link to="/Home" className='btn btn-danger'>Quay về</Link>
                <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBrandForm;
