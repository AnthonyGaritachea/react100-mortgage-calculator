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

 //cument.getElementById('results').innerHTML = ` $ ${monthlyPayments.toFixed(2)} is your payment.`;
 // var userLoanAmount = document.getElementById('loan-balance').value;                                                            //  var userInterestRate = document.getElementById('interest-rate').value
// var userLoanTerm = document.getElementById('loan-term').value;
//let loanAmount = userLoanAmount;
// let calculateInterest = (userInterestRate / 100) / 12 + 1;              // divide by 100 to turn into decimal, divide rate by 12 (12 months in year)
// let calculateInterestOld = ((userInterestRate/100)) / 12;               // before adding 1
// let calculateMonthlyPayments = userLoanTerm * 12;                       // take userLoanTerm and * by 12 to see total monthly payments
// let a = Math.pow(calculateInterest, -calculateMonthlyPayments);          // make exponent from rate to total monthly payments
// var b = 1 - a;                                                          // subtract 1 (formula)
// var c = calculateInterestOld / b;                                 
// var monthlyPayments = c * userLoanAmount;                             // calculates monthly payment 
      // var roundMonthlyPayments = monthlyPayments.toFixed(2)
// document.getElementById('results').innerHTML = ` $ ${roundMonthlyPayments} is your payment.`;
