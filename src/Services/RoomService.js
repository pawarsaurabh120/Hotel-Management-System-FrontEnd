import axios from "axios";

const Room_API_URL = "http://localhost:8082/hotel/room"

class RoomService{
    createRoom(room){
        return axios.post(Room_API_URL, room);
    }

    updateRoom(room){
        return axios.put(Room_API_URL, room);
    }

    updateRoomById(roomNo,status){
        return axios.put(Room_API_URL + '/' + roomNo + '/' + status);
    }

    getRoom(){
        return axios.get(Room_API_URL);
    }

    getRoomById(roomNo){
        return  axios.get(Room_API_URL + '/' + roomNo);
    }

    deleteRoom(roomNo){
        return axios.delete(Room_API_URL + '/' + roomNo);
    }

}

export default new RoomService();