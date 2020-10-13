function addTodo(event){
    event.preventDefault(); /*because there is a form in the HTML*/
    const item = document.createElement('li');
    const itemValue = document.querySelector('#item').value;
    item.innerText = itemValue;

    /*Step 3 Last Instruction */
    item.addEventListener('click', completeTodo);

    /*Step2 Start*/
    const button = document.createElement('button');
    button.innerText = 'x';
    button.addEventListener('click', removeTodo);

    item.append(button);

    /*Step 2 End */

    const list = document.querySelector('ul');
    list.appendChild(item);
}

document.querySelector('form').addEventListener('submit', addTodo);

/*Step 2 Last Step*/
function removeTodo(event){
    event.target.parentNode.remove();
}

/*Step 3 Start */
function completeTodo(event){
    let value = event.target.getAttribute('aria-checked');
    if(value !== 'true'){
        event.target.setAttribute('aria-checked', 'true');
    } else {
        event.target.setAttribute('aria-checked', 'false');
    }
    
}