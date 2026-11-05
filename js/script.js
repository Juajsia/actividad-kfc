const theme = localStorage.getItem('theme') || "1"
dark(theme)

function dark(valor) {
    const body = document.getElementById('body')
    const cards = document.querySelectorAll('.card')
    const footer = document.getElementById('footer')
    if (valor == '1') {
        body.classList.replace('bg-dark-blue', 'bg-ligth')
        footer.classList.replace('bg-dark', 'bg-danger')

        cards.forEach(card => {
            card.classList.remove('bg-dark', 'border-white', 'text-white')
            const boton = card.querySelector('button')
            boton.classList.replace('btn-outline-light', 'btn-danger')
        })
        localStorage.setItem('theme', '1')
        return
    }

    if (valor == '2') {
        body.classList.replace('bg-ligth', 'bg-dark-blue')
        footer.classList.replace('bg-danger', 'bg-dark')
        cards.forEach(card => {
            card.classList.add('bg-dark', 'border-white', 'text-white')
            const boton = card.querySelector('button')
            boton.classList.replace('btn-danger', 'btn-outline-light')
        })
        localStorage.setItem('theme', '2')
        return
    }
}