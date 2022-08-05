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

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

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
  //// for a input select ///
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //// for a input select ///

  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllEmployees = async () => {
    await axios
      .get("http://localhost:5000/api/employes")
      .then((res) => {
        if (res.status === 200) {
          setEmployees(res.data);
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

  //// for a popup ///
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //// for a popup ///

  return (
    <div className="projects">
      <div className="d-flex justify-content-around">
        <Search placeholder="Search for a employees" />
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
                  />
                  <TextField
                    id="standard-basic"
                    label="Add Her Email  "
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Add Her Phone  "
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Add Her Address  "
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Add Her Role  "
                    variant="standard"
                  />

                  {/*  for a input select */}
                  <div>
                    <FormControl sx={{ m: 0.1, width: 438 }}>
                      <InputLabel id="demo-multiple-chip-label">Teams_id</InputLabel>
                      <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={personName}
                        onChange={handleChange}
                        input={
                          <OutlinedInput
                            id="select-multiple-chip"
                            label="Teams_id"
                          />
                        }
                        renderValue={(selected) => (
                          <Box
                            sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}
                          >
                            {selected.map((value) => (
                              <Chip key={value} label={value} />
                            ))}
                          </Box>
                        )}
                        MenuProps={MenuProps}
                      >
                        {names.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
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
                text={"Save Project"}
                onClick={handleClose}
              />
            </DialogActions>
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
                  <GroupAddOutlinedIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Name
                  </span>
                </StyledTableCell>

                {/* <StyledTableCell align="left" style={{ width: "25%" }}>
                  <GroupsOutlinedIcon   style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Email
                  </span>
                </StyledTableCell> */}

                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <PhoneAndroidIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Phone
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <ConfirmationNumberIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    role
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <GroupsOutlinedIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Team_id
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
                {employees &&
                  employees.map((item, index) => {
                    console.log("itemm", item);
                    return (
                      <StyledTableRow key={index} className="main_row">
                        <StyledTableCell
                          lign="left"
                          style={{ paddingTop: "12px", paddingBottom: "12px" }}
                        >
                          {/* ahmad */}
                          {item.name}
                        </StyledTableCell>

                        {/* <StyledTableCell
                  lign="left"
                  style={{ paddingTop: "12px", paddingBottom: "12px" }}
                >
                  {item.email}
                </StyledTableCell> */}

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {/* 71554747 */}
                          {item.phone}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {/* leader */}
                          {item.role}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {/* team 1 */}
                          {item.teams.name}
                        </StyledTableCell>

                        <StyledTableCell align="left" style={{ padding: 0 }}>
                          <div className="button_table">
                            {/* <Link to={`/dashboard/Projects/${''}`}> */}
                            <Buttons
                              buttonStyle="btn--success--solid"
                              buttonSize="btn-md"
                              icon={<EditIcon />}
                            />
                            {/* </Link> */}
                            <Buttons
                              buttonStyle="btn--danger--solid"
                              buttonSize="btn-md"
                              icon={<DeleteOutlineIcon />}
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
