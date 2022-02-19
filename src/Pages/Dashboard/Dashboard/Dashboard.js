import * as React from 'react';
import useAuth from './../../../hooks/useAuth';
import {
    NavLink,
    Outlet,
    Route,
    Routes,
    useNavigate
} from "react-router-dom";
import ManageReview from '../ManageReview/ManageReview';
import AddProduct from '../AddProduct/AddProduct';
import DashboardHome from './../DashboardHome/DashboardHome';
import { Alert, Button, AppBar, Box, CssBaseline, Divider, Drawer, Typography, IconButton, List, ListItem, Toolbar } from '@mui/material';
import logo from '../../../Images/IdeaLogo.png';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import GridViewIcon from '@mui/icons-material/GridView';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import RateReviewIcon from '@mui/icons-material/RateReview';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import HomeIcon from '@mui/icons-material/Home';


const drawerWidth = 250;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user, logout } = useAuth();
    // adminlogout
    const navigate = useNavigate()

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box>
            <List sx={{ border: '2px solid #ccc', borderRadius: '20px 0 20px 20px' }}>
                <Box sx={{display: 'flex', alignItems:'center'}}><img src={logo} alt="img" style={{ height: '60px', width: '60px' }}></img> <Typography sx={{ mt: 1, fontWeight: '600' }}> IDEA SWAP</Typography></Box>
                <NavLink to="/dashboard" style={{ color: '#000', textDecoration: 'none', }}>
                    <ListItem button sx={{ py: 3, fontSize: '1.2rem' }}>
                        <GridViewIcon sx={{mr: 2}}/>
                        DASHBOARD
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/dashboard/addProduct" style={{ color: '#000', textDecoration: 'none' }}>
                    <ListItem button sx={{ py: 3, fontSize: '1.2rem'}}>
                        <ProductionQuantityLimitsIcon sx={{mr: 2}}/>
                        ADD PRODUCTS
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/dashboard/manageReview" style={{ color: '#000', textDecoration: 'none' }}>
                    <ListItem button sx={{ py: 3, fontSize: '1.2rem'}}>
                        <RateReviewIcon sx={{mr: 2}}/>
                        MANAGE REVIEW
                    </ListItem>
                </NavLink>
                <Divider />
                <NavLink to="/dashboard/manageReview" style={{ color: '#000', textDecoration: 'none' }}>
                    <ListItem button sx={{ py: 3, fontSize: '1.2rem'}}>
                        <ManageAccountsIcon sx={{mr: 2}}/>
                        MANAGE USERS
                    </ListItem>
                </NavLink>
                <Divider />
                <ListItem button onClick={logout} sx={{ py: 3, fontSize: '1.2rem' }}>
                    <PowerSettingsNewIcon sx={{mr: 2}} />
                    LOGOUT
                </ListItem>
            </List>
        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar style={{ background: '#fff', color: '#000' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuOpenIcon />
                    </IconButton>
                    <Alert severity="info" sx={{ flexGrow: 1 }}>
                        WELCOME — <strong> {user.displayName.toUpperCase()}</strong>
                    </Alert>
                    
                    <Button variant="contained" onClick={() => navigate('/home')}>
                        <HomeIcon sx={{height: '30px'}}/>
                    </Button>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet></Outlet>

                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="/dashboard/manageReview" element={<ManageReview />} />
                    <Route path="/dashboard/addProduct" element={<AddProduct />} />
                </Routes>
            </Box>
        </Box >
    );
}

export default Dashboard;
