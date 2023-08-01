const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase='abcdefghijklmnopqrstuvwxyz';
const number='0123456789';
const specialchars='~`!@#$%^&*()_-+={[}];:<,/?.>';
function passwordgenerator(){
    event.preventDefault();
    let Passwordlength=document.querySelector('#Password_length').value;
    let Uppercase=document.querySelector('#uppercase').checked;
    let Lowercase=document.querySelector('#lowercase').checked;
    let Numbers=document.querySelector('#number').checked;
    let Specialchars=document.querySelector('#special').checked;

    let valid='';

    if (Uppercase) valid+=uppercase;
    if (Lowercase) valid+=lowercase;
    if (Numbers) valid+=number;
    if (Specialchars) valid+=specialchars;

    let generatepassword='';
    for(let i=0; i<Passwordlength;i++){
        const random=Math.floor(Math.random()*valid.length)
        generatepassword+=valid[random]
    }
    document.querySelector('#generate_password').value=generatepassword;
}

function copytexttoclipboard(){
    let copypassword = document.querySelector('#generate_password');
    copypassword.select();
    document.execCommand("copy");
    alert("Text copied to clipboard!");
}

