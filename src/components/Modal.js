import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import BasicRating from "./Rating";
import { toast } from "react-toastify";
import axios from "axios";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal({
  isModalOpened,
  setModalOpened,
  updatedValue,
  setUpdatedValue,
  productList,
  setProductList,
  item,
  setAnchorEl,
}) {
  const handleChange = (e) => {
    setUpdatedValue({
      ...updatedValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async (e, item) => {
    try {
      const payload = {
        title: updatedValue.title,
        description: updatedValue.description,
        price: updatedValue.price,
        rating: updatedValue.rating,
      };

      const { data } = await axios.put(
        `https://dummyjson.com/products/${item.id}`,
        payload
      );

      const newUpdatedProductList = productList.map((product) =>
        product.id === item.id ? data : product
      );

      setProductList(newUpdatedProductList);
      setModalOpened(false);
      setAnchorEl(null);
      toast.success(`Edited successfully!`);
    } catch (error) {
      toast.error(`Error editing product: ${error.message}`);
    }
  };

  const handleCancel = () => {
    setModalOpened(false);
    setAnchorEl(null);
    toast.error(`Canceled Editing`);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isModalOpened}
      onClose={handleCancel}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isModalOpened}>
        <Box sx={modalStyle}>
          <Typography variant="h6" component="h2">
            Edit Product Now!
          </Typography>
          <div>
            <Typography>
              Update Title
            </Typography>
            <input
              type="text"
              value={updatedValue.title}
              onChange={handleChange}
              name="title"
              placeholder="Title"
            />
          </div>
          <div>
            <Typography>
              Update Price
            </Typography>
            <input
              type="number"
              value={updatedValue.price}
              onChange={handleChange}
              name="price"
            />
          </div>
          <div>
            <Typography>
              Update Rating
            </Typography>
            <BasicRating
              rating={updatedValue.rating}
              isEditing={isModalOpened}
              setUpdatedValue={setUpdatedValue}
              updatedValue={updatedValue}
            />
          </div>
          <div className="d-flex mt-2">
            <button className="btn btn-dark" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-danger mx-3" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
}
