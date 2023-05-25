const closeButton = document.getElementById('closeButton')
const openButton = document.getElementById('trigger')
const dialogContainer = document.getElementById('dialog')

function openDialog() {
  dialogContainer.classList.remove('hidden')
}

function closeDialog() {
  dialogContainer.classList.add('hidden')
}

const successContent = document.getElementById('dialog-content-success')
const formContent = document.getElementById('form-content')

function handleSubmit() {
  event.preventDefault()

  formContent.classList.add('hidden')
  successContent.classList.remove('hidden')
}

// Mudar estilo no scroll

const header = document.getElementById('header')
const logo = document.querySelector('.logo')

window.onscroll = () => {
  if (
    document.body.scrollTop > 1850 ||
    document.documentElement.scrollTop > 1850
  ) {
    header.classList.add('dark')
    logo.classList.add('dark-logo')
  } else {
    header.classList.remove('dark')
    logo.classList.remove('dark-logo')
  } if(document.body.scrollTop > 3000 ||
    document.documentElement.scrollTop > 3000){
      header.classList.remove('dark')
      logo.classList.remove('dark-logo')
  }
}
