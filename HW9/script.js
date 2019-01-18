document.addEventListener("DOMContentLoaded", () => {
  function getRandomNumberFirst() {
    let num = (Math.random() * 10 + 1).toFixed();

      setTimeout(() => {
        console.info(`Posts: ${num}`);
      }, 1000);

    return num;
  }

  function getRandomNumberSecond() {
    let num = (Math.random() * 10/2 + 1).toFixed() ;

    setTimeout(() => {
      console.info(`Page: ${num}`);
    }, 2000);

    return num;
  }

  let limitNumber = getRandomNumberFirst();
  let pageNumber = getRandomNumberSecond();

  function getByCallBack() {
    function getPost(callback) {
      let xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         callback(this.responseText);
        }
      };
      xhttp.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
      xhttp.send();
    }

    getPost((callback) => {
      console.log(JSON.parse(callback));
    });
  }

  function getByPromise() {
    return new Promise((resolve, reject) => {
      let xhttp = new XMLHttpRequest();  
      xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          resolve(this.responseText);
        }
      }
      xhttp.onload = function() {
        if (this.status !== 200) {
          reject(this.status);
        }
      }
      xhttp.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
      xhttp.send();
    });
  }

  async function getByAsync() {
    
    try {
      let posts = await getByPromise();
      console.log(JSON.parse(posts));
    } catch {
      throw new Error("Somthing wrong");
    }

  };

  getByCallBack();

  getByPromise()
    .then(resolve => console.log(JSON.parse(resolve)))
    .catch(error => console.error(error));

  getByAsync();
});
