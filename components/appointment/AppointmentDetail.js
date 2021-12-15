import React from 'react';
import styles from './Appointment.module.css';

const AppointmentDetail = () => {
    return (
        <tbody className={styles.table_body}>
            <tr>
                <td>
                    <div className="mt-2">ape833</div>
                </td>
                <td>
                    <div className={`${'d-flex'} ${styles.cols}`}>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                fill="currentColor"
                                className={`${'bi bi-person-circle'} ${styles.avatar_icon}`}
                                viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                <path
                                    fillRule="evenodd"
                                    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                                />
                            </svg>
                        </div>
                        <span className="ms-3">Denise Stevens</span>
                    </div>
                </td>
                <td>
                    <div className="mt-2">42</div>
                </td>
                <td>
                    <div className="mt-2">47238471842</div>
                </td>
                <td>
                    <div className="mt-2">Henry Daniels</div>
                </td>
                <td>
                    <div className="mt-2">Cardiology</div>
                </td>
                <td>
                    <div className="mt-2">30 Dec 2021</div>
                </td>
                <td>
                    <div className="mt-2">10:00am - 11:00am</div>
                </td>
                <td>
                    {/* <div className="mt-2">three dot icon</div> */}
                    <small style={{ color: '#7f8c8d', cursor: 'pointer' }}>
                        <div className="btn-group">
                            <button
                                type="button"
                                className={`${'btn dropdown-toggle'} ${styles.dropdown}`}
                                data-bs-toggle="dropdown"
                                aria-expanded="false">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-three-dots-vertical"
                                    viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                                </svg>
                            </button>
                            <ul
                                className={`${'dropdown-menu dropdown-menu-end'} ${
                                    styles.dropdown_menu
                                }`}>
                                <li>
                                    <button className={styles.dropdown_item} type="button">
                                        Edit
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className={styles.dropdown_item}
                                        data-bs-toggle="modal"
                                        data-bs-target="#staticBackdrop"
                                        type="button">
                                        Delete
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </small>
                </td>
            </tr>
            <tr>
                <td>1,001</td>
                <td>random</td>
                <td>data</td>
                <td>placeholder</td>
                <td>text</td>
            </tr>
        </tbody>
    );
};

export default AppointmentDetail;
