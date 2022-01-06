export class InputManipulation implements IManipulationInput {


  getValue(inputId: string): number {

    return Number((document.getElementById(inputId) as HTMLInputElement).value);
    
  }

  setValue(inputId: string, inputValue: number) {

    (<HTMLInputElement>document.getElementById(inputId)).value = inputValue.toString();
  
  }

  getElements(inputType: string): HTMLInputElement[] {

    return Array.from(document.querySelectorAll(inputType));
  
  }

  activeClickEventList( inputsElement: HTMLInputElement[], functionEvent: Function): void  {

    inputsElement.forEach((input) => {
      
      input?.addEventListener("click", (ev: Event) => {
        
        functionEvent(input.value, ev)
      
      })

    });
    
  }

}
