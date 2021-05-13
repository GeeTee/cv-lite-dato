
function frenchDate(timestamp) {
    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    const formatter = Intl.DateTimeFormat('fr-FR', options);
    let newDate = formatter.format(Date.parse(timestamp))
    // console.log({newDate})
    return newDate
}

if (document.getElementsByClassName('gtDate').length > 0) {
    let d = document.getElementsByClassName('gtDate')
    let j = d.length
    console.log({j})
    for (let i = 0; i < j; i++) {
        d[i].textContent = frenchDate(d[i].textContent)
    }
}