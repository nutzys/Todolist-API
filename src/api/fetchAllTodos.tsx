import { useQuery } from "@tanstack/react-query";
import axios from "axios"

export default function fetchAllTodos(){
    return axios.get('https://jsonplaceholder.typicode.com/todos').then(res => res.data);
}

export const GetAllTodos = () => useQuery({
    queryKey: ['allTodos'],
    queryFn: () => fetchAllTodos()
})