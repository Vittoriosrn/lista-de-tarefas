// Seleção de alementos
const todo_form = document.querySelector('#todo_form')
const todo_input = document.querySelector('#todo_input')
const todo_list = document.querySelector('#todo_list')
const edit_form = document.querySelector('#edit_form')
const edit_input = document.querySelector('#edit_input')
const filter_select = document.querySelector('#filter_select')
const cancel_edit_btn = document.querySelector('.cancel_edit_btn')

let old_input_value

//------------------ Funções -----------------------//

const save_todo = (text) =>{
    const todo = document.createElement("div")
    todo.classList.add("todo") // Adiciona classe "todo" à div

    const todo_title = document.createElement("h3")
    todo_title.innerText = text
    todo.appendChild(todo_title)

    const done_btn = document.createElement("button");
    done_btn.classList.add("finish_todo")
    done_btn.innerHTML = '<i class="fa-solid fa-check"></i>'  // adiciona o icone
    todo.appendChild(done_btn)

    const edit_btn = document.createElement("button");
    edit_btn.classList.add("edit_todo")
    edit_btn.innerHTML = '<i class="fa-solid fa-pen"></i>'    // adiciona o icone
    todo.appendChild(edit_btn)

    const delete_btn = document.createElement("button");
    delete_btn.classList.add("remove_todo")
    delete_btn.innerHTML = '<i class="fa-solid fa-xmark"></i>' // adiciona o icone
    todo.appendChild(delete_btn)

    todo_list.appendChild(todo)
    todo_input.value = "" //Limpa o input apos enviar o titulo da lista
    todo_input.focus() // Seleciona o input novamento após o envio
} 

const toggleForm = () =>{ // Função para mostrar a edição
    edit_form.classList.toggle("hide")  // toggle serve para trocar adicionar class ou remover
    todo_form.classList.toggle("hide")
    todo_list.classList.toggle("hide")
}

const uptdateTodo = (text) => {
    const todos = document.querySelectorAll(".todo") // Seleciona todos os todos/tarefas

    todos.forEach((todo) => {
        let todo_title = todo.querySelector("h3")

        if(todo_title.innerText === old_input_value){
            todo_title.innerText = text
        }
    })

}

//------------------- Eventos -----------------------//

todo_form.addEventListener("submit", (e) => {  // Adicionar nova tarefa
    e.preventDefault() // Fez com que o evento (e) seja cancelado
    // ^^^^  Faz com que envie o formulário sem recarregar a página

    const input_value = todo_input.value
    if(input_value){ // Verifica se não está vazio e chama a função para salvar a tarefa
        save_todo(input_value)
    }
})

document.addEventListener("click", (e) => {     // Detectar eventos de cliques nos botões
    const target_element = e.target  // Aqui identificamos o item clicado
    const parent_element = target_element.closest("div") // selecionei o elemento pai mais proximo
    let todo_title;

    if(parent_element && parent_element.querySelector("h3")){           // Verifica se contem um texto no parent_element
        todo_title = parent_element.querySelector("h3").innerText       // todo_title recebe um texto no parent_element
    }
    // Finalizar tarefa
    if(target_element.classList.contains("finish_todo")){
        console.log("Clicou para finalizar")
        parent_element.classList.toggle("done") // se tiver done tira, se não tiver coloca
    }
    // Remover tarefa
    if(target_element.classList.contains("remove_todo")){
        console.log("Tarefa removida")
        parent_element.remove() // Remover elemento pai
    }
    // Mostrar painel de edição da tarefa
    if(target_element.classList.contains("edit_todo")){
        toggleForm() // Chama função para mostrar a edição

        edit_input.value = todo_title
        old_input_value = todo_title
    }
})

cancel_edit_btn.addEventListener("click", (e) => {  // Clicou no botao cancelar edição
    e.preventDefault() //  Não enviar formulário

    toggleForm()
})

edit_form.addEventListener("submit", (e) => { // Editar tafera ao clicar no botão de enviar
    e.preventDefault()

    const edit_input_value = edit_input.value

    if(edit_input_value){
        uptdateTodo(edit_input_value)
    }
    toggleForm()
})

filter_select.addEventListener("change", (e) => {
    const filtro_selected = e.target.value  // Pega o valor selecionado do select
    const todo = document.querySelector(".todo")
    console.log(filtro_selected)


    switch (filtro_selected) { 
        case "all":
            
        break
        
        case "done":
            todo.classList.toggle("hide")
            console.log(todo)
        break

        case "todo":
            todo.classList.toggle("hide")
    }
})


