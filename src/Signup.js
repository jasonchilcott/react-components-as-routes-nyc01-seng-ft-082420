import React from 'react';

class Signup extends React.Component {
  render(){
  return (
    <div>
      <form>
        <div>
          <input type="text" name="username" placeholder="Username" />
          <label htmlFor="username">Username</label>
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input type="password" name="confirm-password" placeholder="Password" />
          <label htmlFor="password">Confirm Password</label>
        </div>
        <input type="submit" value="signup" />
      </form>
    </div>
  );
};
}


export default Signup;