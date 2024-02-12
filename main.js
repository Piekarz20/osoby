const addUserBtn = document.querySelector('.addUser');
const form = document.querySelector('form');
const actuallErr = document.querySelector('.err')

addUserBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const userAge = document.querySelector('.userAge');
    const userName = document.querySelector('.userName');

    if (userAge > 0 && userName.length > 2){
    user = {
        userAge: userAge.userAge.value,
        userName: userName.value
    }
    users = []
    users.push(user)

    users.forEach((element) => {

    })
} else {
    actuallErr.remove();
    err = document.createElement('p');
    err = 'Podaj prawidłowe dane';
    err.classList.add('err');
    form.append(err);
}
})