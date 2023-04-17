

// - dynamic grid with three section: components, attachments, and price
// - mobile-first
// four columns: component, part, merchant, price

import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import AddPartModal from "./AddPartModal";
import { getComponentsByType } from "./GridHelpers";

// Create our number formatter.
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
  

export default function PartGrid(props){

    function createData(
        component,
        part,
        merchant,
        price,
      ) {
        return { component, part, merchant, price };
    }

    const rows = [
        createData("Stripped Lower", false, false, false),
        createData("Trigger", false, false, false),
        createData("Buffer Kit", false, false, false),
        createData("Stock", false, false, false),
        createData("Pistol Grip", false, false, false),
        createData("Stripped Upper", false, false, false),
        createData("Forward Assist", false, false, false),
        createData("Dust Cover", false, false, false),
        createData("Barrel", false, false, false),
        createData("Handguard", false, false, false),
        createData("Gas Tube", false, false, false),
        createData("Gas Block", false, false, false),
        createData("BCG", false, false, false),
        createData("Charging Handle", false, false, false),
        createData("Attachments", false, false, false),
    ]

    const [loadingPart, setLoadingPart] = useState(false);
    const [category, setCategory] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [componentRowData, setComponentRowData] = useState([]);


    async function handleAddPart(component){
        setLoadingPart(true);
        setIsModalOpen(true);
        let rows = await getComponentsByType(component.replace(" ", "_").toLowerCase());
        setLoadingPart(false);
        setComponentRowData(rows)
        console.log(rows);
        setCategory(component);
        console.log(component);
    }

    return(
        <>
        <AddPartModal 
        loading={loadingPart} 
        isOpen={isModalOpen} 
        category={category} 
        rows={componentRowData}
        onClose={() => setIsModalOpen(false)}/>
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="main table">
                <TableHead>
                    <TableRow>
                        <TableCell>Component</TableCell>
                        <TableCell align="right">Part</TableCell>
                        <TableCell align="right">Merchant</TableCell>
                        <TableCell align="right">Price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component={"th"} scope="row">
                                <Typography variant="h6">
                                    {row.component}
                                </Typography>
                            </TableCell>
                            <TableCell align="right">
                                {!row.part ? (
                                <Button variant="outlined" sx={{textTransform: 'none'}} onClick={() => handleAddPart(row.component)}>
                                    + Add {row.component}
                                </Button>
                                ) : (<b>{row.part}</b>)}
                            </TableCell>
                            <TableCell align="right">
                                {row.merchant}
                            </TableCell>
                            <TableCell align="right">
                                {row.price && (<span>{formatter.format(row.price)}</span>) }
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}