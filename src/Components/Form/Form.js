import React from 'react'

const Form = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
  
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
  
      alert(email + ' ' + password);
    };
  return (
    <div>
      <h1>This is form component</h1>
      {/*  */}

  
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
    </div>
  )
}

export default Form;
