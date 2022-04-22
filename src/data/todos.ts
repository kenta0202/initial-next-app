type Todo = {
  id: string;
  content: string;
  done: boolean;
};

export const todosData: Todo[] = [
  {
    id: '1',
    content: 'Create react appをインストールする',
    done: true,
  },
  {
    id: '2',
    content: 'JSON Server仮のAPIを作成する',
    done: false,
  },
  {
    id: '3',
    content: 'Chakra UIをインストールする',
    done: true,
  },
];
