
window.onload = function () {
    let sub = document.getElementById("sub"),
        click = document.getElementById("click"),
        hard = document.getElementById("hard");

    function postMsg() {
        let xhr = new XMLHttpRequest(),
            name = document.getElementsByTagName("input")[0].value,
            tel = document.getElementsByTagName("input")[1].value;
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText);
            }
        };
        let msg = "name=" + name + ",tel=" + tel;
        xhr.open('post', 'http://127.0.0.1:3000/', true);

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(msg);
    }

    function getMsg() {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText);
            }
        };
        xhr.open('get', 'http://127.0.0.1:3000', true);

        xhr.send(null);
    }

    function putMsg(){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText);
            }
        };
      
        xhr.open('put', 'http://127.0.0.1:3000/', true);

        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send('hello');

    }
    sub.addEventListener('click', postMsg, false);
    click.addEventListener('click', getMsg, false);
    hard.addEventListener('click',putMsg,false);
};
