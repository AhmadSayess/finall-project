import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/shared/Loading";
import Search from "../components/shared/Search";
import Buttons from "../components/shared/Buttons";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";

//// for a input select ///

import { useTheme } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
//// for a input select ///

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

//// for a input select ///
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function Postes() {
  //// to get all category ///
  const [category, setCategory] = useState([]); /// to get all gategory ///

  const getAllcategory = async () => {
    await axios
      .get("http://localhost:5000/api/category")
      .then((res) => {
        if (res.status === 200) {
          setCategory(res.data.response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllcategory();
  }, []);

  //// for a input select ///
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    let pro = category.filter((e) => e.name === event.target.value[0]);
    setPostCategory(pro[0]._id);
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //// for a input select ///

  const [postes, setPostes] = useState([]);
  const [DATA, setDATA] = useState([]); 

  const [loading, setLoading] = useState(false);

  const getAllPostes = async () => {
    await axios
      .get("http://localhost:5000/api/post")
      .then((res) => {
        if (res.status === 200) {
          setPostes(res.data.result);
          setDATA(res.data.result);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getAllPostes();
  }, []);


  ////  satrt to edit a post ///





  
  ////  end to edit a post ///




  //// for to add a post ///
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [postCategory, setPostCategory] = useState("");

  const HandelAddPost = async (e) => {
    e.preventDefault();
    const image_array = Object.values(images.images);
    const formData = new FormData();
    image_array.forEach((file) => {
      formData.append("image", file);
    });
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", postCategory);

    await axios
      .post("http://localhost:5000/api/post", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        setTitle("");
        setDescription("");
        setImages("");
        setPostCategory('')
        setOpen(false);
        getAllPostes();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //// for to add a post ///

  ////  satrt to delet a post ///
  const Handeldeleteposte = (id) => {
    axios
      .delete(`http://localhost:5000/api/post/${id}`)
      .then((res) => {
        setLoading(true);
        getAllPostes();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////  end to delet a post ///

  //// for a popup ///
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTitle("");
    setDescription("");
    setImages("");
    setPostCategory('')
  };
  //// for a popup ///
  return (
    <div className="projects">
      <div className="d-flex justify-content-around">
        <Search placeholder="Search for a postes"  data={DATA} searched={setPostes} page={'posts'} />
        {/* for a popup */}
        <Buttons
          buttonStyle="btn--success--solid"
          buttonSize="btn-lg"
          text={"Add  Postes"}
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
            <form encType="multipart/form-data" onSubmit={HandelAddPost}>
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
                      name="image"
                      type="file"
                      variant="standard"
                      inputProps={{
                        multiple: true,
                      }}
                      // value={images}
                      onChange={(e) => setImages({ images: e.target.files })}
                    />

                    <TextField
                      id="standard-basic"
                      label="Enter your title"
                      variant="standard"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextField
                      id="standard-basic"
                      label="Enter your description"
                      variant="standard"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />

                    {/*  for a input select */}
                    <div>
                      <FormControl sx={{ m: 0.1, width: 442 }}>
                        <InputLabel id="demo-multiple-chip-label">
                          ALL Category
                        </InputLabel>
                        <Select
                          labelId="demo-multiple-chip-label"
                          id="demo-multiple-chip"
                          multiple
                          value={personName}
                          onChange={handleChange}
                          input={
                            <OutlinedInput
                              id="select-multiple-chip"
                              label="ALL Category"
                            />
                          }
                          renderValue={(selected) => (
                            <Box
                              sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 0.5,
                              }}
                            >
                              {selected.map((value) => (
                                <Chip key={value} label={value} />
                              ))}
                            </Box>
                          )}
                          MenuProps={MenuProps}
                        >
                          {category.map((cat) => (
                            <MenuItem
                              key={cat._id}
                              value={cat.name}
                              style={getStyles(cat.name, personName, theme)}
                            >
                              {cat.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    {/* END for a input select */}

                    {/* END for the input in the popup */}
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
                  text={"Save Poste"}
                  type="submit"
                />
              </DialogActions>
            </form>
          </Dialog>
        </div>

        {/* END for a popup */}
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
                  <ImageSearchIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Img
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <TitleIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Title
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <DescriptionIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Description
                  </span>
                </StyledTableCell>
                {/* <StyledTableCell align="left" style={{ width: "25%" }}>
                  <AutoAwesomeMotionIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Category_id
                  </span>
                </StyledTableCell> */}

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
                {postes &&
                  postes.map((item, index) => {
                    return (
                      <StyledTableRow key={index} className="main_row">
                        <StyledTableCell
                          lign="left"
                          style={{ paddingTop: "12px", paddingBottom: "12px" }}
                        >
                          <img
                            style={{ width: "55px", "border-radius": "70%" }}
                            src={item.image[0]}
                            alt="image"
                          />
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {item.title.substring(0,30)}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {item.description.substring(0,29)}...
                        </StyledTableCell>

                        {/* <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {item.category.name}
                        </StyledTableCell> */}

                        <StyledTableCell align="left" style={{ padding: 0 }}>
                          <div className="button_table">
                      
                            <Buttons
                              buttonStyle="btn--success--solid"
                              buttonSize="btn-md"
                              icon={<EditIcon />}
                              
                            />
                      
                            <Buttons
                              buttonStyle="btn--danger--solid"
                              buttonSize="btn-md"
                              icon={<DeleteOutlineIcon />}
                              onClick={() => Handeldeleteposte(item._id)}
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
}
export default Postes;
