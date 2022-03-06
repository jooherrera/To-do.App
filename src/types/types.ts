export interface ITodoItemProps {
  item: ITodo;
}

export interface ITodoListProps {
  todos: ITodo[];
}

export interface ITodoCreateButtonProps {
  name: string;
}

export interface ITodo {
  id: number;
  text: string;
  completed: boolean;
}

export interface IInputProps {
  placeholder: string;
  isSearch?: boolean;
}
