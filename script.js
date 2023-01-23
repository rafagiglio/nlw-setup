const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener("change", save)

function add (){
  const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
  const dayExists = dayExists.dayExists (today)

  if(dayExists){
    alert ("Dia já incluso")
    return 
  }

  function save () {
    console.log (nlwSetup.data)
    localStorage.setItem('NLWSetup@habits', JSON.stringfy (nlwSetup.data))
  }


  nlwSetup.addDay(today)
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()