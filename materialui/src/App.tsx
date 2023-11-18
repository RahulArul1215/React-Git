import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { AppBar, Autocomplete, Button, IconButton, Stack, TextField, Toolbar, Typography } from '@mui/material';
// import { red } from '@mui/material/colors';
import { useState } from 'react';
import './Components/Assests/style.css'

export default function Styles() {
    const cities = ['Delhi','Kovai','Chennai']
    const [val, setval] = useState<string|null>(null);
return (
    <div>
        <div className='container'>
            <AppBar sx={{backgroundColor: 'red'}}>
                <Toolbar>
                    <IconButton>
                        <DirectionsBusIcon/>
                    </IconButton>
                    <Typography variant='h5' sx={{flexGrow:1}}>RedBus</Typography>
                    <Stack direction='row' spacing={3}>
                        <Button variant='outlined' color='inherit'>Home</Button>
                        <Button variant='outlined' color='inherit'>About</Button>
                        <Button variant='text' color='inherit'>Service</Button>
                        <Button variant='contained' color='inherit'>Contact</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </div>
        <div style={{marginTop:"65px"}} >
        <Stack direction='column' spacing={3} sx={{ marginLeft: 'auto' }}>
            <TextField variant='outlined' color='error' label='Name' />
            <TextField variant='filled' color='warning' label='Email'  />
            <TextField variant='standard' color='success' label='Phno'  />
            </Stack>

            <Autocomplete
                options={cities}
                renderInput={params =><TextField {...params} label = "Cities"/>}
                value = {val}
                onChange={(event:any,newValue:string|null)=>setval(newValue)}
                freeSolo
            />
        </div>
    </div>
  )
}