let heading = document.getElementById("btn_login")
heading.textContent = localStorage.getItem("name") + "'s blogs"

function getUsername(){
    let userName = prompt("请输入用户名：")
    if (!userName || userName === null) {
        getUsername()
    }else{
        localStorage.setItem('name',userName)
        heading.textContent = userName + "'s blogs"
    }
}
