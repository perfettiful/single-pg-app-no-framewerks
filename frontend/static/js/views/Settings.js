import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("Setting");
    }

    async getHtml(){
        return `
        <h1> Your Setting!!</h1>
        <p>Set those Settings!</p>

        <p><a href='/posts' data-link>View Recent Posts</p>
        `;
    }
}