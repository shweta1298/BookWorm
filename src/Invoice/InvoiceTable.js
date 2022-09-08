import { DataGrid } from '@mui/x-data-grid';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClassNames } from '@emotion/react';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 90,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];
const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
const InvoiceTable = () => {

    const onRowsSelectionHandler = (arr) => {
        const selectedRowsData = arr.map((id) => rows.filter((row) => !(row.id === id)));
        console.log(selectedRowsData);
    };
    return (

        <div className='m-5 ps-2 ' style={{ height: 400, width: '90%' }}>
            <h3>Invoice</h3>
            <DataGrid

                rows={rows}
                columns={columns}
                pageSize={10}
                checkboxSelection
                /*  onSelectionModelChange={(arr) => { console.log(arr); onRowsSelectionHandler(arr) }} */
                onSelectionModelChange={(ids) => {
                    const selectedIDs = new Set(ids);
                    const selectedRowData = rows.filter((row) =>
                        !selectedIDs.has(row.id)
                    );
                    console.log(selectedRowData);
                }}

            />
            <div>
                <p style={{color : '#FF3B3F'}}><i>select checkbox of item which you want to remove from list</i></p>
                <Button size="sm" style={{ backgroundColor: "#FF3B3F" }}>Remove Selected Item</Button>
            </div>
            <div className='mt-4 pt-3 square border rounded'>
                <Container>
                    <Row>
                        <Col sm={8}><p><b>Total amount to pay = { }</b></p>
                        </Col>
                        <Col sm={4}> <Button style={{ backgroundColor: "#FF3B3F" }}>Pay Now</Button></Col>
                    </Row>

                </Container>
            </div>
        </div>

    );
};
export default InvoiceTable;
  //  rowsPerPageOptions={[5]}
  //  pageSize={5}

  //dependency
  //npm install @material-ui/core --legacy-peer-deps
  //npm install @mui/x-data-grid --legacy-peer-deps
  //npm install @mui/material @emotion/react @emotion/styled --legacy-peer-deps
  //npm install bootstrap --legacy-peer-deps