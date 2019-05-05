const btn = document.querySelector('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.id);
    document.querySelector('#my-form').style.getElementsByClassName.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1>Cams the man!!</h1>';
})

