// import React, { useState } from "react";

// const Login: React.FC<{ onSignUpClick: () => void }> = ({ onSignUpClick }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Your login logic here
//     console.log("Logging in with username:", username, "and password:", password);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>
//         Don't have an account?{" "}
//         <button onClick={onSignUpClick}>Sign Up</button>
//       </p>
//     </div>
//   );
// };

// const SignUp: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignUp = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     // Your signup logic here
//     console.log("Signing up with username:", username, "and password:", password);
//     // Assuming signup is successful, now login
//     onLogin();
//   };

//   return (
//     <div>
//       <h2>Sign Up</h2>
//       <form onSubmit={handleSignUp}>
//         <div>
//           <label htmlFor="signup-username">Username:</label>
//           <input
//             type="text"
//             id="signup-username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </div>
//         <div>
//           <label htmlFor="signup-password">Password:</label>
//           <input
//             type="password"
//             id="signup-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>
//         <button type="submit">Sign Up</button>
//       </form>
//     </div>
//   );
// };

// export default {Login, SignUp };

