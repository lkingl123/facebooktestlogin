import logo from './logo.svg';
import { withAuthenticator, useAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import { Amplify, Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App() {
  const {signOut} = useAuthenticator();
  return (
    <div className="App">
      <h3>Hello World</h3>
      
      <button onClick={signOut}>Log Out</button>
    </div>
  );
}

export default withAuthenticator(App);
