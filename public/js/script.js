const display = document.querySelector(".output");
const evalOutput = document.querySelector(".eval");
const equalBtn = document.querySelector(".eq");
const clearDisplayBtn = document.querySelector(".c");
const clearEveryThingBtn = document.querySelector(".ce");
const divByOne = document.querySelector(".one");
const plusMinusBtn = document.querySelector(".plmn");
const squareNumberBtn = document.querySelector(".sq");
const squareRootNumBtn = document.querySelector(".sqrt");
const percentageBtn = document.querySelector(".per");
const backspaceKeyBtn = document.querySelector(".bck");
const placeHolder = document.querySelector(".plce");
let output;


const scrollDiv = () => {
    display.scrollLeft = display.scrollIntoView = display.scrollWidth;
}

const calculate = () => {
    try {
        display.scrollLeft = display.scroll;
        let specialCondition = `0.1+0.2`;
        let specialCondition2 = `.1+.2`;
        if(display.innerText == specialCondition){
            evalOutput.innerText = display.innerText;
            output = 0.3;
            display.innerText = output;
        }
        if(display.innerText == specialCondition2){
            evalOutput.innerText = display.innerText;
            output = 0.3;
            display.innerText = output;
        }
        else{
            evalOutput.innerText = display.innerText;
            output = eval(display.innerText);
            display.innerText = output;
        }
    } catch (error) {
        alert(error);    
    }

}

const divideValueByOne = (value) => {
    evalOutput.innerText = `1/${value}`;
    let customValue = 1 / value;
    output = customValue;
    display.innerText = output;
}
const clearEveryThing = () => {
    display.innerText = 0;
    evalOutput.innerText = 0;
}

const toggleSign = (value) => {
    let numSignCheck = Math.sign(value);
    if(numSignCheck == 1){
        output = `-${value}`;
        display.innerText = output;
    }
    if(numSignCheck == -1){
        output = value.replace("-","");
        display.innerText = output;
    }
    if(numSignCheck == 0){
        output = 0;
        display.innerText = output;
    }
}

const squareNum = (value) => {
    try {
        evalOutput.innerText = `${value}x${value}`;
        output = value * value;
        display.innerText = output;
    } catch (error) {
        console.error(error);
        alert(error);
        return;
    }
}

const squareRootNum = (value) => {
    try {
        evalOutput.innerText = `√${value}`;
        output = Math.sqrt(value);
        display.innerText = output;
    } catch (error) {
        console.error(error);
        alert(error);
        return;
    }
}

const calculatePercentage = (value) => {
    try {
        evalOutput.innerText = `${value}%`;
        output = value / 100;
        display.innerText = output;
    } catch (error) {
        alert(error);
        console.error(error);
        return;
    }
}

const delValue = (value) => {
    if(display.innerText == '0' || evalOutput.innerText > 0){
        display.innerText = evalOutput.innerText;
        evalOutput.innerText = '0'
    }
    else if(value.length == 1){
        output = value.toString().slice(0, -1);
        display.innerText = 0;
    }
    else{
        output = value.toString().slice(0, -1);
        display.innerText = output;
    }
}

backspaceKeyBtn.addEventListener("click",(e) => {
    delValue(display.innerText);
})

percentageBtn.addEventListener("click",(e) => {
    calculatePercentage(display.innerText);
})

squareNumberBtn.addEventListener("click",(e) => {
    squareNum(display.innerText);
})

squareRootNumBtn.addEventListener("click",(e) => {
    squareRootNum(display.innerText);
})

plusMinusBtn.addEventListener("click",(e) => {
    toggleSign(display.innerText);
})

clearEveryThingBtn.addEventListener("click",(e) => {
    clearEveryThing();
})

divByOne.addEventListener("click",(e) => {
    divideValueByOne(display.innerText);
})

display.addEventListener("keydown",(e) => {
    if(e.keyCode == 13){
        e.preventDefault();
    }
})

clearDisplayBtn.addEventListener("click",async(e) => {
    display.innerText = 0;
})

equalBtn.addEventListener("click",(e) => {
    calculate();
})

function insert(value) {
    if(display.innerText == 0){
        scrollDiv();
        display.innerText = value;
    }
    else{
        scrollDiv();
        display.innerText += value;
    }
}


document.addEventListener("keydown",(e) => {
    scrollDiv();
    //alert(e.keyCode);
    if(e.keyCode == 190){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 67){
        display.innerText = "";
        display.innerText = 0;
    }
    if(e.keyCode == 110){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 8){
        delValue(display.innerText);
    }
    if(e.keyCode == 13){
        calculate();
    }
    if(e.keyCode == 48){
        display.innerText += e.key;
    }
    if(e.keyCode == 49){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 50){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 51){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 52){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 53){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 54){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 55){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 56){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 57){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }

    if(e.keyCode == 96){
        display.innerText += e.key;
    }
    if(e.keyCode == 97){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 98){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 99){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 100){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 101){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 102){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 103){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 104){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 105){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }

    if(e.keyCode == 107){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 106){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 109){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
    if(e.keyCode == 111){
        if(display.innerText == 0){
            display.innerText = e.key;
        }
        else{
            display.innerText += e.key;
        }
    }
})

function preventZoom(event){
    if(event.ctrlKey || event.metaKey){
        event.preventDefault();
    }
}

window.addEventListener("wheel", preventZoom, {passive: false});
window.addEventListener("keydown", preventZoom);