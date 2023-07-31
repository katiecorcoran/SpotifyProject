import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  CssBaseline,
} from '@mui/material';

const App = () => {
  return (
      <div>
        <CssBaseline />
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">My App</Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent">
          <Toolbar />
          <List>
            <ListItem button>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
        </Drawer>
        <Container>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to My App!
          </Typography>
          <Typography variant="body1" gutterBottom>
            This is the content area of your app. You can start building your app
            from here.
          </Typography>
        </Container>
      </div>
  );
};

export default App;
