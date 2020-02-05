const todos = [
    {
        task:'Repeat by practising JavaScript, CSS, HTML5',
        isCompleted:false
    },
    {
        task: 'Listen to Dan Abramov\'s podcast - How did I build Redux',
        isCompleted: false
    },
    {
        task: '5 litre beer is way too costly. Just forget it.',
        isCompleted: false
    },
]

document.querySelector('#create-note').addEventListener('click', function(e){
    e.target.textContent = 'create button is clicked';
})

document.querySelector('#remove-all').addEventListener('click', function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove()
    })
})

document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log('Add button to be clicked for adding items...');
})