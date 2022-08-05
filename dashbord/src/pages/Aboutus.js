import React from 'react'
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
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import TitleIcon from '@mui/icons-material/Title';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import SportsScoreIcon from '@mui/icons-material/SportsScore';



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





export const Aboutus = () => {
  return (
<div className="projects">
      {/* <div className="d-flex justify-content-around">
        <Search
          placeholder="Search for a postes"
        />
        <Buttons
          // onClick={() => handleOpenChild()}
          buttonStyle="btn--success--solid"
          buttonSize="btn-lg"
          text={"Add Postes"}
        />
      </div> */}

      <div
        className="projects_table"
        style={{ display: "flex", position: "relative", height: "100%" }}
      >
        <TableContainer>
          <Table sx={{ minWidth: 400 }} aria-label="contained table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <TitleIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                  Title
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <SelfImprovementIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                About us
                  </span>
                </StyledTableCell>
                <StyledTableCell align="left" style={{ width: "25%" }}>
                  <SportsScoreIcon style={{ width: "20px" }} /> &nbsp;
                  <span style={{ fontWeight: "bold", verticalAlign: "bottom" }}>
                Goals
                  </span>
                </StyledTableCell>
                {/* <StyledTableCell align="left" style={{ width: "25%" }}>
                  <AccountTreeIcon style={{ width: "20px" }} /> &nbsp;
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

            <TableBody>
              <StyledTableRow className="main_row">
                <StyledTableCell
                  lign="left"
                  style={{ paddingTop: "12px", paddingBottom: "12px" }}
                >
                 helo helo helo ....
                </StyledTableCell>

                <StyledTableCell component="th" scope="row" align="center">
                  twi in the ...
                </StyledTableCell>

                <StyledTableCell component="th" scope="row" align="center">
                dfdgddg ....
                </StyledTableCell>

                {/* <StyledTableCell component="th" scope="row" align="center">
                  team 1
                </StyledTableCell> */}

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
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
