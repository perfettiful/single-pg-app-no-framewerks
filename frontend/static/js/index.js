import Dashboard from './views/Dashboard.js'
import Posts from './views/Posts.js'
import Settings from './views/Settings.js'


const navigatesTo = url => {
    history.pushState(null, null, url);
    router();
}


const router = async () => {
    const routes = [

        {
            path: '/',
            view: Dashboard
        },
        {
            path: '/posts',
            view: Posts
        },
        {
            path: '/settings',
            view: Settings
        }
    ];

    //Test each route for match
    const potentialMatches = routes.map(route => {

        return {
            route: route,
            isMatch: location.pathname === route.path
        }
    })

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch)

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    const view = new match.route.view();

    document.querySelector('#app').innerHTML = await view.getHtml();

    console.log(potentialMatches)


}; //end anon async router fct def

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigatesTo(e.target.href)
        }
    })

    router()
})