// import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'


function App() {

  return (
    <div className="container">
      <Header title='Task Tracker'/>
      <Tasks />
    </div>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <Header/>
//     )
//   }
// }

export default App;
