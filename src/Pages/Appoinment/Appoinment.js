import React from 'react';
import { useHistory } from 'react-router';

const Appoinment = () => {

    const history = useHistory();
    const handleAppoinment = () => {
        alert("Appoinment submitted successfully!!!!!!");
        history.push('/home');
    }
    return (
        <div>
            <div className="banner-form">
                <h3>Make An Appointment</h3>
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="row mbb-3">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Name" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Your Email" />
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Phone Number" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="form-group">
                                        <select>
                                            <option value="">Select Service</option>
                                            <option value="">Kidney Transplant</option>
                                            <option value="">Heart Transplant</option>
                                            <option value="">Cardiac Surgery</option>
                                            <option value="">Spine Surgery</option>
                                            <option value="">Radiology</option>
                                            <option value="">Breast Cancer</option>
                                            <option value="">Liver Transplant & HPB Surgery</option>
                                            <option value="">Dental Sciences</option>
                                            <option value="">Cardiology</option>
                                            <option value="">Plastic Surgery</option>

                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="form-group">

                                        <input id="datetime-local" type="datetime-local" className="form-control" placeholder="Date" />

                                    </div>


                                </div>
                                <div className="col-lg-6 col-sm-6">
                                    <div className="form-group">
                                        <select>
                                            <option value="">Choose Doctor</option>
                                            <option value="">PROF. DR. SHAMIM AHMED</option>
                                            <option value="">Prof. Dr.Mohammad Sharifuzzaman</option>
                                            <option value="">Dr. M. Nuruzzaman Khan</option>
                                            <option value="">Lt. Col.(Dr.) A.H. Abedur Reza(Rtd.)</option>
                                            <option value="">Professor Dr, Nasir Uddin</option>
                                            <option value="">Prof. Dr. Nazir Ahmed</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="form-group">
                                    <textarea name="message" className="form-control mb-3 mt-2" placeholder="Type Appointment Note"></textarea>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="banner-btn">
                                    <button type="submit" onClick={handleAppoinment} className="default-btn" style={{ backgroundColor: 'green', color: 'white', padding: '5px', borderRadius: '5px' }}>Make An Appointment</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appoinment;
