const addUserBtn = document.querySelector('#addUser');
const dane = document.querySelector('#dane');
const deleteAll = document.querySelector('#deleteAll');
const errDisplay = document.querySelector('#errDisplay')

addUserBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const userAge = document.querySelector('#userAge').value;
    const userName = document.querySelector('#userName').value;

    if (userAge > 0 && userName.length > 2) {
        const actualErr = document.querySelector('.err');
        if (actualErr) {
            actualErr.remove();
        }
        const user = {
            userAge: userAge,
            userName: userName
        };
        let users = [];
        users.push(user);

        users.forEach((element) => {
            const li = document.createElement('li');
            li.textContent = `Name: ${element.userName}, Age: ${element.userAge}`;
            dane.appendChild(li);
        });
    } else {
        const actualErr = document.querySelector('.err');
        if (actualErr) {
            actualErr.remove();
        }
        const err = document.createElement('p');
        err.textContent = 'Podaj prawidłowe dane';
        err.style.color = '#ff0000'
        err.classList.add('err');
        errDisplay.append(err);
    }
});
deleteAll.addEventListener('click', (evt) => {
    evt.preventDefault();
    dane.textContent = ''
})