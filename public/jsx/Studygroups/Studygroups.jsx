import React, { useState, useEffect } from "react";
import { CircularProgress } from '@material-ui/core';
import {db} from '../../js/firebase';
import './style.scss';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function Studygroups(){
  const classes = useStyles();
  const [studygroups, setstudygroups] = useState([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    db.collection("studygroups").get()
      .then(data => {
        var newgroups = data.docs.map(docData => { setIsReady(true); return ({ docId: docData.id, ...docData.data() }) });
        newgroups.sort(function(a, b) {
          var aId = a.id;
          var bId = b.id;
          if (aId < bId) {
            return -1;
          }
          if (aId > bId) {
            return 1;
          }
          return 0;
        });
        setstudygroups(newgroups);
      })
  }, []);

  // useEffect(() => {
  //   console.log(studygroups);
  //   if (studygroups.length > 0 && !studygroups[0].workingTime) {
  //     studygroups.map(group => {
  //       db.collection("studygroups").doc(group.docId).collection("workingTime").get()
  //         .then(data => {
  //           const workingTimes = data.docs.map(doc => doc.data());
  //           let tempGroups = studygroups;
  //           tempGroups.find(e => e.docId == group.docId).workingtimes = workingTimes;
  //           setstudygroups(tempGroups);
  //           
  //         });
  //     });
  //   }
  // }, [studygroups]);
  return isReady !== false ? (
    <div>
      <h1>РОЗКЛАД ГУРТКІВ</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>№ з/п</StyledTableCell>
              <StyledTableCell align="center">Назва гуртка</StyledTableCell>
              <StyledTableCell align="right">Дні роботи</StyledTableCell>
              <StyledTableCell align="left">Час роботи</StyledTableCell>
              <StyledTableCell align="right">ПІБ керівника</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studygroups.map((item) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {item.id}
                </StyledTableCell>
                <StyledTableCell align="center">{item.name}</StyledTableCell>
                <StyledTableCell align="center">{item.day}</StyledTableCell>
                <StyledTableCell align="center">{item.time}</StyledTableCell>
                {/* {console.log("---------------")}
                {console.log(item.workingtimes)} 
                <StyledTableCell align="right">{item.workingtimes.map((time) => (<p>{time.day}</p>))}</StyledTableCell>
                <StyledTableCell align="left">{item.workingtimes.map((time) => (<p>{time.time}</p>))}</StyledTableCell> */}
                <StyledTableCell align="right">{item.teacherName}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
      ) : ( <div id="loader"><CircularProgress /></div> )
}
export default Studygroups;