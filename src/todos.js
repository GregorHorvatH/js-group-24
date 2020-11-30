const getTodosMarkup = () => `
<form class="form-inline">
  <div class="form-group mb-2">
    <label for="staticEmail2" class="sr-only">Enter todo</label>
    <input
      type="text"
      class="form-control"
      id="staticEmail2"
      name="input"
    />
  </div>
  <button type="submit" class="btn btn-primary mb-2">
    Confirm identity
  </button>
</form>

<div class="list-group">
</div>
`;

const getItemMarkup = (value) => `
<span href="#" class="list-group-item list-group-item-action">${value}</span>
`;

class Todos {
  constructor({ selector }) {
    this.container = document.querySelector(selector);

    // первый рендер
    this.container.insertAdjacentHTML('beforeend', getTodosMarkup());

    // ссылочки для управления формой и списком
    this.refs = {
      form: this.container.querySelector('.form-inline'),
      list: this.container.querySelector('.list-group'),
    };

    // подписка на отправку формы
    this.refs.form.addEventListener('submit', this.handleSubmit.bind(this));

    this.items = []; // список элементов
    this.loadData(); // загружаем данные с localStorage
  }

  /**
   * Выводит данные с памяти в DOM
   */
  render() {
    // я ленивый, поэтому полная очистка списка методом удаления с DOM :)
    this.refs.list.innerHTML = '';

    // генерируем новый список с памяти в DOM
    this.refs.list.insertAdjacentHTML(
      'beforeend',
      this.items.map((value) => getItemMarkup(value)).join(''),
    );
  }

  /**
   * Загрузка данных с localStorage
   */
  loadData() {
    // если произойдёт ошибка, то программа не упадёт
    try {
      // читаем данные с localStorage и преобразуем с текста в исходную форму
      const items = JSON.parse(localStorage.getItem('todos')) || [];

      this.items = items;
      this.render();
    } catch (error) {
      // этот кусок выполнится при возникновении ошибки
      console.log('MY ERROR!!!!!', error.message);
      console.dir(error);
      localStorage.removeItem('todos');
    }
  }

  /**
   * Сохранение данных в localStorage
   * - сначала преобразуем массив в текст
   * - потом записываем с ключем "todos"
   */
  saveData() {
    localStorage.setItem('todos', JSON.stringify(this.items));
  }

  /**
   * Добавляет новый элемент в список
   * @param {string} text
   */
  addItem(text) {
    this.items.push(text); // добавить новый элемент в список
    this.render(); // обновить DOM
    this.saveData(); // сохранить данные в localStorage
  }

  /**
   * ОБработчик отправки формы
   * @param {object} browser event
   */
  handleSubmit(e) {
    e.preventDefault();

    this.addItem(e.target.elements.input.value); // добавить новый элемент в список
    e.target.elements.input.value = ''; // очистка поля ввода
  }
}

export default Todos;
