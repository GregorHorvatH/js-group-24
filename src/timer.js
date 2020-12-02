import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import './timer.css';

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: false,
  onclick: null,
  showDuration: '300',
  hideDuration: '1000',
  timeOut: '2000',
  extendedTimeOut: '1000',
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

const template = (value) => `
<div class="timer card">
<button class="btn btn-danger stop" disabled>Stop</button>
<span class="value">${value}</span>
<button class="btn btn-success start">Start</button>
</div>
`;

class Timer {
  constructor({ selector, value = 0 }) {
    this.container = document.querySelector(selector);
    this.value = value;

    // первый рендер содержимого
    this.container.insertAdjacentHTML('beforeend', template(this.value));

    // ссылочки для управления значением и кнопками
    this.refs = {
      value: this.container.querySelector('.value'),
      stopButton: this.container.querySelector('.stop'),
      startButton: this.container.querySelector('.start'),
    };

    // подписка на нажатия пользователя на кнопки
    this.refs.stopButton.addEventListener('click', this.stop.bind(this));
    this.refs.startButton.addEventListener('click', this.start.bind(this));
  }

  /**
   * Выводит данные с памяти в DOM
   */
  render() {
    this.refs.value.textContent = this.value;
  }

  /**
   * Запускает таймер и меняет аттрибуты кнопкам
   */
  start() {
    // если таймер запущен, тогда на выход
    if (this.timerId) {
      return;
    }

    // запускаем таймер и сохраним ИД для будущего
    this.timerId = setInterval(() => {
      this.value += 1;

      this.render();
    }, 500);

    // меняем аттрибуты чтобы пользователь понимал какая кнопка доступна
    this.refs.stopButton.removeAttribute('disabled');
    this.refs.startButton.setAttribute('disabled', true);

    toastr.success('The timer is started!');
  }

  /**
   * Останавливает таймер и меняет аттрибуты кнопкам
   */
  stop() {
    // если таймер НЕ запущен, тогда нечего тут делать
    if (!this.timerId) {
      return;
    }

    clearInterval(this.timerId);
    this.timerId = null; // очистка ИД таймера чтобы в следующий раз могли его запустить

    // меняем аттрибуты чтобы пользователь понимал какая кнопка доступна
    this.refs.startButton.removeAttribute('disabled');
    this.refs.stopButton.setAttribute('disabled', true);

    toastr.error('The timer is stopped!');
  }
}

export default Timer;
