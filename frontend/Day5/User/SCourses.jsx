
import UserLeftbar from './UserLeftbar';

const Orders = () => {

    return (
        <>
           
            <UserLeftbar />
            <div className='mainx'>
                <div className='titlebar'>
                    Course History
                </div>
                <div className='shadow bg-white data-table-container'>
                    <table className='data-table'>
                        <thead className='data-table-thead shadow'>
                            <tr>
                                <th>Date</th>
                                <th>Course Name</th>
                                <th>Instructor</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                   <th>12.03.2023</th>
                                <th>Vinyasa Flow Yoga Certification Course</th>
                                <th>Rishi Patel</th>
                                <th>200</th> 
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Orders;