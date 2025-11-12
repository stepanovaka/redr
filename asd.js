function find_edit(){
    const secondname_node  = document.getElementById('secondname')
    console.log(secondname_node.innerText)
    secondname_node.innerHTML="<b>Stepanova</b>"
    const name_node  = document.getElementById('name')
    console.log(name_node.innerText)
    name_node.innerHTML="<b>Ksenia</b>"
    const date_node  = document.getElementById('date')
    console.log(date_node.innerText)
    date_node.innerHTML="<b>07.08.2006</b>"
}

const node_for_click = document.getElementById("click")
node_for_click.addEventListener("click",find_edit)