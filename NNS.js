try{function validate(e) {
    e.preventDefault();

    const email =document.getElementById('email').value;
    const pass =document.getElementById('password').value;
    const gender =document.getElementById('gender').value;
    const age =document.getElementById('age').value;
    const msgBox =document.getElementById('message');

    var message = '';
    if (email === ''){
        message = ' ENTER THE EMAIL ';
    }else if (pass === ''){
        message = ' ENTER THE PASSWORD'; 
    }else if (gender=== ''){
        message = ' ENTER THE GENDER LIKE FEMALE/MALE/OTHER';    
    }else if (age=== ''){
        message= 'ENTER THE AGE LIKE 1234ETC'
    }
 else {
    message= 'GREAT JOB !!!';
    
}
msgBox.innerText= message;
   }}
   catch(err) {
    document.getElementById("error_message").innerHTML =err.message
   } 