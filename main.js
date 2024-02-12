const addUserBtn = document.querySelector('.addUser');
const form = document.querySelector('form');
const actualErr = document.querySelector('.err');
const bodyMainSection = document.querySelector('.body-main-section');

addUserBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const userAge = document.querySelector('.userAge').value;
    const userName = document.querySelector('.userName').value;

    if (userAge > 0 && userName.length > 2) {
        const user = {
            userAge: userAge,
            userName: userName
        };
        let users = [];
        users.push(user);

        users.forEach((element) => {
            const li = document.createElement('li');
            li.textContent = `Name: ${element.userName}, Age: ${element.userAge}`;
            bodyMainSection.appendChild(li);
        });
    } else {
        if (actualErr) {
            actualErr.remove();
        }
        const err = document.createElement('p');
        err.textContent = 'Podaj prawidłowe dane';
        err.classList.add('err');
        form.append(err);
    }
});
