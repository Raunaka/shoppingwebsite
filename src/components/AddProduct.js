import React, { useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/addProducts";
import { toast } from "react-toastify";
import CustomTextField from "./customField";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    title: "",
    price: "",
    rating: "",
    link: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const createProduct = () => {
    try {
      dispatch(addProduct(state));
      toast.success("Product added successfully");
      setState({
        title: "",
        price: "",
        rating: "",
        link: "",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <Grid container justifyContent="center">
      <Paper elevation={10} style={{ padding: "30px", width: 400, margin: "50px auto" }}>
        <h2>Create Product</h2>
        <Typography variant="caption">Create Now!</Typography>
        <div className="form-group mt-4">
          <CustomTextField
            label="Product Title"
            name="title"
            value={state.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <br />
        <div className="form-group">
          <CustomTextField
            label="Product Price (in Rs)"
            name="price"
            type="number"
            value={state.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <br />
        <div className="form-group">
          <CustomTextField
            label="Product Rating"
            name="rating"
            type="number"
            value={state.rating}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <CustomTextField
            label="Product Image"
            name="link"
            value={state.link}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <br />
        <br />
        <div className="text-center">
          <Button
            className="btn btn-primary"
            onClick={createProduct}
          >
            Create Now!
          </Button>
        </div>
      </Paper>
    </Grid>
  );
};

export default AddProduct;
