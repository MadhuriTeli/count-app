import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count : 0,
       /* tags:['tag1', 'tag2', 'tag3'] list rendering using map function 
       <ul> {this.state.tags.map(tag => <li key={tag}> {tag}</li>)}</ul>   */
    };

       /*        styles ={
                    fontSize: 10,
                    fontWeight: bold    
                 };
        also can use inline class in jsx like this...
                style={{ fontSize:20 }} in html tag          */
    handleIncrement = product => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    };

    /*doHandleIncrement = () => {
        this.handleIncrement({ id: 1 }); instead we use this as inline function  in onclick event
    };*/
   
    render() {         
        return (
            <div>          
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button
                    onClick={() => this.handleIncrement({id:1})}
                    className="btn btn-secondary btn-g roup-sm">Increment</button>    
            </div>
         )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-"; //  if value is 0 it shown in yellow(warning) otherwise its blue(primary)
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
}

    formatCount(){
        const {count} = this.state;
        return count === 0 ? 'zero' : count; //if count 0 print 'zero' otherwise number itself.
   }

}
 
export default Counter;