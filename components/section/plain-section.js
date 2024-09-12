export class PlainSection extends HTMLElement {

    templateString = `
        <div>
            My Custom Element
        </div>
    
    `
    constructor() {
        super();
        this.innerHTML = this.templateString;
        console.log('My Custom Plain Section')
    }

}