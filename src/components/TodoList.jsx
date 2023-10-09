import React from 'react';
import { AgGridReact } from 'ag-grid-react';


import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS

import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


function TodoList() {
    const [todo, setTodo] = React.useState({
        description: '',
        date: null,
        priority: ''
      });
      const [todos, setTodos] = React.useState([]);
      const gridRef = React.useRef();
    
      const [columnDefs] = React.useState([
        { field: 'description' , sortable: true , filter: true , floatingFilter: true },
        { field: 'priority' , sortable: true , filter: true , floatingFilter: true, 
          cellStyle: params => params.value === "High" ? { color: 'red' } : { color: 'black' }
        },
        { field: 'date' , sortable: true , filter: true , floatingFilter: true, valueFormatter: params => params.value.format("DD.MM.YYYY")}
      ]);
    
      const addTodo = () => {
        setTodos([...todos, todo]);
        setTodo({description: '', date: null, priority: ''});
      }
    
      const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length > 0 ) {
        const row = gridRef.current.getSelectedNodes()[0].id;
        setTodos(todos.filter((item, index) => row != index));
        }
        else {
          alert('Select at least one row.')
        }
      }
    
      const dateChange = (date) => {
        setTodo({ ...todo, date: date });
      };

    return (
        <Container>

        <Stack 
        direction="row" 
        spacing={2} 
        alignItems="center" 
        justifyContent="center"
        mt={2}
        >
        <TextField
        label='Description'
        value={todo.description} 
        onChange={e => setTodo({...todo, description: e.target.value})} 
        />
        <TextField
        label='Priority'
        value={todo.priority} 
        onChange={e => setTodo({...todo, priority: e.target.value})} 
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Date"
          format='DD.MM.YYYY'
          value={todo.date}
          onChange={date => dateChange(date)} //onChange={valle => setTodo({})}
        />
        </LocalizationProvider>
        
        <Button variant="contained" color="success" onClick={addTodo}>Add</Button>
        <Button variant="contained" color="error" onClick={deleteTodo}>Delete</Button>

        </Stack>
      <Stack alignItems="center" justifyContent="center">
        <div className='ag-theme-material' style={{ width: 600, height: 500 }}>
          <AgGridReact
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}
            rowSelection="single"
            columnDefs={columnDefs}
            rowData={todos}
            animateRows={true}>
          </AgGridReact>
        </div>
      </Stack>
        
    </Container>
    );
}

export default TodoList;
