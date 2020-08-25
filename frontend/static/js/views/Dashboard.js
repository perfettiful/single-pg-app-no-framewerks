import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(){
        super()
        this.setTitle("Dashboard");
    }

    async getHtml(){
        return `
        <h1> Welcome Back, SAPer!</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam alias veritatis, illum natus velit consequuntur ab explicabo voluptatum illo, maxime ea tempora libero animi, architecto ad provident dolores debitis. Totam.</p>
        <p>Non vitae cum consequatur tempore odit cupiditate repudiandae sint temporibus ipsum iste magni, officiis voluptas eligendi perspiciatis dignissimos facere culpa perferendis. Eos neque quae praesentium atque dignissimos veritatis nulla cupiditate.</p>
        <p>Unde commodi magni nobis sed vel, voluptatum, est itaque sapiente non nihil suscipit deserunt earum, delectus velit. Quis sequi incidunt, suscipit distinctio laboriosam commodi accusamus similique, illo ipsam magni esse?</p>
        <p>Vitae illo ipsa aspernatur illum ab, nihil fugit corporis vel necessitatibus iste eius consectetur temporibus quae in repudiandae minus, eligendi deserunt mollitia ipsum consequuntur nesciunt dicta nostrum! Incidunt, deleniti sapiente.</p>
        <p><a href='/posts' data-link>View Recent Posts</p>
        `;
    }
}