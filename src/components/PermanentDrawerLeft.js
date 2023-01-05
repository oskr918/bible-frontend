import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BookIcon from '@mui/icons-material/Book';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarBorderIcon from '@mui/icons-material/StarBorder';
const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <HomeIcon sx={{ fontSize: 40 }}></HomeIcon> Biblia online
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
            <ListItem onClick={()=>window.location.replace("http://localhost:3000")} key="inicio" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <HomeIcon></HomeIcon>
                </ListItemIcon>
                <ListItemText primary="inicio" />
              </ListItemButton>
            </ListItem>
        </List>

        <ListItem onClick={()=>window.location.replace("http://localhost:3000/bible")} key="biblia" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <BookIcon></BookIcon>
                </ListItemIcon>
                <ListItemText primary="Biblia" />
              </ListItemButton>
            </ListItem>

            <ListItem key="books" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <MenuBookIcon></MenuBookIcon>
                </ListItemIcon>
                <ListItemText primary="Books" />
              </ListItemButton>
            </ListItem>

        <Divider />
        <List>
          
            <ListItem key="perfil" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText primary="Perfil" />
              </ListItemButton>
            </ListItem>
         
            <ListItem onClick={()=>window.location.replace("http://localhost:3000/favorites")} key="favoritos" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                 <StarBorderIcon></StarBorderIcon>
                </ListItemIcon>
                <ListItemText primary="favoritos" />
              </ListItemButton>
            </ListItem>
            
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
</>
  );
}