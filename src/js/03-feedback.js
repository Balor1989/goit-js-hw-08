const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea')
};

console.log(refs.form);
console.log(refs.email);
console.log(refs.textarea);


const onFormSubmit = (e) => {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state")
};

const onEmailInput  = (e) => {
    const email = e.currentTarget.value
    localStorage.setItem("feedback-form-state", email)
};

const onMessageInput = (e) => {
    const message = e.currentTarget.value
    localStorage.setItem("feedback-form-state", message)
};
console.log(localStorage)

refs.form.addEventListener('submit', onFormSubmit)
refs.email.addEventListener('input', onEmailInput)
refs.textarea.addEventListener('input', onMessageInput)