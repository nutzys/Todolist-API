import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function fetchTodos(page: number, limit: number){
    return axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`).then(res => res.data);
}

interface TodoItem {
    id: number,
    title: string,
    completed: boolean,
    userId: number
}

interface TodoParams {
    page: number,
    limit: number,
}

export const GetTodos = ({page, limit}: TodoParams) => 
    useQuery<TodoItem[]>({
        queryKey: [page, limit],
        queryFn: () => fetchTodos(page, limit),
})