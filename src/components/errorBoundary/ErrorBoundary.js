import {Component} from 'react';

class ErrorBoundary extends Component{
   state={
      error: false
   }

   componentDidCatch(error, errorInfo){
      this.setState({
         error: true
      })
   }

   render(){
      if (this.state.error){
         return (
            <img src="https://coderlessons.com/wp-content/uploads/images/stp/65fb5733cf0cf0834cb926b9a9bb9aed.png" alt="Error" />
         )
      }
      return this.props.children;
   }
}
export default ErrorBoundary;