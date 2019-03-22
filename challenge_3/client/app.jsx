class App extends React.Component {
    constructor() {
        super()
        this.state = {
            currentForm: 0,
            name: '',
            email: '',
            password: '',
            line1: '',
            line2: '',
            city: '',
            state: '',
            zip_code: '',
            phone_number: '',
            credit_card: '',
            expiry_date: '',
            cvv: '',
            billing_zip_code: ' '
        }

        this.handleNextButton = this.handleNextButton.bind(this);
        this.handleCheckoutButton = this.handleCheckoutButton.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    
    }

    handleCheckoutButton() {
        console.log('handling Checkout')
        this.setState(state => ({
            currentForm: state.currentForm + 1
        }))
        
    };
    
    handlePurchase() {
        console.log('handling purchase')
    }

    handleNextButton() {
        console.log('changing form')
        this.setState(state => ({
            currentForm: state.currentForm + 1
        }))
    }

    handleChange(event) {
        var eventName = event.target.name
        var currentName = event.target.value
        this.setState({
            [eventName]:  currentName
        })
        console.log(this.state);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState(state => ({
            currentForm: state.currentForm + 1
        }));
    }

    render() {
        return (
            <div>
                {this.state.currentForm === 0 ? <FormZero handleClick={this.handleCheckoutButton} /> :
                this.state.currentForm === 1 ? <FormOne handleClick={this.handleNextButton} handleChange={(e) => this.handleChange(e)} handleSubmit={(e) => this.handleSubmit(e)} /> : 
                this.state.currentForm === 2 ? <FormTwo currentState={this.state} handleClick={this.handleNextButton} handleChange={(e) => this.handleChange(e)} handleSubmit={(e) => this.handleSubmit(e)} /> : 
                this.state.currentForm === 3 ? <FormThree handleClick={this.handleNextButton} handleChange={(e) => this.handleChange(e)} handleSubmit={(e) => this.handleSubmit(e)} /> :
                this.state.currentForm === 4 ? <PurchaseForm /> :
                '<h1> inside react!</h1>'}
            </div>
        )
    }

}

var FormZero = (props) => {
    return (
        <div>
            <h1>FormZero</h1>
            <button onClick={props.handleClick}>Checkout</button>
        </div>
    )
}



var FormOne = (props) => {
    return (
        <div>
            <h1>FormOne</h1>
            <form action="/formOne" method="POST">
                <input type="hidden" value="addy" name="wtf" />

                <label>
                    Name
                    <input type="text" name="name" onChange={(e) => props.handleChange(e)}/>
                </label>
                <label>
                    Email
                    <input type="email" name="email" onChange={(e) => props.handleChange(e)}/>
                </label>
                <label>
                    Password
                    <input type="password" name="password" onChange={(e) => props.handleChange(e)}/>
                </label>

                <input type="submit" value="NEXT" onClick={this.handleSubmit}/>
            </form>
        </div>
    )
}


var FormTwo = (props) => {
    return (
        <div>
            <h1>FormTwo</h1>
            <form action="/formTwo" method="POST" onSubmit={(e) => props.handleSubmit(e)}>
                <input type="hidden" value={props.currentState.name} name="name"/>
                <label>
                    Line1
                    <input type="text" name="line1" onChange={(e) => props.handleChange(e)} />
                </label>
                <label>
                    Line2
                    <input type="text" name="line2" onChange={(e) => props.handleChange(e)} />
                </label>
                <label>
                    City
                    <input type="text" name="city" onChange={(e) => props.handleChange(e)} />
                </label>
                <label>
                    State
                    <input type="text" name="state" onChange={(e) => props.handleChange(e)} />
                </label>
                <label>
                    Zip Code
                    <input type="number" name="zip_code" onChange={(e) => props.handleChange(e)} />
                </label>
                <label>
                    Phone Number
                    <input type="number" name="phone_number" onChange={(e) => props.handleChange(e)} />
                </label>

                <input type="submit" value="NEXT"/>
            </form>

            <button onClick={props.handleClick}>NEXTTTTT</button>

        </div>
    )
}

var FormThree = (props) => {
    return (
        <div>
            <h1>FormThree</h1>
            <form action="/formTwo" method="POST" onSubmit={(e) => props.handleSubmit(e)}>
                <label>
                    Credit Card #
                    <input type="number" name="credit_card" onChange={(e) => props.handleChange(e)} />
                </label>
                <label>
                    Expiry Date
                    <input type="date" name="expiry_date" onChange={(e) => props.handleChange(e)} />
                </label>
                <label>
                    CVV
                    <input type="number" name="cvv" onChange={(e) => props.handleChange(e)} />
                </label>
                <label>
                    Billing Zip Code
                    <input type="number" name="billing_zip_code" onChange={(e) => props.handleChange(e)} />
                </label>

                <input type="submit" value="NEXT"/>
            </form>

            <button onClick={props.handleClick}>NEXTTTTT</button>


        </div>
    )
}

var PurchaseForm = (props) => {
    return (
        <div>
            <h1>PurchaseForm</h1>
            <button onClick={this.handlePurchase}> PURCHASE </button>
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById('app'));