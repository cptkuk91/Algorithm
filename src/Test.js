function checkAge(age){
    if(age >= 18){
        return true;
    } else {
        return console.log('보호자 동의가 필요합니다.');
    }
}

let age = 18;
if(checkAge(age)){
    console.log('접속 허용');
} else{
    console.log('접속 차단');
};