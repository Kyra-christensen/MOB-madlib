// import functions

// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)
const submitButton = document.getElementById('submit');
const hidden = document.getElementById('hidden');

// inputs
const verb1 = document.getElementById('verb1');
const verb2 = document.getElementById('verb2');
const adj1 = document.getElementById('adj1');
const adj2 = document.getElementById('adj2');
const noun1 = document.getElementById('noun1');
const noun2 = document.getElementById('noun2');
const verb3 = document.getElementById('verb3');
const verb4 = document.getElementById('verb4');
const adj3 = document.getElementById('adj3');
const verb5 = document.getElementById('verb5');
const verb6 = document.getElementById('verb6');
const noun3 = document.getElementById('noun3');
const verb7 = document.getElementById('verb7');
const verb8 = document.getElementById('verb8');

// outputs
const verb1Display = document.getElementById('verb1-display');
const verb2Display = document.getElementById('verb2-display');
const adj1Display = document.getElementById('adj1-display');
const adj2Display = document.getElementById('adj2-display');
const noun1Display = document.getElementById('noun1-display');
const noun2Display = document.getElementById('noun2-display');
const verb3Display = document.getElementById('verb3-display');
const verb4Display = document.getElementById('verb4-display');
const adj3Display = document.getElementById('adj3-display');
const verb5Display = document.getElementById('verb5-display');
const verb6Display = document.getElementById('verb6-display');
const noun3Display = document.getElementById('noun3-display');
const verb7Display = document.getElementById('verb7-display');
const verb8Display = document.getElementById('verb8-display');

console.log(verb1Display, verb2Display, verb3Display, verb4Display, verb5Display, verb6Display, verb7Display, verb8Display, adj1Display, adj2Display, adj3Display, noun1Display, noun2Display, noun3Display);

submitButton.addEventListener('click', () => {
    const verb1New = verb1.value;
    verb1Display.textContent = verb1New;

    const verb2New = verb2.value;
    verb2Display.textContent = verb2New;
    
    const adj1New = adj1.value;
    adj1Display.textContent = adj1New;
    
    const adj2New = adj2.value;
    adj2Display.textContent = adj2New;
    
    const noun1New = noun1.value;
    noun1Display.textContent = noun1New;
    
    const noun2New = noun2.value;
    noun2Display.textContent = noun2New;
    
    const verb3New = verb3.value;
    verb3Display.textContent = verb3New;
    
    const verb4New = verb4.value;
    verb4Display.textContent = verb4New;
    
    const adj3New = adj3.value;
    adj3Display.textContent = adj3New;
    
    const verb5New = verb5.value;
    verb5Display.textContent = verb5New;
    
    const verb6New = verb6.value;
    verb6Display.textContent = verb6New;
    
    const noun3New = noun3.value;
    noun3Display.textContent = noun3New;
    
    const verb7New = verb7.value;
    verb7Display.textContent = verb7New;
    
    const verb8New = verb8.value;
    verb8Display.textContent = verb8New;

    hidden.style.color = 'black';
});
