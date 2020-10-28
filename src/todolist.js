class TodoList {
  items = [];

  showTodos() {
    console.log(this.items);
  }

  addTodo(text) {
    this.items.push({
      id: uuid.v4(),
      isDone: false,
      text,
    });
  }

  toggleTodo(id) {
    this.items = this.items.map(item =>
      item.id === id ? { ...item, isDone: !item.isDone } : item,
    );
  }

  removeTodo(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  /**
   * Sort the items
   * @param {string} direction ASC, DESC
   */
  sortTodos(direction = 'ASC') {
    this.items.sort((obj1, obj2) => {
      if (obj1.text < obj2.text) {
        return direction === 'DESC' ? 1 : -1;
      }
      if (obj1.text > obj2.text) {
        return direction === 'DESC' ? -1 : 1;
      }
      return 0;
    });
  }
}

const todoList = new TodoList();

todoList.addTodo('Картошка'); // 0
todoList.addTodo('Морква'); // 1
todoList.addTodo('Капуста'); // 2
todoList.addTodo('Колбаса');

const idForToggle = todoList.items[2].id;
todoList.toggleTodo(idForToggle);
todoList.toggleTodo(idForToggle);
todoList.toggleTodo(idForToggle);

const idForRemove = todoList.items[3].id;
todoList.removeTodo(idForRemove);

todoList.sortTodos('DESC');
todoList.showTodos();
