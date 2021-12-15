import React from 'react';
import styles from './Appointment.module.css';
import AppointmentDetail from './AppointmentDetail';

const Appointment = () => {
    return (
        <main
            className={`${'col-md-9 ms-sm-auto col-lg-10 px-md-4'} ${styles.main}`}
            // style={{ background: '#fafafa', height: '100%' }}
        >
            <h5 className="mt-4">Appointments</h5>
            <div className={`${'table-responsive mt-4'} ${styles.table_container}`}>
                <table className={`${'table  table-sm table-striped'} ${styles.main_table}`}>
                    <thead className={`${styles.table_head}`}>
                        <tr>
                            <th scope="col">Appointment ID</th>
                            <th scope="col">Patient Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Number</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Appointment Date</th>
                            <th scope="col">Appointment Time</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <AppointmentDetail />
                </table>
            </div>
        </main>
    );
};

export default Appointment;
