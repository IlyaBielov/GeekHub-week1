document.addEventListener("DOMContentLoaded", () => {

  function getRandomNumberFirst() {
    let num = (Math.random()*100).toFixed();

    setTimeout(() => {
      console.log(num);
    }, 1000);

    return num;
  }

  function getRandomNumberSecond() {
    let num = (Math.random()*100).toFixed();

    setTimeout(() => {
      console.log(num);
    }, 2000);

    return num;
  }

  getRandomNumberFirst();
  getRandomNumberSecond();

});
