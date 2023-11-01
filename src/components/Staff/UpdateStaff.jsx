import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
function UpdateStaff() {
    const navigate = useNavigate();
    const { username } = useParams();
    const [staffId, setStaffId] = useState("");
    const [staffUsername, setStaffUsername] = useState("");
    const [staffPassword, setStaffPassword] = useState("");
    const [staffName, setStaffName] = useState("");
    const [staffAddress, setStaffAddress] = useState("");
    const [staffRole, setStaffRole] = useState("");
    const [staffSalary, setStaffSalary] = useState("");

    useEffect(() => {
        if (username) {
            axios
                .get("http://localhost:8081/hotel/staff/" + username)
                .then((response) => {
                    setStaffId(response.data.id);
                    setStaffUsername(response.data.username);
                    setStaffPassword(response.data.password);
                    setStaffName(response.data.name);
                    setStaffAddress(response.data.address); 
                    setStaffRole(response.data.role);
                    setStaffSalary(response.data.salary);
                })
                .catch((error) => console.log(error));
        }
    }, [username]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            id: staffId,
            username: staffUsername,
            password: staffPassword,
            name: staffName,
            address: staffAddress,
            role: staffRole,
            salary: staffSalary,
        };

        axios
            .put("http://localhost:8081/hotel/staff/update", payload)
            .then((response) => {
                alert("Staff updated successfully");
                navigate("/showStaff");
            })
            .catch((error) => {
                alert("Error while updating the Room");
            });
    };

    return (
        <div className="row justify-content-center pt-4">
            <div className="col-sm-5">
                <h3>Add Staff</h3>
                <div className="card p-3">
                    <div>
                        <div className="form-group">
                            <label htmlFor="staffId">Staff Id: {staffId}</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="staffUsername">Username: {username}</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="staffName">Staff Name: {staffName}</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="staffAddress">Staff Address</label>
                            <input
                                type="text"
                                className="form-control"
                                name="staffAddress"
                                defaultValue={staffAddress}
                                onChange={(e) => setStaffAddress(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label>Staff Role: {staffRole}</label>
                        </div>
                        <div className="form-group">
                            <label htmlFor="staffSalary">Staff Salary</label>
                            <input
                                type="number"
                                className="form-control"
                                name="staffSalary"
                                defaultValue={staffSalary}
                                onChange={(e) => setStaffSalary(e.target.value)}
                            />
                        </div>
                        <div>
                            <button
                                type="button"
                                className="btn btn-dark"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateStaff;
