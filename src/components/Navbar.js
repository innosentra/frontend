import React, { useState, useEffect, useContext } from 'react'; // أضفنا useContext
import { 
  AppBar, Toolbar, Typography, Box, Button, IconButton,
  Drawer, List, ListItem, ListItemText, ListItemButton,
  Collapse, Divider, Menu, MenuItem, useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import { useNavigate, useLocation } from 'react-router-dom';
import { alpha, useTheme } from '@mui/material/styles';
import logo from '../images/logo.webp';
import { useTranslation } from 'react-i18next';
 
// استيراد السياق من App.js (تأكد من المسار الصحيح)
import { LanguageContext } from '../App'; 

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  
  // استخدام السياق بدلاً من التعامل المباشر
  const { setLanguage } = useContext(LanguageContext); 

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [langAnchorEl, setLangAnchorEl] = useState(null);
  const [productsAnchorEl, setProductsAnchorEl] = useState(null);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const openMenu = Boolean(anchorEl);
  const openLangMenu = Boolean(langAnchorEl);
  const openProductsMenu = Boolean(productsAnchorEl);
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleLangMenuClick = (event) => setLangAnchorEl(event.currentTarget);
  const handleLangMenuClose = () => setLangAnchorEl(null);
  const handleProductsMenuClick = (event) => setProductsAnchorEl(event.currentTarget);
  const handleProductsMenuClose = () => setProductsAnchorEl(null);
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  // دالة تغيير اللغة المعدلة
  const changeLanguage = (lng) => {
    // نستخدم دالة السياق التي تقوم باستدعاء Service وتخزين الخيار بشكل صحيح
    setLanguage(lng);
    handleLangMenuClose();
  };

  const handleNavigation = (path) => {
    handleMenuClose();
    handleProductsMenuClose();
    setMobileOpen(false);
    if (path.startsWith('#') && location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(path.replace('#', ''));
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 800);
    } else if (path.startsWith('#')) {
      const element = document.getElementById(path.replace('#', ''));
      if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      navigate(path);
    }
  };

  // ... باقي الكود كما هو تماماً دون تغيير ...
  // (التنسيقات والـ JSX لا تحتاج تعديل لأننا عدلنا المنطق فقط)
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const glowEffect = {
    transition: 'all 0.3s ease',
    border: '1px solid transparent',
    '&:hover, &:focus, &:active': {
      borderColor: theme.palette.secondary.main,
      boxShadow: `0 0 12px ${theme.palette.secondary.main}`,
      color: theme.palette.secondary.main,
    }
  };

  const navButtonStyle = {
    color: theme.palette.text.white, // تأكد أن text.white معرف في الثيم أو استخدم '#fff'
    fontWeight: 500,
    mx: 0.5,
    px: 2,
    ...glowEffect
  };
  
  const drawer = (
    <Box sx={{ width: 250, p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <img src={logo} alt="Logo" style={{ height: 30, width: 'auto' }} />
          <Typography variant="h6" fontWeight="bold" sx={{color: 'primary.main'}}>INNOSENTRA</Typography>
        </Box>
        <IconButton onClick={handleDrawerToggle}><CloseIcon /></IconButton>
      </Box>
      <Divider sx={{ mb: 2 }} />
      <List>
        <ListItem sx={{ mt: 2, p: 0, mb: 2 }}>
          <Button variant="contained" fullWidth onClick={() => handleNavigation('/contact')}>
            {t('nav_contact')}
          </Button>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => setMobileLangOpen(!mobileLangOpen)}>
            <LanguageIcon sx={{ mr: 1, fontSize: 20 }} />
            <ListItemText primary={i18n.language.toUpperCase()} />
            {mobileLangOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
        </ListItem>
        <Collapse in={mobileLangOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {['en', 'de', 'ar'].map((lang) => (
              <ListItemButton key={lang} sx={{ pl: 4 }} onClick={() => { changeLanguage(lang); setMobileOpen(false); }}>
                <ListItemText primary={t(`lang_${lang}`)} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <Divider sx={{ my: 1 }} />
        <ListItemButton onClick={() => handleNavigation('#home')}><ListItemText primary={t('nav_home')} /></ListItemButton>
        <ListItemButton onClick={() => handleNavigation('/exhibitions')}>
   <ListItemText primary={t('nav_exhibitions')} />
</ListItemButton>
        <ListItemButton onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}>
          <ListItemText primary={t('nav_solutions')} />
          {mobileSolutionsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <ListItemButton onClick={() => handleNavigation('#about')}><ListItemText primary={t('nav_about')} /></ListItemButton>
        <Collapse in={mobileSolutionsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              { path: '/supermarket', label: t('nav_supermarket') },
              { path: '/traffic', label: t('nav_traffic') },
              { path: '/security', label: t('nav_security') },
              { path: '/industry', label: t('nav_industry') },
              { path: '/construction', label: t('nav_construction') },
              { path: '/agriculture', label: t('nav_agriculture') },
              { path: '/data-recovery', label: t('dataRecovery.menuItem') }
            ].map((item) => (
              <ListItemButton key={item.path} sx={{ pl: 4 }} onClick={() => handleNavigation(item.path)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        
        <ListItemButton onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
          <ListItemText primary={t('nav_products')} />
          {mobileProductsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={mobileProductsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {[
              { path: '/edge-analytics', label: t('nav_product_edge_analytics') },
              { path: '/surveillance-tower', label: t('nav_product_surveillance_tower') },
              { path: '/home-monitor', label: t('nav_product_home_monitor') }
            ].map((item) => (
              <ListItemButton key={item.path} sx={{ pl: 4 }} onClick={() => handleNavigation(item.path)}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar 
        position="sticky" 
        elevation={scrolled ? 4 : 0} 
        sx={{ 
          backgroundColor: 'white', 
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? 'none' : '1px solid',
          borderColor: scrolled ? 'transparent' : 'custom.navbarBorder'
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', minHeight: '70px !important' }}>
          {/* Logo Section */}
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1, 
              cursor: 'pointer',
              px: { xs: 2, sm: 4 },
              height: '100%'
            }} 
            onClick={() => handleNavigation('/')}
          >
            <img src={logo} alt="Logo" style={{ height: 60, width: 'auto' }} />
            <Typography variant="h6" fontWeight="bold" sx={{ color: 'primary.main' }}>INNOSENTRA</Typography>
          </Box>
          
          {/* Menu Section */}
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            height: '100%',
            backgroundColor: 'primary.main', 
            px: { xs: 2, sm: 4 },
            py: 1,
            mr: { xs: 2, sm: 0 },
            borderRadius: { xs: '10px', sm: ' 30px 0 0 30px' }, 
            minWidth: { xs: '60px', sm: 'auto' }
          }}>
            {!isMobile ? (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Button onClick={handleLangMenuClick} startIcon={<LanguageIcon />} endIcon={<KeyboardArrowDownIcon />} sx={navButtonStyle}>
                  {i18n.language.toUpperCase()}
                </Button>
                <Menu anchorEl={langAnchorEl} open={openLangMenu} onClose={handleLangMenuClose}>
                  <MenuItem onClick={() => changeLanguage('en')}>{t('lang_en')}</MenuItem>
                  <MenuItem onClick={() => changeLanguage('de')}>{t('lang_de')}</MenuItem>
                  <MenuItem onClick={() => changeLanguage('ar')}>{t('lang_ar')}</MenuItem>
                </Menu>

                <Divider orientation="vertical" flexItem sx={{ mx: 1, height: 24, alignSelf: 'center', bgcolor: alpha(theme.palette.custom.whitePure, 0.2) }} />
                <Button onClick={() => handleNavigation('/exhibitions')} sx={navButtonStyle}>
  {t('nav_exhibitions')}
</Button>
                <Button onClick={handleMenuClick} endIcon={<KeyboardArrowDownIcon />} sx={navButtonStyle}>
                  {t('nav_solutions')}
                </Button>
                <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
                  <MenuItem onClick={() => handleNavigation('/supermarket')}>{t('nav_supermarket')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/traffic')}>{t('nav_traffic')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/security')}>{t('nav_security')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/industry')}>{t('nav_industry')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/construction')}>{t('nav_construction')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/agriculture')}>{t('nav_agriculture')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/data-recovery')}>{t('dataRecovery.menuItem')}</MenuItem>
                </Menu>

                <Button onClick={handleProductsMenuClick} endIcon={<KeyboardArrowDownIcon />} sx={navButtonStyle}>
                  {t('nav_products')}
                </Button>
                <Menu anchorEl={productsAnchorEl} open={openProductsMenu} onClose={handleProductsMenuClose}>
                  <MenuItem onClick={() => handleNavigation('/edge-analytics')}>{t('nav_product_edge_analytics')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/surveillance-tower')}>{t('nav_product_surveillance_tower')}</MenuItem>
                  <MenuItem onClick={() => handleNavigation('/home-monitor')}>{t('nav_product_home_monitor')}</MenuItem>
                </Menu>

                <Button onClick={() => handleNavigation('#home')} sx={navButtonStyle}>{t('nav_home')}</Button>
                
                
                <Button variant="outlined" onClick={() => handleNavigation('/contact')} 
                  sx={{ ...navButtonStyle, borderColor: alpha(theme.palette.custom.whitePure, 0.5), ml: 2 }}>
                  {t('nav_contact')}
                </Button>
                <Button onClick={() => handleNavigation('#about')} sx={navButtonStyle}>{t('nav_about')}</Button>
              </Box>
            ) : (
              <IconButton 
                onClick={handleDrawerToggle}
                sx={{ 
                  color: 'white',
                  borderRadius: '8px',
                  ...glowEffect 
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>{drawer}</Drawer>
    </>
  );
};
