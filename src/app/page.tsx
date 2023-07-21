"use client";

import styles from "./page.module.css";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Customer } from "./type";

//helper function for calculate quotient and remainder
const divmod = (x: number, y: number): number[] => [Math.floor(x / y), x % y];

export default function Home() {

  const limit = 10;
  const MIN_PAGE = 0

  //All the customer data
  const [customerData, setCustomerData] = useState<Customer[]>([]);
  //Limited number of data based on current page
  const [rows, setRows] = useState<Customer[]>([]);
  const [currentPage, setCurrentPage] = useState(MIN_PAGE);

  //find quotient and remainder
  const [quotient, remainder] = divmod(customerData.length, limit);
  //calculate max page number
  const MAX_PAGE = remainder === 0 ? quotient-1 : quotient


  //current page number + 1
  const incrementPage = useCallback(() => {
    if(currentPage === MAX_PAGE) return
    setCurrentPage(prev=>prev+1)
  }, [currentPage]);

  //current page number - 1
  const decrementPage = useCallback(() => {
    if(currentPage === MIN_PAGE) return
    setCurrentPage(prev=>prev-1)
  }, [currentPage]);

  //fetch data from API
  useEffect(()=>{
    fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/customer`)
      .then((res)=>res.json())
      .then((res)=>res.data as Customer[])
      .then((data)=>{
        setCustomerData(data)
        //set default row data
        setRows(data.slice(0, limit))
      })
      .catch(err=> { throw new Error(err) } )
    setRows(customerData.slice(0, limit));
  },[])

  //if current page change, change the row data
  useEffect(() => {
    const start = limit * currentPage;
    const end = start + limit;
    setRows(customerData.slice(start, end));
  }, [currentPage])

  return (
    <main className={styles.main}>
      <div>
        <div style={{ minHeight: '350px' }}>
          {rows && (
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 650 }}
                size="small"
                aria-label="a dense table"
              >
                <TableBody>
                  {rows.map((row: Customer) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 }}}
                    >
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell>{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {MAX_PAGE>MIN_PAGE && <Button
            variant="text"
            onClick={decrementPage}
          >
            Previous Page
          </Button>}
          {MAX_PAGE>MIN_PAGE && <Button
            variant="text"
            onClick={incrementPage}
          >
            Next Page
          </Button>}
        </div>
      </div>
    </main>
  );
}
