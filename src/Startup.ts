import { Calcultator } from "./modules/Calculator";
import { InputManipulation } from "./modules/InputManipulation";

export class Startup {

  private calculator: Calcultator;
  private inputManipulation: InputManipulation;

  constructor(_calculator: Calcultator, _inputManipulation: InputManipulation) {
    
    this.calculator = _calculator;
    this.inputManipulation = _inputManipulation;
    
  }

  Init() {
    
    const inputs: NodeListOf<HTMLInputElement> = this.inputManipulation.getInputsElement("input[type=button]");

    this.inputManipulation.activeClickEventList(inputs, this.Operations);

  }

  Operations(inputValue: string, ev: Event) {
    
    ev.preventDefault();

    let numberOne: number =
      this.inputManipulation.getInputValueNumber("numberOne");

    let numberTwo: number =
      this.inputManipulation.getInputValueNumber("numberTwo");
    
      let resultOfOperation: number;

    switch (inputValue) {
      
      case "+":
        resultOfOperation = this.calculator.addition(numberOne, numberTwo);
        this.inputManipulation.setInputValue("result", resultOfOperation)
        break;

      case "-":
        resultOfOperation = this.calculator.substraction(numberOne, numberTwo);
        this.inputManipulation.setInputValue("result", resultOfOperation)
        break;

      case "*":
        resultOfOperation = this.calculator.multiplication(numberOne, numberTwo);
        this.inputManipulation.setInputValue("result", resultOfOperation)
        break;

      case "/":
        resultOfOperation = this.calculator.division(numberOne, numberTwo);
        this.inputManipulation.setInputValue("result", resultOfOperation);
        break;

      default:
        break;

    }
  }

}
