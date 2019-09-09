import React from 'react';

export default class App extends React.Component {
  constructor() {
      super()
      this.state = {
          balance: 0,
          rate: 0,
          term: 15,
          output: null
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value})
  }

  handleClick(){
     let calculateInterest = ((this.state.rate) / 100) / 12 + 1;
     let calculateInterestOld = ((this.state.rate / 100)) / 12
     let calculateMonthlyPayments = (this.state.term) * 12
     let a = Math.pow(calculateInterest, -calculateMonthlyPayments);
     let b = 1 - a;
     let c = calculateInterestOld / b;
     let monthlyPayments = c * (this.state.balance);
     let monthlyPaymentsFixed = monthlyPayments.toFixed(2)
     this.setState({
        output: monthlyPaymentsFixed 
      });
}  

  render() {
    return ( 
         <div>
             <h3>Mortgage Calculator</h3>
             <form>
                <label>Loan Balance:</label> <input id='loan-balance' name='balance' type="text" placeholder='0'
                                                    value={this.state.balance} onChange={this.handleChange} />

                 <label>Interest Rate(%):</label>   <input id='interest-rate' name='rate' type='number' step = '0.01' placeholder='0'
                                                           value={this.state.rate} onChange={this.handleChange} />

                 <label>Loan Term (years):</label>  {/*<input id='loan-term' type='text' name = 'terms' placeholder='0'
                                                          value={this.state.terms} onChange={this.handleChange} />*/}

                                                           <select name = 'term' value = {this.state.term} onChange = {this.handleChange}  >
                                                            <option value = '15'>15</option>
                                                            <option value = '30'>30</option>
                                                          </select>   

              </form>

               <button id = 'button' onClick={this.handleClick} name='submit'>calculate</button>
               <p id = 'output'>${this.state.output} is your payment.</p>
          </div>
            )
        }
    }