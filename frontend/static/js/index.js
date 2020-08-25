const navigatesTo = url =>{
    history.pushState(null, null, url);
    router();
}


const router = async () => {
    const routes = [

        {
            path: '/',
            view: () => {
                console.log('Viewing Dashboard')
            }
        },
        {
            path: '/posts',
            view: () => {
                console.log('Viewing Posts')
            }
        },
        {
            path: '/settings',
            view: () => {
                console.log('Viewing Settings')
            }
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

    console.log(potentialMatches, match.route.view())


}; //end anon async router fct def

window.addEventListener('popstate', router)

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigatesTo(e.target.href)
        }
    })

    router()
})