// Seleção de alementos
const todo_form = document.querySelector('#todo_form')
const todo_input = document.querySelector('#todo_input')
const todo_list = document.querySelector('#todo_list')
const edit_form = document.querySelector('#edit_form')
const edit_input = document.querySelector('#edit_input')
const cancel_edit_btn = document.querySelector('#cancel_edit_btn')

// Funções
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
    todo_input.focus()
} 

// Eventos
todo_form.addEventListener("submit", (e) => {
    e.preventDefault() // Fez com que o evento (e) seja cancelado
    console.log("Enviou form")
    // ^^^^  Faz com que envie o formulário sem recarregar a página

    const input_value = todo_input.value
    if(input_value){ // Verifica se não está vazio e chama a função para salvar a tarefa
        save_todo(input_value)
    }
})

document.addEventListener("click", (e) => {
    const target_element = e.target  // Aqui identificamos o item clicado
    const parent_element = target_element.closest("div") // selecionei o elemento pai mais proximo

    if(target_element.classList.contains("finish_todo")){
        console.log("Clicou para finalizar")
        parent_element.classList.toggle("done") // se tiver done tira, se não tiver coloca
    }
})