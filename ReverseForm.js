function checkForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let comment = document.getElementById('comment').value;
    if (name === '') {
        alert('Введите имя!');
        return;
    }
     if (email === '') {
        alert('Введите email!');
        return;
    }

    if (comment === '') {
        alert('Введите комментарий!');
        return;
    }
    if (!email.includes('@') || !email.includes('.') || email.length < 5) {
        alert('Введите правильный email!\nПример: andreyaleksandrovich@mail.ru');
        return;
    }
    //alert('Привет '+ name + ' спасибо за ваш комментарий!');
    let form = document.getElementById('form_text');
    form.style.display = "block";
    form.innerHTML = 'Привет '+ name + ' спасибо за ваш комментарий!'
