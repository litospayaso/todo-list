export interface ItodoList {
    title: string;
    id:string;
    todos: todoElement[];
}

interface todoElement {
    done: boolean;
    text: string;
}