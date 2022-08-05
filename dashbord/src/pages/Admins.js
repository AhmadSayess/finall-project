// import React, { useState } from "react";
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
import CallToActionIcon from "@mui/icons-material/CallToAction";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

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

function Admins() {
  const [admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllAdmin = async () => {
    await axios
      .get("http://localhost:5000/api/admin")
      .then((res) => {
        if (res.status === 200) {
          setAdmin(res.data.response);
          setLoading(false);

          // console.log(res.data.response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllAdmin();
    setLoading(true);
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
        <Search placeholder="Search for a admin" />
        {/* for a popup */}
        <Buttons
          buttonStyle="btn--success--solid"
          buttonSize="btn-lg"
          text={"Add  Admin"}
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
                  {/* for the input in the popup */}
                  <TextField
                    id="standard-basic"
                    label="Enter your full name"
                    variant="standard"
                  />

                  <TextField
                    id="standard-basic"
                    label="Enter your email"
                    variant="standard"
                  />

                  <TextField
                    id="filled-password-input"
                    label="Enter your password"
                    type="password"
                    autoComplete="current-password"
                    variant="standard"
                  />
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
                text={"Save Admin"}
                onClick={handleClose}
              />
            </DialogActions>
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
                  <PersonOutlinedIcon style={{ width: "20px" }} /> &nbsp;
                  <span
                    style={{
                      fontWeight: "bold",
                      verticalAlign: "bottom",
                    }}
                  >
                    FullName
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left">
                  <AttachEmailIcon /> &nbsp;
                  <span
                    style={{
                      fontWeight: "bold",
                      verticalAlign: "bottom",
                    }}
                  >
                    Email
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left">
                  <CallToActionIcon />{" "}
                  <span
                    style={{
                      fontWeight: "bold",
                      verticalAlign: "bottom",
                    }}
                  >
                    Action
                  </span>
                </StyledTableCell>
              </TableRow>
            </TableHead>

            {loading ? (
              <Loading />
            ) : (
              <TableBody>
                {admin &&
                  admin.map((item, index) => {
                    return (
                      <StyledTableRow key={index} className="main_row">
                        <StyledTableCell
                          lign="left"
                          style={{ paddingTop: "12px", paddingBottom: "12px" }}
                        >
                          {/* Ahmad sayess */} {item.fullname}
                        </StyledTableCell>

                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {item.email}
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
export default Admins;
