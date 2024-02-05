let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    quote : `'That it will never come again is
    what makes life so sweet.'`,
    person: ` Emily Dickinson`
}, {
    quote : `'It is never too late to be what 
    you might have been.' `,
    person: ` George Eliot`
}, {
    quote : `'To be yourself in a world that is 
    constantly trying to make you something else is the 
    greatest accomplishment.'`,
    person: `Ralph Waldo Emerson`
}, {
    quote : `'Pain is inevitable. Suffering is optional.'`,
    person: `Haruki Murakami`
}, {
    quote : `'All the world's a stage, and all the men 
    and women merely players.'`,
    person: `William Shakespeare`
}, {
    quote : `'Be kind, for everyone you meet is fighting a hard battle.' `,
    person: ` Plato`
}, {
    quote : `'Life is tough my darling, but so are you.'`,
    person: `Stephanie Bennett Henry`
}, {
    quote : `'Don't let your happiness depend on something 
    you may lose.'`,
    person: `C.S. Lewis`
}, {
    quote : `'We are all broken, that's how the light gets in.'`,
    person: `Ernest Hemingway`
}, {
    quote : `'Self-awareness and self-love matter. Who we are 
    is how we lead.'`,
    person: `Brene Brown`
}, {
    quote : `'Amateurs sit and wait for inspiration, the rest 
    of us just get up and go to work.'`,
    person: `Stephen King`
}, {
    quote : `'Even if we don't have the power to choose where 
    we come from, we can still choose where we go from there.'`,
    person: `Stephen Chbosky`
}, {
    quote : `'And now that you don't have to be perfect, you 
    can be good.'`,
    person: `John Steinbeck`
}, {
    quote : `'But I am very poorly today & very stupid & I hate 
    everybody & everything. One lives only to make blunders.'`,
    person: `Charles Darwin`
}, {
    quote : `'You may encounter many defeats, but you must not be 
    defeated. In fact, it may be necessary to encounter the defeats, so you can know who you are, what you can rise from, how you can still come out of it.'`,
    person: `Maya Angelou`
}, ];

btn.addEventListener('click', function () {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random]. quote;
    person.innerText = quotes[random]. person;
})