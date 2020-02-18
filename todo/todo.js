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
]

const inCompleteTodos  = todos.filter((todo)=>{
    return !todo.isCompleted;
})

const summary = document.createElement('h2');
summary.textContent = `You have ${inCompleteTodos.length} action left`;
document.querySelector('body').appendChild(summary);

inCompleteTodos.forEach((pendingTask)=>{
    const p = document.createElement('p');
    p.textContent = pendingTask.task;
    document.querySelector('body').appendChild(p);
})

document.querySelector('button').addEventListener('click', function(e) {
    console.log('Add a new ToDo...')
})