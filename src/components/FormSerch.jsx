// import React, { useSearchParams } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
const FormSerch = (props) => {
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);
  // //   const [inputQuery, setInputQuery] = useState("");
  // //   const handleInputQuery = (e) => {
  // //     setInputQuery(e.currentTarget.value.toLowerCase());
  // //   };
  // //   const handleSubmit = (e) => {
  // //     e.preventDefault();
  // //     if (inputQuery.trim() === "") {
  // //       alert("Enter your request");
  // //       return;
  // //     }
  // //     props.onSubmit(inputQuery.trim());
  // //     setInputQuery("");
  // //   };
  // //   console.log(inputQuery);
  // return (
  <div>
    <form className="form" onSubmit={handleSubmit}>
      {/* // <form className="form" onSubmit={handleSubmit}> */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextField
          //  className="input"
          type="text"
          //  autocomplete="off"
          //  autofocus
          //  placeholder="Search images and photos"
          name="title"
          size="small"
          sx={{ m: 1, width: "35ch" }}
          style={{ backgroundColor: "white" }}
          className="form-control"
          onChange={handleInputQuery}
          //   value={inputQuery}
          id="input-with-sx"
          label="Search movies"
          variant="outlined"
          margin="dense"
        />
      </Box>
      <button onClick={() => setSearchParams({ c: "HELLO" })}>Button</button>
      {/* <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      ></input> */}
    </form>
  </div>;
};
export default FormSerch;
