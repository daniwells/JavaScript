const box1 = document.querySelector('#box1')

const btn_b1 = document.querySelector('#b1')

const boxes = [...document.querySelectorAll('.boxes')]

box1.addEventListener("click", (evt)=>{
    console.log('clicou')
})


boxes.map((el)=>{
    el.addEventListener("click", (evt)=>{
        evt.stopPropagation()
    })
})

