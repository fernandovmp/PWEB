
let researchResult;
const researchYes = document.getElementById('researchYes');
const researchNo = document.getElementById('researchNo');

function selectYes() {
    if(researchYes.checked) {
        researchResult = true;
        researchNo.checked = false;
    }
}

function selectNo() {
    if(researchNo.checked) {
        researchResult = false;
        researchYes.checked = false;
    }
}

const form = document.getElementById('form');
form.addEventListener('submit', submitForm);
form.addEventListener('reset', () => {
    researchResult = undefined;
});


function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    validateField(document.forms['form'].elements['name'], formData['name'], validateName, 'Nome precisa ter pelo menos 10 caractéres');
    validateField(document.forms['form'].elements['email'], formData['email'], validateEmail, 'Email precisa ser valido');
    validateField(document.forms['form'].elements['comment'], formData['comment'], validateComment, 'Comentário precisa ter pelo menos caractéres');
    displayResearchMessage(researchResult);
}

function validateField(field, data, validationFunction, failMessage) {
    if(data !== undefined && validationFunction(data)) return;
    alert(failMessage);
    field.focus();
}

function validateName(name) {
    return name.length >= 10;
}

function validateEmail(email) {
    const realEmail = email.trim();
    return realEmail !== '' && email.includes('@') && email.includes('.');
}

function validateComment(comment) {
    const realComment = comment.trim();
    return realComment.length >= 20;
}

function displayResearchMessage(result) {
    if(result === undefined) {
        alert('Responda a pesquisa');
        return;
    }
    if(!result) {
        alert('Que bom que você voltou a visitar esta página!')
        return;
    }
    alert('Volte sempre à está página!');
}
