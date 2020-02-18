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
        isCompleted: false
    },
]

document.querySelector('button').addEventListener('click', (e)=>{
    console.log('Did click work?', e);
    e.target.textContent = 'Button was clicked';
})