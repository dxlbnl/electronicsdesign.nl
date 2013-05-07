
// Handlebars
Handlebars.loadPartial = function (name) {
    var partial = Handlebars.partials[name];
    if (typeof partial === "string") {
        partial = Handlebars.compile(partial);
        Handlebars.partials[name] = partial;
    }
    return partial;
};

Handlebars.registerHelper("block",
    function (name, options) {
        /* Look for partial by name. */
        var partial = Handlebars.loadPartial(name) || options.fn;
        return partial(this, { data : options.hash });
});

Handlebars.registerHelper("partial",
    function (name, options) {
        Handlebars.registerPartial(name, options.fn);
    }
);


by_id = document.getElementById.bind(document);


template_dir = '';


function get_template(name) {
    var source = requests.get(name + '.hbs');
    var template = Handlebars.compile(source);


    function make_dom(ctxt) {
        var frag = document.createDocumentFragment();
        frag.innerHTML = template(ctxt);
        return frag;
    }

    return make_dom;
}


function set_data(data) {

}

window.onload = function () {
    m = get_template('menu');
    t = get_template('base');

    document.body.appendChild(t([
        {
            name : 'home',
            submenu : [
                'subhome',
                'subhome',
                'subhome',
            ]
        }, {
            name : 'portfolio',
        }, {
            name : 'gallery',
        }, {
            name : 'contact'
        }
    ]
        ))

    
};