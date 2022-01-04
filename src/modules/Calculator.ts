export class Calcultator implements IOperation {

  /**
   * Method for addition of two numbers
   * @param numberOne a number one to addition
   * @param numberTwo  a number two to addition
   * @returns the sum of the two numbers
   */
  addition(numberOne: number, numberTwo: number): number {
    return numberOne + numberTwo;
  }

  substraction(numberOne: number, numberTwo: number): number {
    return numberOne - numberTwo;
  }

  multiplication(numberOne: number, numberTwo: number): number {
    return numberOne * numberTwo;
  }

  division(numberOne: number, numberTwo: number): number {
    return numberOne / numberTwo;
  }
  
}
