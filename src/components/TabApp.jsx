import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Home from './home';
import TodoList from './Todolist';



function TabApp() {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, value) => {
        setValue(value);
        }


    return (
    <>
        <Tabs value={value} onChange={handleChange}>
        <Tab value="one" label="Home" />
        <Tab value="two" label="Todolist" />
        </Tabs>
        {value === 'one' && <div><Home /></div>}
        {value === 'two' && <div><TodoList /></div>}
      

        </>
    )
}
export default TabApp;
