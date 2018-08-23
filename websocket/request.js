let btng = document.getElementById("btnGet");

function getMsg() {
    let socket = io("http://localhost:8080");
    socket.emit('request',"name");
    socket.on('responce',function(data){
        alert("name is "+data);
    })
}


btng.addEventListener('click', getMsg,false);
