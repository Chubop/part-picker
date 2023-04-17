import {
    Box,
    Button,
    CircularProgress,
    Modal,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination,
    Typography,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import category_descriptions from "../../json/category_descriptions.json";
  
  export default function AddPartModal(props) {
    const [sortOrder, setSortOrder] = useState("asc");
    const [rows, setRows] = useState(props.rows);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
  
    useEffect(() => {
      setRows(props.rows);
    }, [props.rows]);
  
    const style = {
      position: "absolute",
      overflowY: "scroll",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "80vw",
      height: "90vh",
      bgcolor: "background.paper",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
      display: props.loading && "flex",
      alignItems: props.loading && "center",
      justifyContent: props.loading && "center",
    };
  
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
  
    // function createData(component, merchant, price) {
    //   return { component, merchant, price };
    // }
  
    const handleAddPart = () => {
      props.onClose();
    };
  
    const toggleSortOrder = () => {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      setRows(
        [...rows].sort((a, b) => {
          let aPrice = parseFloat(a.price.replace("$", ""));
          let bPrice = parseFloat(b.price.replace("$", ""));
          if (sortOrder === "asc") {
            return aPrice - bPrice;
          } else {
            return bPrice - aPrice;
          }
        })
      );
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
      <>
        <Modal
          open={props.isOpen}
          onClose={props.onClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style} elevation={0}>
            {props.loading && <CircularProgress size={125} thickness={5} />}
            {!props.loading && (
              <>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  {props.category}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {category_descriptions[props.category.toLowerCase()]}
                </Typography>
                <TableContainer component={Paper} elevation={0}>
                  <Table sx={{ minWidth: 600 }} aria-label="main table">
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>Component</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="right">
                          
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="right">
                          Price
                          <button onClick={toggleSortOrder}>
                            {sortOrder === "asc" ? "▲" : "▼"}
                          </button>
                        </TableCell>
                        <TableCell sx={{ fontWeight: "bold" }} align="right"></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                          >
                            <TableCell scope="row" id={"image"}>
                              <img
                                alt={"gun"}
                                src={row.image}
                                style={{ width: 150, border: "1px solid #EFEFEF" }}
                              />
                            </TableCell>
                            <TableCell component={"th"} scope="row" id={"component"}>
                              <Typography>
                                <a href={row.link} target="_blank" rel="noreferrer">
                                  {row.component}
                                </a>
                              </Typography>
                            </TableCell>
  

                            <TableCell align="right" id={"price"}>
                              <Typography variant="h5">
                                {row.price && (
                                  <span>
                                    {formatter.format(
                                      parseFloat(row.price.replace("$", ""))
                                    )}
                                  </span>
                                )}
                              </Typography>
                            </TableCell>
                            <TableCell align="right" id={"add"}>
                              {(
                                <Button
                                  variant="outlined"
                                  sx={{ textTransform: "none" }}
                                  onClick={handleAddPart}
                                >
                                  + Add
                                </Button>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableContainer>
              </>
            )}
          </Box>
        </Modal>
      </>
    );
  }
  
  