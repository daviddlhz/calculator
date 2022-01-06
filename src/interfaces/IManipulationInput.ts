interface IManipulationInput {

  getValue(inputId: string): number;

  setValue(inputId: string, inputValue: number): void;

  getElements(inputType: string): HTMLInputElement[];

  activeClickEventList(inputsElements: HTMLInputElement[], functionEvent: Function): void;

}