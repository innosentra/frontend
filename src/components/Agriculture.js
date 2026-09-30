<<<<<<< HEAD
import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NatureIcon from '@mui/icons-material/Nature'; // تم تغيير الأيقونة هنا لتجنب الخطأ
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import agricultureVideo from '../videos/agriculture-demo.mp4'; 
import videoPoster from '../images/agriculture-poster.webp';


const MotionBox = motion(Box);

export const Agriculture = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isAr = i18n.language === 'ar';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    t('agriculture_f1'), 
    t('agriculture_f2'), 
    t('agriculture_f3'), 
    t('agriculture_f4'), 
    t('agriculture_f5')
  ];
  
  const importance = [
    t('agriculture_i1'), 
    t('agriculture_i2'), 
    t('agriculture_i3')
  ];

  return (
    <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ overflowX: 'hidden', bgcolor: 'background.default' }}>
      
      {/* Hero Header: نمط انسيابي متدرج مع أنيميشن زراعي */}
      <Box sx={{ 
        bgcolor: 'background.dark', 
        color: 'white', 
        py: { xs: 6, md: 10 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a1f0f 0%, #000000 100%)',
      }}>
        
        {/* أنيميشن أوراق الشجر العائمة في الخلفية (باستخدام NatureIcon) */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, zIndex: 0, pointerEvents: 'none' }}>
          <MotionBox
            animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            sx={{ position: 'absolute', top: '15%', left: '10%' }}
          >
            <NatureIcon sx={{ fontSize: 60, color: '#4caf50' }} />
          </MotionBox>
          <MotionBox
            animate={{ y: [0, 40, 0], rotate: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            sx={{ position: 'absolute', top: '40%', right: '15%' }}
          >
            <NatureIcon sx={{ fontSize: 100, color: '#81c784' }} />
          </MotionBox>
          <MotionBox
            animate={{ y: [0, -20, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            sx={{ position: 'absolute', bottom: '15%', left: '30%' }}
          >
            <NatureIcon sx={{ fontSize: 45, color: '#a5d6a7' }} />
          </MotionBox>
        </Box>

        {/* محتوى الـ Hero */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.6rem' }, mb: 2 }}>
              {t('agriculture_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: '700px', mx: 'auto' }}>
              {t('agriculture_hero_subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content Section: Flex Layout */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'flex-start', 
            gap: { xs: 6, md: 10 } 
          }}>
            
            {/* جهة النص: Flex Column */}
            <Box sx={{ 
              width: { xs: '100%', md: '60%' },
              display: 'flex',
              flexDirection: 'column'
            }}>
              <MotionBox
                initial={{ opacity: 0, x: isAr ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, justifyContent: {xs: 'center', md: 'flex-start'} }}>
                  <MotionBox
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                  >
                    <AgricultureIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                  </MotionBox>
                  <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.6rem' } }}>
                    {t('agriculture_section_title')}
                  </Typography>
                </Box>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 6, lineHeight: 1.8, textAlign: {xs: 'center', md: 'justify'} }}>
                  {t('agriculture_section_subtitle')}
                </Typography>
              </MotionBox>

              {/* القوائم */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: 5 
              }}>
                {/* القائمة الأولى: الميزات */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="primary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
                    {t('agriculture_track_label')}
                  </Typography>
                  <List dense disablePadding>
                    {features.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                          <NatureIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* القائمة الثانية: الأهمية */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="secondary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                    {t('agriculture_matters_label')}
                  </Typography>
                  <List dense disablePadding>
                    {importance.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                          <CheckCircleOutlineIcon fontSize="small" color="secondary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>

            {/* جهة الفيديو */}
            <MotionBox 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              sx={{ 
                width: { xs: '100%', md: '40%' },
                position: 'sticky',
                top: '100px'
              }}
            >
              <Box sx={{ flex: 1, width: '100%', position: 'relative' }}>
                <Box 
                  component="video" autoPlay muted loop playsInline poster={videoPoster}
                  sx={{ width: '100%', borderRadius: '50px 5px 50px 5px', boxShadow: theme.shadows[8], bgcolor: 'custom.blackPure' }}
                >
                  <source src={agricultureVideo} type="video/mp4" />
                </Box>
              </Box>
            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
=======
import React, { useEffect } from 'react';
import { 
  Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material';
import AgricultureIcon from '@mui/icons-material/Agriculture'; 
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import NatureIcon from '@mui/icons-material/Nature'; // تم تغيير الأيقونة هنا لتجنب الخطأ
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import agricultureVideo from '../videos/agriculture-demo.mp4'; 
import videoPoster from '../images/agriculture-poster.webp';


const MotionBox = motion(Box);

export const Agriculture = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isAr = i18n.language === 'ar';

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    t('agriculture_f1'), 
    t('agriculture_f2'), 
    t('agriculture_f3'), 
    t('agriculture_f4'), 
    t('agriculture_f5')
  ];
  
  const importance = [
    t('agriculture_i1'), 
    t('agriculture_i2'), 
    t('agriculture_i3')
  ];

  return (
    <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ overflowX: 'hidden', bgcolor: 'background.default' }}>
      
      {/* Hero Header: نمط انسيابي متدرج مع أنيميشن زراعي */}
      <Box sx={{ 
        bgcolor: 'background.dark', 
        color: 'white', 
        py: { xs: 6, md: 10 },
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #0a1f0f 0%, #000000 100%)',
      }}>
        
        {/* أنيميشن أوراق الشجر العائمة في الخلفية (باستخدام NatureIcon) */}
        <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, zIndex: 0, pointerEvents: 'none' }}>
          <MotionBox
            animate={{ y: [0, -30, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            sx={{ position: 'absolute', top: '15%', left: '10%' }}
          >
            <NatureIcon sx={{ fontSize: 60, color: '#4caf50' }} />
          </MotionBox>
          <MotionBox
            animate={{ y: [0, 40, 0], rotate: [0, -20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            sx={{ position: 'absolute', top: '40%', right: '15%' }}
          >
            <NatureIcon sx={{ fontSize: 100, color: '#81c784' }} />
          </MotionBox>
          <MotionBox
            animate={{ y: [0, -20, 0], x: [0, 20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            sx={{ position: 'absolute', bottom: '15%', left: '30%' }}
          >
            <NatureIcon sx={{ fontSize: 45, color: '#a5d6a7' }} />
          </MotionBox>
        </Box>

        {/* محتوى الـ Hero */}
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <MotionBox
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.6rem' }, mb: 2 }}>
              {t('agriculture_hero_title')}
            </Typography>
            <Typography variant="h5" sx={{ opacity: 0.8, fontWeight: 300, fontSize: { xs: '1rem', md: '1.15rem' }, maxWidth: '700px', mx: 'auto' }}>
              {t('agriculture_hero_subtitle')}
            </Typography>
          </MotionBox>
        </Container>
      </Box>

      {/* Content Section: Flex Layout */}
      <Box sx={{ py: { xs: 6, md: 12 } }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            alignItems: 'flex-start', 
            gap: { xs: 6, md: 10 } 
          }}>
            
            {/* جهة النص: Flex Column */}
            <Box sx={{ 
              width: { xs: '100%', md: '60%' },
              display: 'flex',
              flexDirection: 'column'
            }}>
              <MotionBox
                initial={{ opacity: 0, x: isAr ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, justifyContent: {xs: 'center', md: 'flex-start'} }}>
                  <MotionBox
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
                  >
                    <AgricultureIcon sx={{ fontSize: 48, color: 'primary.main' }} />
                  </MotionBox>
                  <Typography variant="h4" sx={{ fontWeight: 800, fontSize: { xs: '1.8rem', md: '2.6rem' } }}>
                    {t('agriculture_section_title')}
                  </Typography>
                </Box>

                <Typography variant="h6" color="text.secondary" sx={{ mb: 6, lineHeight: 1.8, textAlign: {xs: 'center', md: 'justify'} }}>
                  {t('agriculture_section_subtitle')}
                </Typography>
              </MotionBox>

              {/* القوائم */}
              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' }, 
                gap: 5 
              }}>
                {/* القائمة الأولى: الميزات */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="primary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
                    {t('agriculture_track_label')}
                  </Typography>
                  <List dense disablePadding>
                    {features.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                          <NatureIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* القائمة الثانية: الأهمية */}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="subtitle1" fontWeight="900" color="secondary" sx={{ mb: 3, display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                    {t('agriculture_matters_label')}
                  </Typography>
                  <List dense disablePadding>
                    {importance.map((text, i) => (
                      <ListItem key={i} disableGutters sx={{ alignItems: 'flex-start', mb: 1 }}>
                        <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                          <CheckCircleOutlineIcon fontSize="small" color="secondary" />
                        </ListItemIcon>
                        <ListItemText 
                          primary={text} 
                          primaryTypographyProps={{ fontWeight: 500, fontSize: '0.95rem' }}
                          sx={{ textAlign: isAr ? 'right' : 'left' }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Box>
            </Box>

            {/* جهة الفيديو */}
            <MotionBox 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              sx={{ 
                width: { xs: '100%', md: '40%' },
                position: 'sticky',
                top: '100px'
              }}
            >
              <Box sx={{ flex: 1, width: '100%', position: 'relative' }}>
                <Box 
                  component="video" autoPlay muted loop playsInline poster={videoPoster}
                  sx={{ width: '100%', borderRadius: '50px 5px 50px 5px', boxShadow: theme.shadows[8], bgcolor: 'custom.blackPure' }}
                >
                  <source src={agricultureVideo} type="video/mp4" />
                </Box>
              </Box>
            </MotionBox>

          </Box>
        </Container>
      </Box>
    </Box>
  );
>>>>>>> 31f9cb48248f2759ad6ba46eeb75e3c66f4dae52
};