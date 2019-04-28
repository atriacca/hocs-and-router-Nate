import React, { Component } from 'react'

// Provider and Consumer
export const DataContext = React.createContext()

class DataProvider extends Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState(prevState => ({ count: prevState.count  + 1 }))
    }

    render(){
        return (
            <DataContext.Provider 
                value={{ 
                    count: this.state.count, 
                    increment: this.increment
                }}>
                { this.props.children }
            </DataContext.Provider>
        )
    }
}

export default DataProvider


// function withData(C){
//     return function(props){
//         return (
//             <DataContext.Consumer>
//                 {value => <C {...value} {...props}/>}
//             </DataContext.Consumer>
//         )
//     }
// }

// Give me your component
// I will return your component with my values added to it's props
export const withData = C => props => (
    <DataContext.Consumer>
         {value => <C {...value} {...props}/>}
    </DataContext.Consumer>
)