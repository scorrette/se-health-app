import React from 'react';
//Create context object so firebase doesn't need to be called in every module/screen
const FirebaseContext = React.createContext(null);
export const withFirebase = Component => props => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);
export default FirebaseContext;
