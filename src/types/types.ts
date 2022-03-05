export interface ITodoItemProps {
  text: string;
}

export interface ITodoListProps {
  children: any;
}

export interface ITodoCreateButtonProps {
  sign: string;
}

export interface ITodo {
  text: string;
  completed: boolean;
}
