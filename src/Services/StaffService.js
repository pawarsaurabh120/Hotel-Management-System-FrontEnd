import axios from "axios";

const Staff_API_URL = "http://localhost:8081/hotel/staff"

class StaffService{
    createRoom(staff){
        return axios.post(Staff_API_URL, staff);
    }

    updateRoom(staff){
        return axios.put(Staff_API_URL, staff);
    }

    updateRoomById(staffSalary, status){
        return axios.put(Staff_API_URL + '/' + staffSalary + '/' +status);
    }

    getRoom(){
        return axios.get(Staff_API_URL);
    }

    getRoomById(staffEmailId){
        return  axios.get(Staff_API_URL + '/' + staffEmailId);
    }

    deleteRoom(staffEmailId){
        return axios.delete(Staff_API_URL + '/' + staffEmailId);
    }

}

export default new StaffService();