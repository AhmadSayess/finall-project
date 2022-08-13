import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../components/shared/Loading";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Buttons from "../components/shared/Buttons";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Search from "../components/shared/Search";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CallToActionIcon from "@mui/icons-material/CallToAction";
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

function Teams() {
  //// for a input select ///
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    let pro = projects.filter((e) => e.name === event.target.value[0]);
    setProject(pro[0]._id);

    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //// for a input select ///

  const [Teams, setTeams] = useState([]); //// to get all teams ///
  const [loading, setLoading] = useState(false);

  //// to get all teams ///
  const getAllTeams = async () => {
    await axios
      .get("http://localhost:5000/api/teams")
      .then((res) => {
        if (res.status === 200) {
          setTeams(res.data);
          setDATA(res.data);

          setLoading(false);
          console.log("teams:", Teams);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setLoading(true);
    getAllTeams();
  }, []);
  //// to get all teams ///

  //// for to add a admin ///
  const [name,  setName] = useState(""); 
  const [project, setProject] = useState(""); 
  const data = {
    name,
    projects: project,
  };
  const Handeladdteam = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/teams", data)
      .then((res) => {
        setName("");
        setProject('')
        setOpen(false);
        getAllTeams();
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //// for to add a admin ///
  ////  satrt to edit a category ///
  const [edit, setEdit] = useState({  values: { name: "", project_id: "", id: "" }, });
  const HandelEditTeam = (e) => {
    e.preventDefault();
    const id1 = edit.values.id;
    // console.log("team id:", id1);
    axios
      .put("http://localhost:5000/api/teams/" + id1, {
        name: edit.values.name,
        projects: edit.values.project_id,
      })
      .then((res) => {
        // console.log("edit nae=me and project");
        setEdit({ open: false, values: { name: "", project_id: "", id: "" } });
        getAllTeams();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////  end to edit a category ///
  ////  satrt to delet a teams ///
  const Handeldeleteteam = (id) => {
    axios
      .delete(`http://localhost:5000/api/teams/${id}`)
      .then((res) => {
        setLoading(true);
        getAllTeams();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  ////  end to delet a teams ///

  ////  get  all projects to the select input ///
  const [projects, setProjects] = useState([]);
  const [DATA, setDATA] = useState([]); 

  const getAllProjects = async () => {
    await axios
      .get("http://localhost:5000/api/projects")
      .then((res) => {
        console.log("get all projects");
        if (res.status === 200) {
          setProjects(res.data.response);
          console.log("projects:", projects);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAllProjects();
  }, []);
  ////  get  all projects to the select input ///

  //// for a popup ///
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setName("");
    setProject('');
  };

  //// for a popup ///

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

  const handleClickOpen1 = (id, name, projects) => {
    const { _id } = projects;
    setEdit({ open: true, values: { name, project_id: _id, id } });
  };
  const handleClose1 = () => {
    setEdit({ open: false, values: { name: "", project_id: "", id: "" } });
  };

  return (
    <div className="projects">
      <div className="d-flex justify-content-around">
        <Search placeholder="Search for a teams" data={DATA} searched={setTeams} page={'teams'}/>
        {/* for a popup */}
        <Buttons
          buttonStyle="btn--success--solid"
          buttonSize="btn-lg"
          text={"Add  Team"}
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
            <form onSubmit={Handeladdteam}>
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
                      label=" Add  your Team"
                      variant="standard"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    {/*  for a input select */}
                    <div>
                      <FormControl sx={{ m: 0.1, width: 442 }}>
                        <InputLabel id="demo-multiple-chip-label">
                          ALL Projects
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
                              label="ALL Projects"
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
                          {projects.map((proj) => (
                            <MenuItem
                              key={proj._id}
                              value={proj.name}
                              style={getStyles(proj.name, personName, theme)}
                            >
                              {proj.name}
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
                  text={"Save team"}
                  type="submit"
                />
              </DialogActions>
            </form>
          </Dialog>

          {/* for the popup edit  */}

          <Dialog
            open={edit.open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose1}
            aria-describedby="alert-dialog-slide-description"
          >
            <form onSubmit={HandelEditTeam}>
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
                      label=" Edit Your Team"
                      variant="standard"
                      value={edit.values.name}
                      onChange={(e) => {
                        setEdit({
                          ...edit,
                          values: { ...edit.values, name: e.target.value },
                        });
                        console.log("edit:", edit);
                      }}
                    />

                    {/*  for a input select */}
                    <div>
                      <FormControl sx={{ m: 0.1, width: 442 }}>
                        <InputLabel id="demo-multiple-chip-label">
                          ALL Projects
                        </InputLabel>
                        {console.log("edit values in select:", edit.values)}
                        <Select
                          value={edit.values.project_id}
                          onChange={(e) =>
                            setEdit({
                              ...edit,
                              values: {
                                ...edit.values, project_id: e.target.value,
                              },
                            })
                          }
                        >
                          {projects.map((project, index) => (
                            <MenuItem value={project._id} key={index}>
                              {project.name}
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
                  onClick={handleClose1}
                />
                <Buttons
                  buttonStyle="btn--success--solid"
                  buttonSize="btn-lg"
                  text={"edit team"}
                  type="submit"
                />
              </DialogActions>
            </form>
          </Dialog>
          {/* for the popup edit  */}
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
                  <GroupsOutlinedIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Team Name
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <AccountTreeIcon /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Porjects
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
                {Teams &&
                  Teams.map((item, index) => {
                    // console.log("itemm", item);
                    return (
                      <StyledTableRow key={index} className="main_row">
                        <StyledTableCell
                          lign="left"
                          style={{ paddingTop: "12px", paddingBottom: "12px" }}
                        >
                          {item.name}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {item.projects.name}
                        </StyledTableCell>

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
                                  item.projects
                                )
                              }
                            />
                            <Buttons
                              buttonStyle="btn--danger--solid"
                              buttonSize="btn-md"
                              icon={<DeleteOutlineIcon />}
                              onClick={() => Handeldeleteteam(item._id)}
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
    // </div>
  );
}

export default Teams;
