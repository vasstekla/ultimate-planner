import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { UserContext } from '../UserContext';
import { useContext } from 'react'

export default function ButtonAppBar() {
    const { loggedIn, login, logout } = useContext(UserContext)
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Ultimate planner
            </Typography>
            <Button color="inherit" onClick={loggedIn ? logout : login}>Log {loggedIn ? 'out' : 'in'}</Button>
            </Toolbar>
        </AppBar>
        </Box>
    );
}