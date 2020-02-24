const notes = [
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
        isCompleted: true
    },
]

const filters = {
    searchText: ''
}

const renderNotes = (notes, filters) => {
    const filteredNotes = notes.filter((note) => {
        return note.task.toLowerCase().includes(
            filters.searchText.toLowerCase());
    })
    
    document.querySelector('#notes').innerHTML = '';

    filteredNotes.forEach((note) => {
        const noteEle = document.createElement('p');
        noteEle.textContent = note.task;
        document.querySelector('#notes').appendChild(noteEle);
    })
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e)=>{
    e.target.textContent = 'Create note clicked';
    console.log(e);
})

document.querySelector('#search-text').addEventListener('input', (e)=>{
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    console.log(e.target.value);
})