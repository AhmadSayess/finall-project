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
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

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

//// for a input select ///
function Employees() {
  ////  start for a input select ///
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    let pro = teams.filter((e) => e.name === event.target.value[0]);
    setEmployee(pro[0]._id);

    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  ////end for a input select ///

  const [employees, setEmployees] = useState([]); // to get all employees //
  const [DATA, setDATA] = useState([]); // to get all employees //
  const [loading, setLoading] = useState(false);
  //// satart to add a employees ///
  const [name, setName] = useState(""); // for the input to add employees //
  const [email, setEmail] = useState(""); // for the input to add employees //
  const [phone, setPhone] = useState(""); // for the input to add employees //
  const [address, setAddress] = useState(""); // for the input to add employees //
  const [role, setRole] = useState(""); // for the input to add employees //
  const [employee, setEmployee] = useState(""); // for the input select when i add a employees to put for a team//

  const data = {
    name: name,
    email: email,
    phone: phone,
    address: address,
    role: role,
    teams: employee,
  };
  const Handeladdemployees = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/employes", data)
      .then((res) => {
        setName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setRole("");
        setOpen(false);
        getAllEmployees();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  ////  end to add a employees ///

  const getAllEmployees = async () => {
    await axios
      .get("http://localhost:5000/api/employes")
      .then((res) => {
        if (res.status === 200) {
          setEmployees(res.data);
          setDATA(res.data)
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getAllEmployees();
  }, []);

  ////  satrt to edit a employees ///

  ////  end to edit a employees ///

  ////  satrt to delet a empolyee ///
  const Handeldeleteemloyee = (id) => {
    axios
      .delete(`http://localhost:5000/api/employes/${id}`)
      .then((res) => {
        setLoading(true);
        getAllEmployees();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////  end to delet a empolyee ///

  const [teams, setTeams] = useState([]); //// to get all teams ///
  //// to get all teams ///
  const getAllTeams = async () => {
    await axios
      .get("http://localhost:5000/api/teams")
      .then((res) => {
        if (res.status === 200) {
          setTeams(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllTeams();
  }, []);
  //// to get all teams ///

  ////  satrt to edit a employee ///
  const [edit, setEdit] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    role: "",
    teams_id: "",
    id: "",
  }); /// state for the to  add a new gategory ///

  const HandelEditEmployee = (e) => {
    e.preventDefault();
    const id1 = edit.id;
    axios
      .put("http://localhost:5000/api/employes/" + id1, {
        name: edit.name,
        email: edit.email,
        phone: edit.phone,
        address: edit.address,
        role: edit.role,
        teams: edit.teams_id,
      })
      .then((res) => {
        setEdit({
          name: "",
          email: "",
          phone: "",
          address: "",
          role: "",
          teams_id: "",
          id: "",
        });
        setOpen1(false);
        getAllEmployees();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////  end to edit a employee ///

  //// for a popup ///
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  //// for a popup ///
  const [open1, setOpen1] = React.useState(false);
  const handleClickOpen1 = (id, name, email, phone, address, role, teams) => {
    const { _id } = teams;
    setEdit({ name, email, phone, address, role, teams_id: _id, id });
    setOpen1(true);
  };
  const handleClose1 = () => {
    setOpen1(false);
    setEdit("");
  };



  return (
    <div className="projects">
      <div className="d-flex justify-content-around">
        <Search placeholder={"Search for a employees"} data={DATA} searched={setEmployees} page={'employee'} />
        {/* for a popup */}
        <Buttons
          buttonStyle="btn--success--solid"
          buttonSize="btn-lg"
          text={"Add Employees"}
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
            <form onSubmit={Handeladdemployees}>
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
                      label="Add Her Name "
                      variant="standard"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                      id="standard-basic"
                      label="Add Her Email  "
                      variant="standard"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      id="standard-basic"
                      label="Add Her Phone  "
                      variant="standard"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextField
                      id="standard-basic"
                      label="Add Her Address  "
                      variant="standard"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <TextField
                      id="standard-basic"
                      label="Add Her Role  "
                      variant="standard"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    />

                    {/*  for a input select */}
                    <div>
                      <FormControl sx={{ m: 0.1, width: 438 }}>
                        <InputLabel id="demo-multiple-chip-label">
                          All Teams
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
                              label="All Teams"
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
                          {teams.map((tem) => (
                            <MenuItem
                              key={tem._id}
                              value={tem.name}
                              style={getStyles(tem.name, personName, theme)}
                            >
                              {tem.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    {/* END for a input select */}
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
                  text={"Save employee"}
                  type="submit"
                />
              </DialogActions>
            </form>
          </Dialog>

          {/* for edit popup  */}

          <Dialog
            open={open1}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose1}
            aria-describedby="alert-dialog-slide-description"
          >
            <form onSubmit={HandelEditEmployee}>
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
                      label="Add Her Name "
                      variant="standard"
                      value={edit.name}
                      onChange={(e) =>
                        setEdit({ ...edit, name: e.target.value })
                      }
                    />
                    <TextField
                      id="standard-basic"
                      label="Add Her Email  "
                      variant="standard"
                      value={edit.email}
                      onChange={(e) =>
                        setEdit({ ...edit, email: e.target.value })
                      }
                    />
                    <TextField
                      id="standard-basic"
                      label="Add Her Phone  "
                      variant="standard"
                      value={edit.phone}
                      onChange={(e) =>
                        setEdit({ ...edit, phone: e.target.value })
                      }
                    />
                    <TextField
                      id="standard-basic"
                      label="Add Her Address  "
                      variant="standard"
                      value={edit.address}
                      onChange={(e) =>
                        setEdit({ ...edit, address: e.target.value })
                      }
                    />
                    <TextField
                      id="standard-basic"
                      label="Add Her Role  "
                      variant="standard"
                      value={edit.role}
                      onChange={(e) =>
                        setEdit({ ...edit, role: e.target.value })
                      }
                    />

                    {/*  for a input select */}
                    <div>
                      <FormControl sx={{ m: 0.1, width: 442 }}>
                        <InputLabel id="demo-multiple-chip-label">
                          ALL Teams
                        </InputLabel>
                        <Select
                          // value={edit.values.project_id}
                          // onChange={(e) =>
                          //   setEdit({
                          //     ...edit,
                          //     values: {
                          //       ...edit.values,
                          //       project_id: e.target.value,
                          //     },
                          //   })
                          // }
                          value={edit.teams_id}
                          onChange={(e) =>
                            setEdit({ ...edit, teams_id: e.target.value })
                          }
                        >
                          {teams.map((item, index) => (
                            <MenuItem value={item._id} key={index}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>

                    {/* END for a input select */}
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
                  text={"Save employee"}
                  type="submit"
                />
              </DialogActions>
            </form>
          </Dialog>

          {/* for edit popup  */}
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
                  <GroupAddOutlinedIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Name
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <GroupsOutlinedIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Email
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <PhoneAndroidIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Phone
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <PhoneAndroidIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Address
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <ConfirmationNumberIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    role
                  </span>
                </StyledTableCell>

                {/* <StyledTableCell align="left" style={{ width: "25%" }}>
                  <GroupsOutlinedIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Team_id
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
                {employees &&
                  employees.map((item, index) => {
                    return (
                      <StyledTableRow key={index} className="main_row">
                        <StyledTableCell
                          lign="left"
                          style={{ paddingTop: "12px", paddingBottom: "12px" }}
                        >
                          {/* ahmad */}
                          {item.name}
                        </StyledTableCell>

                        <StyledTableCell
                          lign="left"
                          style={{ paddingTop: "12px", paddingBottom: "12px" }}
                        >
                          {item.email}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {item.phone}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {item.address}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {item.role}
                        </StyledTableCell>

                        {/* <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                    
                          {item.teams.name}
                        </StyledTableCell>  */}

                        <StyledTableCell align="left" style={{ padding: 0 }}>
                          <div className="button_table">
                            <Buttons
                              buttonStyle="btn--success--solid"
                              buttonSize="btn-md"
                              icon={<EditIcon />}
                              onClick={() =>
                                handleClickOpen1(
                                  item._id,
                                  item.name,
                                  item.email,
                                  item.phone,
                                  item.address,
                                  item.role,
                                  item.teams
                                )
                              }
                            />

                            <Buttons
                              buttonStyle="btn--danger--solid"
                              buttonSize="btn-md"
                              icon={<DeleteOutlineIcon />}
                              onClick={() => Handeldeleteemloyee(item._id)}
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
export default Employees;
