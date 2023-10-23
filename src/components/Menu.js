import * as React from "react";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TransitionsModal from "./Modal";
import { toast } from "react-toastify";

export default function BasicMenu({
  open,
  anchor,
  setAnchor,
  item,
  productList,
  setProductList,
}) {

  const [isModalOpened, setModalOpened] = useState(false);
  const [updatedValue, setUpdatedValue] = useState({ ...item });

  const handleEdit = () => {
    setModalOpened(true);
  };

  const handleDelete = () => {
    const newProductList = productList.filter((p) => p.id !== item.id);
    setProductList(newProductList);
    toast.warn(`Deleted successfully!`);
    setAnchor(null);
  };

  return (
    <div>
      <Menu
        id="basic-menu"
        anchor={anchor}
        open={open}
        onClose={() => setAnchor(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div className="d-flex flex-column">
          <MenuItem onClick={handleEdit}>
            Edit
            <span className="mx-2 d-flex align-items-center">
              <EditIcon sx={{ fontSize: 16 }} />
            </span>
          </MenuItem>
          {isModalOpened && (
            <TransitionsModal
              item={item}
              isModalOpened={isModalOpened}
              setModalOpened={setModalOpened}
              updatedValue={updatedValue}
              setUpdatedValue={setUpdatedValue}
              productList={productList}
              setProductList={setProductList}
              setAnchor={setAnchor}
            />
          )}
          <MenuItem onClick={handleDelete}>
            Delete
            <span className="mx-2 d-flex align-items-center">
              <DeleteForeverIcon sx={{ fontSize: 16 }} />
            </span>
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
}
