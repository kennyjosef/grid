const form= document.getElementById("form")
console.log(form)
const username= document.getElementById("username")
const email= document.getElementById("email")
console.log(email)
console.log(username)
const toggle= document.getElementById('toggle')
// const num1= document.getElementById('num1')
// const num2= document.getElementById('num2')


// const input = document.getElementById('input')
// const output = document.getElementById('output')
// console.log(input, output)

// input.addEventListener('keyup', function(event){
//     console.log('keyup', event.key)
//     output.textContent= `you typed: ${this.value}`;
//     if(event.key==="Enter"){
//         this.value=""
//     }
// })
const ageGrade =18
function ageCalc (age){
    if(ageGrade > age){
        return "qualified"
    }
    else{
        return `your age is ${age} and you are not qualified`
    }
}
console.log (ageGrade)
console.log(ageCalc(192))
 
const gender = 'male'
function genderT (){
    if (gender === 'female'){
        return 'Male are needed for this job'
    }
    else if(gender === "male"){
        return 'Send your cv'
    }
    else{
        return " only male or female is recognised"
    }
}
console.log (genderT(gender))
console.log ("my gender is", gender)
const num1=1
 const num2=3

function addition (num1, num2){
return num1+ num2;
}
console.log( 'answer is', addition(num1, num2))

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('username:', username.value)
    console.log('email:', email.value)

})
email.addEventListener('focus', function(){
    this.style.backgroundColor='yellow'
})


const list = document.getElementById('todo')
const btn = document.getElementById("btn")
btn.addEventListener('dblclick', function(){
    console.log('I was clicked twice')
    alert('welcome')
})

list.addEventListener('click', function(event){
    const item= event.target;
    if(item.tagName ==="LI"){
        item.classList.toggle('done')
    }
})

toggle.addEventListener('click', function(){
    toggle.classList.toggle('later')
})
//ARRAY
const playerNames=['Kennt', 'mezzi', 'zoda']
playerNames.unshift('Ronado')
playerNames.push('Taye')
playerNames.splice(1, 0, "Droba")
console.log(playerNames)
console.log(playerNames.length)
console.log(playerNames[0])
const emptyArry =[]
console.log(emptyArry)
emptyArry.push('goat')
console.log(emptyArry)

const sentence ='This is the boy';
console.log(sentence.indexOf('is'))

const num =[1,2, 3, 4, 5, 6, 7]
console.log(num.find((n)=> n>3))
console.log(num.indexOf((n)=>n >3))

const person ={
    firstName:'Ayo',
    lastName:"Deji",
    age: 23,
    isStudent :false,
};
console.log(person)
console.log('school' in person)
console.log('age' in person)
console.log(Object.assign({school: 'everest'}, person))

const friuts = ['mango', 'orange', 'apple']
for(let i=0; i< friuts.length; i++){
console.log(friuts[i])

}
// const upperFruits = friuts.map((friuts)=>friuts.toUpperCase)
// console.log(upperFruits)

// looping through object
const student ={
    name: 'Bisi',
    age: 23,
    email: "gh2gmail.com"
}
console.log(student.name)
for (const key in student){
    console.log(`${key}: ${student[key]}`)
}

// array in object
const studentDetails =[
    {
        name: 'Joe',
        age: 23,
        subject: 'Eng'
    },
    {
        name: 'Paul',
        age: 13,
        subject: 'Eng'
    },
    {
        name: 'John',
        age: 10,
        subject: 'Eng'
    },
    {
        name: 'charles',
        age: 20,
        subject: ['Eng', 'ICT', 'CRS']
    }
]

console.log(studentDetails[3])

const library = {
    name: 'school library',
    books: [
        {title: 'Book1', author: 'Author A', available: true},
        {title: 'Book2', author: 'Author B', available: false},
        {title: 'Book3', author: 'Author C', available: false},
        {title: 'Book4', author: 'Author D', available: true},
        {title: 'Book5', author: 'Author E', available: false}
    ],
    getAvailableBooks(){
        return this.books.filter((book)=> book.available)
        },
        addBook(title, author){
            this.books.push({
                title,
                author,
                available:true
            });
        },
};

console.log(library.getAvailableBooks());
library.addBook('Book6', 'Author F')
console.log(library.getAvailableBooks())