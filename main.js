const submitBtn = document.querySelector('.submitBtn');
const dateInput = document.querySelector('.inputFeild');
const resultTxt = document.querySelector('.Result');
const container = document.querySelector('.container');
const msg = document.querySelector('.msg');
/************************/
const containerAnimationOff =
       () => container.classList.remove('containerAnimation');

const containerAnimationOn =
       () => container.classList.add('containerAnimation');

container.addEventListener('mouseover', containerAnimationOff);

container.addEventListener('click', containerAnimationOff);

container.addEventListener('mouseout', containerAnimationOn);

/************************/
const calcAge = function () {
       /***** Get Current date */
       const date = new Date();
       const yearRightNow = date.getFullYear();
       const monthRightNow = date.getMonth() + 1;
       const dayRightNow = date.getDate();
       /***** Get User birth date */
       const userInput = dateInput.value===""?`${yearRightNow}-${monthRightNow}-${dayRightNow}`:dateInput.value;
       const userYear = Number(userInput.split('-')[0]);
       const userMonth = Number(userInput.split('-')[1]);
       const userDay = Number(userInput.split('-')[2]);
       /*****Calc User Age */
       let userYearAge = Number(yearRightNow - userYear);
       let userMonthAge = Number(monthRightNow - userMonth);
       let userDayAge = Number(dayRightNow - userDay);
       if (userDayAge < 0) {
              --userMonthAge;
              const daysInPreviousMonth = new Date(userYear, userMonth - 1, 0).getDate();
              userDayAge += daysInPreviousMonth;
       }
       if (userMonthAge < 0) {
              --userYearAge;
              userMonthAge += 12;
       }
       return [userYearAge, userMonthAge, userDayAge]; 
};
const displayAge = function () {
       [year, month, day] = calcAge(); 
        if (year <= 0) {
              resultTxt.textContent = "please Enter Valid Date😓";
              resultTxt.style.color = "rgb(238, 85, 61)";
              return;
       }
       resultTxt.style.color = '#a6bacb';
       resultTxt.textContent = `You are ${year} years
       ${month == 0 ? "" : ", " + month + " months"}
       ${day == 0 ? "" : "and " + day + " days"}  !🥳`;
       submitBtn.textContent = "Try Again";
       if (year < (new Date().getFullYear() - 2004)) 
        msg.textContent = "i'm older than you. 😏";

       else if (year === (new Date().getFullYear() - 2004)) 
        msg.textContent = "Ok! We are about the same age.😎cool! ";
                   
       else  msg.textContent = "sir you are older than me.👴👵 ";
              
};
submitBtn.addEventListener("click",displayAge);
