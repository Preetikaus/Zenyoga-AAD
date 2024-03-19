// import { useState, useEffect } from 'react';
// import { getProduct, deleteProduct } from '../../../service/api';
// import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import { Trash, FileEdit, PlusCircle } from 'lucide-react';
import Layout from '../Layout/Layout';
import '../../../assets/css/Table.css'
const ViewProducts = () => {
  // const navigate = useNavigate();
  // const handleEdit = (id) => {
  //   navigate(`/admin/product/edit/${id}`);
  // }
  // const handleDelete = async (id,product) => {
  //   try {
  //     const res = await deleteProduct(id);
  //     console.log(res.status)
  //     if (res.status == 200) {
  //       toast.success(`${product} Deleted Successfully !`, {
  //         position: "bottom-right",
  //         autoClose: 4000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "light",
  //       });
  //     }
  //     fetchProducts();
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  // const routeAdd = () => {
  //   navigate('/admin/product/add')
  // }
  // const routeLogout = () => {
  //   navigate('/')
  // }
  return (
    <>
      <Layout />
      <div className='mainx'>
        <div className='shadow bg-white data-table-container'>
          <table className='data-table'>
            <thead className='data-table-thead shadow'>
              <tr>
                <th>
                  Product ID
                </th>
                <th>
                  Product Name
                </th>
                <th>
                  Product Price
                </th>
                <th>
                  Product Quantity
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                    <td>1.</td>
                    <td>Vinyasa Flow Yoga Certification Course</td>
                    <td>200</td>
                    <td>Rishi Patel</td>
                    <td>
                      <button className='data-btn-mini bg-white shadow' ><FileEdit color="#0040ff" /></button>
                      <button className='data-btn-mini bg-white shadow' ><Trash color="#ff0000" /></button>
                    </td>
                  </tr>
            </tbody>
          </table>
        </div>
        {/* <button onClick={routeLogout} className='route-btn-2 bg-white'><Power color="#ff0000" /></button> */}
        <button className='btn-home'><PlusCircle color="#25db00" /></button>
      </div>

    </>
  )
}
export default ViewProducts;