class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    toggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility
            };
        });
    }
    render(){
        return(
            <div>
                <h1>Visibilty Toggle</h1>
                <button onClick={this.toggleVisibility}>{this.state.visibility? "Hide Details": "Show Details"}</button>
                {this.state.visibility && <p>Showing the Hidden text</p>}
            </div>
        );
    }
};

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));

// let visibility = false;

// const toggleButton = () => {
//     visibility = !visibility;
//     render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {

//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleButton}>{visibility? "Hide Details" : "Show Details"}</button>
//             {visibility && <p> These are the details that were hidden. </p>}
//         </div>
//     );

//     ReactDOM.render(template,appRoot);

// };

// render();