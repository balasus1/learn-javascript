const notes = ['Note-sample', 'Note-1', 'Note-2', 'Note-3']
notes.push('Note-at-end')
notes.push('Note-4')
notes.splice(0,1,'Dummy-note')
const noteObject = [
    {
        title: 'Book title 7',
        body: 'Body for book 7'            
    },
    {
        title: 'Book title 6',
        body: 'Body for book 6'        
    },
    {
        title: 'Book title 0',
        body: 'Body for book 0'
    },
    {
        title: 'Book title 1',
        body: 'Body for book 1'
    },
    {
        title: 'Book title 2',
        body: 'Body for book 2'
    },
    {
        title: 'Book title 3',
        body: 'Body for book 3'
    },
    {
        title: 'Book title 4',
        body: 'Body for book 4'
    },
    {
        title: 'Book title 5',
        body: 'Body for book 5'
    }
]

const findNote = function findNote(notes, noteTitle) {
    const idx = notes.findIndex(function (note, idx) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
    return notes[idx]
}

const findNote1 = function (notes, noteTitle) {
    const note = notes.find(function (note, noteTitle) {
        return note
    })
}
const searchResult = findNote(noteObject, 'Book Title 5')
console.log(`Using findIndex api:${searchResult}`)
const searchResult1 = findNote1(noteObject, 'Book Title 5')
console.log(searchResult1)

const todos = [
    {
        text: 'Learn HTML5 and CSS3',
        completed: true
    },
    {
        text: 'Learn JS and JQuery',
        completed: false
    },
    {
        text: 'Learn SASS',
        completed: true
    },
    {
        text: 'Learn ReactJS',
        completed: false
    }
]

const deleteTodo = function (todos, todoText) {
    const idx = todos.findIndex (function(todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if(idx > -1) {
        todos.splice(idx, 1)
    }
}

const filterTodo = todos.filter(function(todo, index) {
    const isTextMatch = todo.text.toLowerCase().includes('SS')
    return isTextMatch
})

console.log(`before deleting`)
console.log(todos)
deleteTodo(todos, 'Learn SASS')
console.log(`after deleting ${todos.text}`)
console.log(todos)
console.log(`Fuzzy filter:${filterTodo}`)