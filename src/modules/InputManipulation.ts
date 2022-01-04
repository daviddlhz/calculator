export class InputManipulation implements IManipulationInput {

  getInputValueNumber(inputId: string): number {
    const value = Number(
      (<HTMLInputElement>document.getElementById(inputId)).value
    );
    return value;
  }

  setInputValue(inputId: string, inputValue: number) {
    const inputElement: HTMLInputElement = <HTMLInputElement>(
      document.getElementById(inputId)
    );

    inputElement.value = inputValue.toString();
  }

  getInputsElement(inputType: string): NodeListOf<HTMLInputElement> {
    return document.querySelectorAll(inputType);
  }

  activeClickEventList(
    inputsElement: NodeListOf<HTMLInputElement>,
    functionEvent: Function
  ): void {
    inputsElement.forEach((input) => {
      input?.addEventListener("click", (ev: Event) => {
        functionEvent(input.value, ev);
      });
    });
  }

}
