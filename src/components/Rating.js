import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

const BasicRating = ({ rating, isEditing, setUpdatedValue, updatedValue }) => {
  const [value, setValue] = useState(rating);

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
    setUpdatedValue({
      ...updatedValue,
      rating: newValue,
    });
  };

  return (
    <Box sx={{ "& > legend": { marginTop: 2 } }}>
      {isEditing ? (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={handleRatingChange}
        />
      ) : (
        <Rating name="half-rating-read" value={value} precision={0.5} readOnly />
      )}
    </Box>
  );
};

export default BasicRating;
