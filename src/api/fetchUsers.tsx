import axios from "axios";

export default function fetchUsers(userId: number){
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`).then(res => res.data);
}