import UserLeftbar from './UserLeftbar';
import '../../assets/css/User.css'
import '../../assets/css/Table.css'

const Instituitions = () => {

    return (
        <>
           
            <UserLeftbar />
            <div className='mainx'>
                <div className='titlebar'>
                    Available Instituitions
                </div>
                <div className='shadow bg-white data-table-container'>
                    <table className='data-table'>
                        <thead className='data-table-thead shadow'>
                            <tr>
                                <th>S.No</th>
                                <th>Course Available</th>
                                <th>Instructor</th>
                                <th>Instituition Name</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                   <th>1.</th>
                                <th>Vinyasa Flow Yoga Certification Course</th>
                                <th>Rishi Patel</th>
                                <th>SKCT</th> 
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Instituitions;