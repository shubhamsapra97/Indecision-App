class Counter extends React.Component{
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }
    componentDidMount(){
        const count = parseInt(localStorage.getItem('count'),10);
        if(!isNaN(count)){
            this.setState(()=>({ count }));
        }
    }
    componentDidUpdate(pevProps,prevState){
        if(prevState.count !== this.state.count){
            localStorage.setItem('count',this.state.count);
        }
    }
    handleAddOne(){
        this.setState((prevState)=>({
            count: prevState.count + 1
        }));
    }
    handleMinusOne(){
        this.setState((prevState)=>({
            count: prevState.count - 1
        }));
    }
    handleReset(){
        this.setState((prevState)=>({
            count: 0
        }));
    }
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />,document.getElementById('app'));


// let count = 0;

// var addOne = ()=>{
//     count++;
//     renderCounterApp();
// };

// var minusOne = ()=>{
//     count--;
//     renderCounterApp();
// };

// var reset = ()=>{
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// var renderCounterApp = () => {

//     var templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo,appRoot);

// }

// renderCounterApp();