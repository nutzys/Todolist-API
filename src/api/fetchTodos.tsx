import axios from "axios";

export default function fetchTodos(page: number, limit: number){
    return axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`).then(res => res.data);
}