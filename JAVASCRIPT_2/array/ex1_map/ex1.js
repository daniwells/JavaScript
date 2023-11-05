// const courses=['HTML', 'CSS', 'Javascript', 'PHP', 'React']

// courses.map((el, i)=>{console.log(`${el}, ${i}`)})

// console.log(courses.map((el, i)=>{return `The content ${el} and the Position: ${i}`}))

////////////////////////////////////////////////////////////

// const el=[...document.getElementsByTagName('div')]

// el.map((e, p)=>{e.innerHTML += ` ${p + 1}°`})

////////////////////////////////////////////////////////////


// const el=document.getElementsByTagName('div')
// const val=Array.prototype.map.call(el, ({innerHTML})=>innerHTML)
// console.log(val)

////////////////////////////////////////////////////////////

const convertInt=(e)=>parseInt(e)

let num = ['1', '2', '3', '4', '5'].map(convertInt)




