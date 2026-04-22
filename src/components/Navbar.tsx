'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import BMCButton from './BMCButton';
import { useColorScheme } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const navItems = [
  { label: 'Home', href: '/', icon: <HomeIcon /> },
  { label: 'Blog', href: '/blog', icon: <ArticleIcon /> },
  { label: 'Projects', href: '/projects', icon: <CodeIcon /> },
];

export default function Navbar() {
  const { mode, setMode } = useColorScheme();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { xs: 'flex', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box component={Link} href="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <Box 
              component="img"
              src="/favicon-32x32.png" 
              alt="Cat icon"
              sx={{ width: 32, height: 32, borderRadius: '50%', mr: 1.5 }}
            />
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              İspik
            </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, mr: 2 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                href={item.href}
                sx={{
                  color: pathname === item.href ? 'primary.main' : 'inherit',
                  fontWeight: pathname === item.href ? 'bold' : 'normal',
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.5, sm: 1.5 } }}>
            <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
              <BMCButton />
            </Box>
            <IconButton
              color="inherit"
              component="a"
              href="https://www.buymeacoffee.com/ispik6441"
              target="_blank"
              aria-label="Buy me a coffee"
              sx={{ display: { xs: 'flex', sm: 'none' } }}
            >
              <LocalCafeIcon />
            </IconButton>
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/arsabutispik"
              target="_blank"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton color="inherit" onClick={toggleMode}>
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1.5, mt: 2 }}>
              <Avatar 
                src="/android-chrome-192x192.png" 
                alt="İspik" 
                sx={{ width: 80, height: 80, boxShadow: 3 }} 
              />
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                İspik
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Software Developer
              </Typography>
            </Box>
            
            <Divider sx={{ mb: 2, mx: 2 }} />
            
            <List sx={{ px: 2, flexGrow: 1 }}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <ListItem key={item.label} disablePadding sx={{ mb: 1 }}>
                    <ListItemButton
                      component={Link}
                      href={item.href}
                      selected={isActive}
                      sx={{
                        borderRadius: 2,
                        color: isActive ? 'primary.main' : 'text.primary',
                        '&.Mui-selected': {
                          bgcolor: 'action.selected',
                          '&:hover': {
                            bgcolor: 'action.hover',
                          }
                        }
                      }}
                    >
                      <ListItemIcon sx={{ color: isActive ? 'primary.main' : 'inherit', minWidth: 40 }}>
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText 
                        primary={item.label} 
                        primaryTypographyProps={{ fontWeight: isActive ? 'bold' : 'medium' }} 
                      />
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
            
            <Box sx={{ p: 3, textAlign: 'center' }}>
              <Typography variant="caption" color="text.secondary">
                © {new Date().getFullYear()} İspik
              </Typography>
            </Box>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
}
