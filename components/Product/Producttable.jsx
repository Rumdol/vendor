import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';

const columns = [
  { id: 'productId', label: 'Product ID', minWidth: 170 },
  { id: 'productName', label: 'Product Name', minWidth: 170 },
  { id: 'brand', label: 'Brand', minWidth: 170 },
  { id: 'gender', label: 'Gender', minWidth: 100 },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value) => `$${value.toFixed(2)}`,
  },
  { id: 'status', label: 'Status', minWidth: 100 },
  { id: 'action', label: 'Action', minWidth: 100 },
];

function createData(productId, productName, brand, gender, price, status, action) {
  return { productId, productName, brand, gender, price, status, action };
}

const rows = [
  createData('P001', 'Perfume 1', 'Brand A', 'Female', 29.99, 'Available', ''),
  createData('P002', 'Perfume 2', 'Brand B', 'Male', 35.99, 'Out of Stock', ''),
  createData('P003', 'Perfume 3', 'Brand C', 'Unisex', 19.99, 'Available', ''),
  createData('P004', 'Perfume 4', 'Brand D', 'Female', 50.00, 'Available', ''),
  createData('P005', 'Perfume 5', 'Brand E', 'Male', 45.50, 'Out of Stock', ''),
  createData('P006', 'Perfume 6', 'Brand F', 'Unisex', 30.00, 'Available', ''),
  createData('P007', 'Perfume 7', 'Brand G', 'Female', 25.99, 'Available', ''),
  createData('P008', 'Perfume 8', 'Brand H', 'Male', 39.99, 'Out of Stock', ''),
  createData('P009', 'Perfume 9', 'Brand I', 'Female', 28.50, 'Available', ''),
  createData('P010', 'Perfume 10', 'Brand J', 'Unisex', 33.99, 'Available', ''),
];

export default function ProductTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (productId) => {
    console.log(`Editing product: ${productId}`);
    // Add your edit logic here
  };

  const handleDelete = (productId) => {
    console.log(`Deleting product: ${productId}`);
    // Add your delete logic here
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.productId}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      if (column.id === 'action') {
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: '#2ec4b6',
                                marginRight: '8px',
                                '&:hover': {
                                  backgroundColor: '#2ec4b6',
                                },
                              }}
                              onClick={() => handleEdit(row.productId)}
                            >
                              Edit
                            </Button>
                            <Button
                              variant="contained"
                              sx={{
                                backgroundColor: 'rgba(46, 196, 182, 0.5)', // 50% opacity
                                '&:hover': {
                                  backgroundColor: 'rgba(46, 196, 182, 0.5)',
                                },
                              }}
                              onClick={() => handleDelete(row.productId)}
                            >
                              Delete
                            </Button>
                          </TableCell>
                        );
                      }
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
