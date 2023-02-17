let div = document.getElementById('div')
let btnConfirm = document.getElementById('btn-confirm')
let ty = document.getElementById('ty')

let numericInput = document.getElementById("numbers")
let regex = '/^[1-9]\d*$/';

let cardholder = document.getElementById('name')

let nums = document.getElementsByClassName("number")


let cdNum = document.getElementById('cd-num')
let cdName = document.getElementById('cardholder-name')
let date = document.getElementById('date')
let yearCard = document.getElementById('year-card')
let cvcCard = document.getElementById('cvc-card')
let month = document.getElementById('month')
let year = document.getElementById('year')
let cvc = document.getElementById('cvc')

let allInputs = document.querySelectorAll('input[required]')


numericInput.addEventListener('input', function(event) {
    event.target.value = event.target.value.replace(/[^0-9]/g, '');

    if(numericInput == ''){
        cdNum.innerHTML = 'Please enter card code'
        numericInput.style.borderColor = 'hsl(270, 3%, 87%)'
        numericInput.style.borderWidth = '1px'
    }else{
        event.target.value = event.target.value.match(/.{1,4}/g).join(' ');
        cdNum.innerHTML = numericInput.value
        numericInput.style.borderColor = 'hsl(278, 68%, 11%)'
        numericInput.style.borderWidth = '1.5px'
    }
  });

cardholder.addEventListener('input', (event) => {
    event.target.value = event.target.value.match(/^[a-zA-Z\s]*$/)
    if(cardholder.value == ''){
        cdName.innerHTML = 'your name goes here'
        cardholder.style.borderColor = 'hsl(270, 3%, 87%)'
        cardholder.style.borderWidth = '1px'
    }else{
        cdName.innerHTML = cardholder.value
        cardholder.style.borderColor = 'hsl(278, 68%, 11%)'
        cardholder.style.borderWidth = '1.5px'
    }
  })


for(let i = 0; i < nums.length; i++){
    nums[i].addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, '')
        nums[i].style.borderColor = 'hsl(278, 68%, 11%)'
        nums[i].style.borderWidth = '1.5px'
        if(nums[i].value == ""){
            nums[i].style.borderColor = 'hsl(270, 3%, 87%)'
            nums[i].style.borderWidth = '1px'
        }
    })
}

month.addEventListener('input', () => {
    if(month.value ==''){
        date.innerHTML='MM'
    }else{
        date.innerHTML=month.value
    }
})

year.addEventListener('input', () => {
    if(year.value==''){
        yearCard.innerHTML = 'YY'
    }else{
        yearCard.innerHTML= year.value
    }
})

cvc.addEventListener('input', () => {
    if(cvc.value==''){
        cvcCard.innerHTML = 'cvc'
    }else{
        cvcCard.innerHTML= cvc.value
    }
})

let hidden = document.getElementById('hidden')

btnConfirm.addEventListener('click', (e) => {
    let formValid = true;
  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value === '') {
      formValid = false;
      hidden.style.display='none'
      break;
    }
  }

  for (let i = 0; i < allInputs.length; i++) {
    if (allInputs[i].value === '') {
      allInputs[i].classList.remove('blue-border');
      allInputs[i].classList.add('red-border');
      hidden.style.display='none'
    } else {
      allInputs[i].classList.remove('red-border');
      allInputs[i].classList.add('blue-border');
      hidden.style.display='none'
    }
  }

  if (!formValid) {
    e.preventDefault();
    hidden.style.display='block'
  }else{
    hidden.style.display='none'
    ty.style.display = 'block'
    ty.style.display = 'flex'
    div.style.display = 'none'
  }
}
)