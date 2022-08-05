import React from "react";
import Search from "../components/shared/Search";
import Buttons from "../components/shared/Buttons";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import MessageIcon from '@mui/icons-material/Message';

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

export const Message = () => {
  return (
    <div className="projects">
      <div className="d-flex justify-content-around">
        <Search placeholder="Search for a messages" />
        {/* <Buttons
        buttonStyle="btn--success--solid"
        buttonSize="btn-lg"
        text={"Add Employees"}
      /> */}
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
                  <AttachEmailIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Email
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <PhoneAndroidIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Phone number
                  </span>
                </StyledTableCell>

                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <MessageIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                    Message
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

            <TableBody>
              <StyledTableRow className="main_row">
                <StyledTableCell
                  lign="left"
                  style={{ paddingTop: "12px", paddingBottom: "12px" }}
                >
                  ahmad
                </StyledTableCell>

                <StyledTableCell component="th" scope="row" align="center">
                  ahmad@gmail.com
                </StyledTableCell>

                <StyledTableCell component="th" scope="row" align="center">
                  71554747
                </StyledTableCell>

                <StyledTableCell component="th" scope="row" align="center">
                  helo helo helo
                </StyledTableCell>

                <StyledTableCell align="left" style={{ padding: 0 }}>
                  <div className="button_table">
                    <Buttons
                      buttonStyle="btn--danger--solid"
                      buttonSize="btn-md"
                      icon={<DeleteOutlineIcon />}
                    />
                    {/* <Link to={`/dashboard/Projects/${''}`}> */}
                    <Buttons
                      buttonStyle="btn--success--solid"
                      buttonSize="btn-md"
                      // icon={<EditIcon />}
                    />
                    {/* </Link> */}
                  </div>
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
