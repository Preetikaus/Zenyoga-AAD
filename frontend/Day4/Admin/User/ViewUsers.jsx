import { Trash, FileEdit } from 'lucide-react';
import Layout from '../Layout/Layout';


const ViewUsers = () => {


  return (
    <>
      <Layout />
      <div className='mainx'>
        <div className='shadow bg-white data-table-container'>
          <table className='data-table'>
            <thead className='data-table-thead shadow'>
              <tr>

                <th>
                  Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Role
                </th>
                <th>
                  Phone
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
    
                <tr>
                  <td>Preetika</td>
                  <td>preetika@gmail.com</td>
                  <td>Student</td>
                  <td>8628468293</td>
                  <td>
                    <button className='data-btn-mini bg-white shadow' ><FileEdit color="#0040ff" /></button>
                    <button className='data-btn-mini bg-white shadow' ><Trash color="#ff0000" /></button>
                  </td>
                </tr>
                <tr>
                  <td>Priyanka</td>
                  <td>priyanka@gmail.com</td>
                  <td>Student</td>
                  <td>78625492</td>
                  <td>
                    <button className='data-btn-mini bg-white shadow' ><FileEdit color="#0040ff" /></button>
                    <button className='data-btn-mini bg-white shadow' ><Trash color="#ff0000" /></button>
                  </td>
                </tr>
                <tr>
                  <td>Nivedhita</td>
                  <td>nivedhita@gmail.com</td>
                  <td>Student</td>
                  <td>893659323</td>
                  <td>
                    <button className='data-btn-mini bg-white shadow' ><FileEdit color="#0040ff" /></button>
                    <button className='data-btn-mini bg-white shadow' ><Trash color="#ff0000" /></button>
                  </td>
                </tr>
                <tr>
                  <td>Puja</td>
                  <td>puja564@gmail.com</td>
                  <td>Student</td>
                  <td>7839573092</td>
                  <td>
                    <button className='data-btn-mini bg-white shadow' ><FileEdit color="#0040ff" /></button>
                    <button className='data-btn-mini bg-white shadow' ><Trash color="#ff0000" /></button>
                  </td>
                </tr>
                <tr>
                  <td>Joan Grace</td>
                  <td>joan@gmail.com</td>
                  <td>Student</td>
                  <td>78264992462</td>
                  <td>
                    <button className='data-btn-mini bg-white shadow' ><FileEdit color="#0040ff" /></button>
                    <button className='data-btn-mini bg-white shadow' ><Trash color="#ff0000" /></button>
                  </td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}
export default ViewUsers;