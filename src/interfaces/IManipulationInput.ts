interface IManipulationInput {
  getInputValueNumber(inputId: string): number;

  setInputValue(inputId: string, inputValue: number): void;

  getInputsElement(inputType: string): NodeListOf<HTMLInputElement>;

  activeClickEventList(inputsElements: NodeListOf<HTMLInputElement>, functionEvent: Function): void;
}