const todos = [
    {
        task:'Repeat by practising JavaScript, CSS, HTML5',
        isCompleted:false
    },
    {
        task:'Learn, practice, Repeat. Make a Habit and build character',
        isCompleted:false
    },
    {
        task: 'Listen to Dan Abramov\'s podcast - How did I build Redux',
        isCompleted: false
    },
    {
        task: '5 litre beer is way too costly. Just forget it.',
        isCompleted: true
    },
    {
        task: 'Be clean and prepared for Shivarathri on 02/21/2020',
        isCompleted: false
    },
    {
        task: 'Whatever happened, happening for good cause',
        isCompleted: false
    }
]

const filters = {
    todoItem: '',
    hideCompleted: false
}

const renderToDoFilter = (todos, filters) => {
    const filteredTodos = todos.filter((todo) => {
        const searchTextMatch =  todo.task.toLowerCase()
        .includes(filters.todoItem.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.isCompleted;
        return searchTextMatch && hideCompletedMatch;
    })

    const inCompleteTodos  = filteredTodos.filter((todo)=>{
        return !todo.isCompleted;
    })

    document.querySelector('#todos').innerHTML = ''

    const todoSummary = document.createElement('h2');
    todoSummary.textContent = `You have ${inCompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(todoSummary);
    // We have filteredTodos now, lets render them as list in browser
    filteredTodos.forEach((todo) => {
        const todoEle = document.createElement('p');
        todoEle.textContent = todo.task;
        document.querySelector('#todos').appendChild(todoEle);
    })
}

renderToDoFilter(todos, filters);

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.todoItem = e.target.value;
    renderToDoFilter(todos, filters);
})

document.querySelector('#hide-completed').addEventListener('change', (e) => { 
    filters.hideCompleted = e.target.checked;
    renderToDoFilter(todos, filters);
})