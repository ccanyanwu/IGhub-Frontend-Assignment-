//select elements from the DOM 
const operatorBtn = document.querySelectorAll('.operators'),
      numbersBtn = document.querySelectorAll('.number'),
      previous = document.querySelector('.first'),
      next = document.querySelector('.second'),
      clearBtn = document.querySelector('.clear'),
      decimal = document.querySelector('input[data-action="decimal"]'), 
      calculate = document.querySelector('input[data-action="calculate"]');

//instantiate the calculatorclass
class Calculator {
  constructor(next,previous){
        this.next = next
        this.previous = previous
        this.clear()
    }
    
    //clear entire display 
    clear(){
      this.nextOperand = '', 
      this.previousOperand = '',
      this.operation = undefined 
    }
    
    
    appendNumber(number){ 
      if (number === '.' && this.nextOperand.includes('.')) 
        return 
        this.nextOperand = this.nextOperand.toString() + number.toString();
       
    }
    
    //determines operation to run
    chooseOperation(operation){
      if(this.nextOperand === '') return
      if(this.previousOperand !== ''){
          this.compute()
      }
      this.operation = operation
      this.previousOperand = this.nextOperand
      this.nextOperand = ''
    }
    
    //actual computation
    compute(){
        let computation;
        const prev = parseFloat(this.previousOperand);
        const nex = parseFloat(this.nextOperand);
        if(isNaN(prev) || isNaN(this.nextOperand)) return 
        switch (this.operation) {
            case '+':
                computation = prev + nex
                break;
            case '-':
                computation = prev - nex
                break;
            case '×':
                computation = prev * nex
                break;
            case '÷':
                computation = prev / nex
                break;
        
            default:
                return
        }
        this.nextOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    
    getDisplayNumber(number){
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if(isNaN(integerDigits)){
            integerDisplay = ''
        }else{
            integerDisplay = integerDigits.toLocaleString('en',{maximumFractionDigits: 0} )
        }
        if(decimalDigits != null){
            return `${integerDisplay}.${decimalDigits}`
        }else{
            return integerDisplay
        }
    }
    
    updateDisplay(){
            this.next.innerText = this.getDisplayNumber(this.nextOperand)
            if(this.operation != null){
                this.previous.innerText = 
                `${this.previousOperand} ${this.operation}`
            }else{
                this.previous.innerText = ''
            }
    }
}

const calculator = new Calculator(next, previous);

numbersBtn.forEach(button => {
    button.addEventListener('click',() => {
        calculator.appendNumber(button.value) ;
        calculator.updateDisplay()
    })
})

operatorBtn.forEach(button => {
    button.addEventListener('click',() => {
        calculator.chooseOperation(button.value);
        calculator.updateDisplay();
    });
})
calculate.addEventListener('click', () =>{
    calculator.compute()
    calculator.updateDisplay()
})
clearBtn.addEventListener('click', () =>{
    calculator.clear()
    calculator.updateDisplay()
}) ;
/*numbersBtn.forEach(button => {
    button.addEventListener('click',(e) => {
        //previous.innerHTML=Number(button.value) 
    })
})*/