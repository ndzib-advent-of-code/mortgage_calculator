window.onload = () => {
    const root = document.querySelector(':root');
    const inputs = document.querySelectorAll('input[type="range"]');

    inputs.forEach(input => {
        input.addEventListener('input', (event) => {
            let value = +event.target.value;
            let parameter = event.target.id;

            let valueElt = document.querySelector(`#${parameter}-value`);
            valueElt.innerHTML = value.toLocaleString();

            let percentPosition = 100*value/+event.target.max;
            
            root.style.setProperty(`--${parameter}-position`, `${percentPosition}%`)
        })
    })
}