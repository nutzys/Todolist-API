import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function fetchUsers(userId: number){
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/todos`).then(res => res.data);
}

interface TodoItem {
    id: number,
    title: string,
    completed: boolean,
    userId: number
}

interface TodoParams {
    userId: number,
}

export const GetUsers = ({userId}: TodoParams) => useQuery<TodoItem[]>({
    queryKey: [userId],
    queryFn: () => fetchUsers(userId)
})