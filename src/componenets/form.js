// import React from 'react'
// import { useState } from 'react'


// function Form() {

//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');

  
//     const onSubmit = (e) => {
//         e.preventDefault();
//         setName(e.target.value);
//         setEmail(e.target.value);    
//         setName('');
//         setEmail('');    
//       };
    
    
//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//           Name:
//           <input type="text" value={name} onChange={(e)=>{
//             setName(e.target.value);
//           }} />
//         <br />
//           Email:
//           <input type="email"  value= {email} onChange={(e)=>{
//             setEmail(e.target.value);
//           }} />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   )
// }

// export default Form;


import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState(null);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: name,
      email: email
    };
    setFormData(data);
    setName('');
    setEmail('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {formData && (
        <div>
          <h2>Submitted Data</h2>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
