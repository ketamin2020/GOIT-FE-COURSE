import {
  atrr,
  createContainer,
  createGalleryItem,
  galleryItem,
} from "./timer-item.js";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  static initTimer(select, target) {
    const c = new CountdownTimer({
      selector: select,
      targetDate: new Date(target),
    });
    c.murkupClock();
    c.timer();
  }

  murkupClock(id) {
    const createContTag = createContainer(this.selector);
    const timerTag = document.querySelector(".timer");
    timerTag.append(...galleryItem);
  }

  timer(targetDate) {
    this.refs = {
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      minutes: document.querySelector('span[data-value="minutes"]'),
      seconds: document.querySelector('span[data-value="seconds"]'),
    };
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let countDown = this.targetDate.getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();
      let distance = countDown - now;

      (this.refs.days.innerText = Math.floor(distance / day)),
        (this.refs.hours.innerText = Math.floor((distance % day) / hour)),
        (this.refs.minutes.innerText = Math.floor((distance % hour) / minute)),
        (this.refs.seconds.innerText = Math.floor(
          (distance % minute) / second
        ));
      if (distance === 0 || distance < 0) {
        clearInterval(x);
      }
    }, second);
  }
}

CountdownTimer.initTimer("#timer-1", "Jul 31, 2021");
