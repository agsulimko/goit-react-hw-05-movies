// // import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
// import Box from "@mui/material/Box";
// import { useSearchParams } from "react-router-dom";
// import { useEffect } from "react";

// const FormSerch = (props) => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get("query");

//   // const [inputQuery, setInputQuery] = useState("");
//   // const handleInputQuery = (e) => {
//   //   setInputQuery(e.currentTarget.value.toLowerCase());
//   // };
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   if (inputQuery.trim() === "") {
//   //     alert("Enter your request");
//   //     return;
//   //   }
//   //   props.onSubmit(inputQuery.trim());
//   //   setInputQuery("");
//   // };

//   // console.log(inputQuery);
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);
//   const fetchMovies = async () => {
//     try {
//       const { results } = await getAllMovies();
//       //   console.log(results);
//       setMovies((prevMovies) => [...results]);
//     } catch (err) {
//       setError(error.message);
//     }
//   };

//   useEffect(() => {
//     fetchMovies();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div>
//       <form className="form" onSubmit="{handleSubmit}">
//         {/* // <form className="form" onSubmit={handleSubmit}> */}
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >
//           <TextField
//             //  className="input"
//             type="text"
//             //  autocomplete="off"
//             //  autofocus
//             //  placeholder="Search images and photos"
//             name="title"
//             size="small"
//             sx={{ m: 1, width: "35ch" }}
//             style={{ backgroundColor: "white" }}
//             className="form-control"
//             onChange={(event) => setSearchParams({ query: event.target.value })}
//             value={query}
//             id="input-with-sx"
//             label="Search movies"
//             variant="outlined"
//             margin="dense"
//           />
//         </Box>
//         {/* <button onClick={() => setSearchParams({ c: "HELLO" })}>Button</button> */}
//         {/* <input
//         type="email"
//         class="form-control"
//         id="exampleInputEmail1"
//         aria-describedby="emailHelp"
//       ></input> */}
//       </form>
//     </div>
//   );
// };
//  export default FormSerch;
