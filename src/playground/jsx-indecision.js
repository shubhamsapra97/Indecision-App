console.log("App.js is running");

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in hands of computer',
    options: []
};

const onFormSubmit = (e)=>{
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value = '';
    }

    renderApp();
};

const onRemoveAll = () => {
    app.options = [];
    renderApp();
};

const onMakeDecision = () => {
    let randomNum = Math.floor(Math.random() * app.options.length);
    let option = app.options[randomNum];
    console.log(option);
};

var appRoot = document.getElementById('app');

var renderApp = () =>{
    
    var template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here are some options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option)=> <li key={option}>{option}</li> )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template,appRoot);

};

renderApp();