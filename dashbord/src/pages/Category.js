import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled } from "@mui/material/styles";
import {Table, TableBody } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Buttons from "../components/shared/Buttons";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import Search from "../components/shared/Search";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import Loading from "../components/shared/Loading";
import Swal from "sweetalert2";

//// for a popup ///
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Slide from "@mui/material/Slide";
//// for a popup ///

//// for a text filed ///
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
//// for a text filed ///

//// for a popup ///
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
//// for a popup ///

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#344f7c",
    color: "#ededed",
    textAlign: "center",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    color: "var(--textcolor1)",
    textAlign: "center",
    transition: ".5s",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "var(--background2)",
  transition: ".5s",
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const Category = () => {
  const [category, setCategory] = useState([]); /// to get all gategory ///
  console.log({category});
  const [DATA, setDATA] = useState([]); 
  const [loading, setLoading] = useState(false);

  //// to get all category ///
  const getAllcategory = async () => {
    await axios
      .get("http://localhost:5000/api/category")
      .then((res) => {
        if (res.status === 200) {
          setCategory(res.data.response);
          setDATA(res.data.response);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getAllcategory();
  }, []);
  //// to get all category ///

  //// satart to add a category ///
  const [name, setName] = useState(""); /// state for the to  add a new gategory ///
  const [edit, setEdit] = useState({ name: "", id: "" }); /// state for the to  add a new gategory ///
  const data = {
    name: name,
  };
  const Handeladdcategory = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/category", data)
      .then((res) => {
        setName("");
        setOpen(false);
        Swal.fire({
          title: " added Successfully",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
        getAllcategory();

      })
      .catch((err) => {
        console.log(err);
      });
  };

  ////  end to add a category ///
  ////  satrt to edit a category ///

  const HandelEditCategory = (e) => {
    e.preventDefault();
    const id1 = edit.id;
    axios
      .put("http://localhost:5000/api/category/" + id1, { name: edit.name })
      .then((res) => {
        setOpen1(false);
        Swal.fire({
          title: " Edited Successfully",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
        getAllcategory();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////  end to edit a category ///

  ////  satrt to delet a category ///
  const Handeldeletecategory = (id) => {
    axios
      .delete(`http://localhost:5000/api/category/${id}`)
      .then((res) => {
        setLoading(true);
        Swal.fire({
          title: " Deleted Successfully",
          icon: "success",
          timer: 2000,
          timerProgressBar: true,
          toast: true,
          position: "top-end",
          showConfirmButton: false,
        });
        getAllcategory();

      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////  end to delet a category ///

  //// for a popup ///
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setName("");
  };

  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = (id, name) => {
    setOpen1(true);
    setEdit({ name, id });
  };
  const handleClose1 = () => {
    setOpen1(false);
    setEdit("");
  };
  //// for a popup ///
  return (
    <div className="projects">
      <div className="d-flex justify-content-around">
        <Search placeholder="Search for a category" data={DATA} searched={setCategory} page={'category'} />

        {/* for a popup */}
        <Buttons
          buttonStyle="btn--success--solid"
          buttonSize="btn-lg"
          text={"Add Category"}
          onClick={handleClickOpen}
        />
        <div>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <form onSubmit={Handeladdcategory}>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1.5, width: "49ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Add A New Category"
                      variant="standard"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Box>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Buttons
                  buttonStyle="btn--danger--solid"
                  buttonSize="btn-lg"
                  text={"Cancel "}
                  onClick={handleClose}
                />
                <Buttons
                  buttonStyle="btn--success--solid"
                  buttonSize="btn-lg"
                  text={"Save category"}
                  type="submit"
                />
              </DialogActions>
            </form>
          </Dialog>
          <Dialog
            open={open1}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose1}
            aria-describedby="alert-dialog-slide-description"
          >
            <form onSubmit={HandelEditCategory}>
              <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1.5, width: "49ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Edit Your Category"
                      variant="standard"
                      value={edit.name}
                      onChange={(e) =>
                        setEdit({ ...edit, name: e.target.value })
                      }
                    />
                  </Box>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Buttons
                  buttonStyle="btn--danger--solid"
                  buttonSize="btn-lg"
                  text={"Cancel "}
                  onClick={handleClose1}
                />
                <Buttons
                  buttonStyle="btn--success--solid"
                  buttonSize="btn-lg"
                  text={"edit Category"}
                  type="submit"
                />
              </DialogActions>
            </form>
          </Dialog>
        </div>
        {/* for a popup */}
      </div>

      <div
        className="projects_table"
        style={{ display: "flex", position: "relative", height: "100%" }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 400 }} aria-label="contained table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <AutoAwesomeMotionIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Category Name
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  <CallToActionIcon />{" "}
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Action
                  </span>
                </StyledTableCell>
              </TableRow>
            </TableHead>

            {loading ? (
              <Loading />
            ) : (
              <TableBody>
                {category &&
                  category.map((item, index) => {
                    console.log(category);
                    return (
                      <StyledTableRow key={index} className="main_row">
                        <StyledTableCell
                          lign="left"
                          style={{ paddingTop: "12px", paddingBottom: "12px" }}
                        >
                          {item.name}
                        </StyledTableCell>
                        <StyledTableCell align="left" style={{ padding: 0 }}>
                          <div className="button_table">
                            <Buttons
                              buttonStyle="btn--success--solid"
                              buttonSize="btn-md"
                              icon={<EditIcon />}
                              onClick={() =>
                                handleClickOpen1(item._id, item.name)
                              }
                            />
                            <Buttons
                              buttonStyle="btn--danger--solid"
                              buttonSize="btn-md"
                              icon={<DeleteOutlineIcon />}
                              onClick={() => Handeldeletecategory(item._id)}
                            />
                          </div>
                        </StyledTableCell>
                      </StyledTableRow>
                    );
                  })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
