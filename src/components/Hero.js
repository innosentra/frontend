import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { alpha, useTheme } from '@mui/material/styles';
import headImage from '../images/head.webp';
import webBanner from '../images/Web_Banner.webp'; // <-- استيراد صورة البانر
import { useNavigate } from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Inventory2Icon from '@mui/icons-material/Inventory2';

export const Hero = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isAr = i18n.language === 'ar';
  const navigate = useNavigate();

  const keyframesStyle = `
    /* الأنميشن الخاص بالشريط المتحرك */
    @keyframes marquee {
      0% { transform: translateX(-100%); } 
      100% { transform: translateX(100%); } 
    }

    @keyframes shinePass {
      0% { left: -100%; opacity: 0; }
      10% { opacity: 0.8; }
      40% { left: 120%; opacity: 0.8; }
      41%, 100% { left: 120%; opacity: 0; }
    }

    @keyframes attentionSequence {
      0% { filter: brightness(1); transform: scale(1); }
      20% { filter: brightness(1.5); transform: scale(1.08); }
      100% { filter: brightness(1); transform: scale(1); }
    }

    /* حركة الأيقونة داخل الزر للفت الانتباه */
    @keyframes bounceIcon {
      0%, 100% { transform: translateX(0) scale(1); }
      50% { transform: translateX(${isAr ? '-5px' : '5px'}) scale(1.2); }
    }
  `;

  return (
    <Box
      id="home"
      sx={{
        position: 'relative', 
        minHeight: { xs: '90vh', md: '70vh' },
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        color: 'text.primary',
        pb: isAr ? 8 : { xs: 4, md: 0 }, 
        pt: 10,
        overflow: 'hidden',
        backgroundColor: 'custom.surfaceLight'
      }}
    >
      <style>{keyframesStyle}</style>

      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 6, md: 8 },
          }}
        >
          {/* العمود الأيسر: النصوص */}
          <Box
            dir={isAr ? 'rtl' : 'ltr'}
            sx={{
              flex: 1,
              textAlign: { xs: 'center', md: isAr ? 'right' : 'left' },
              maxWidth: { md: '600px' },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                mb: 3,
                fontWeight: 700,
                fontSize: { xs: '1.7rem', md: '2.3rem', lg: '2.6rem' },
              }}
            >
              {t('hero_title')}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                fontWeight: 400,
                fontSize: { xs: '1.1rem', md: '1.2rem', lg: '1.2rem' },
                lineHeight: 1.6,
              }}
            >
              {t('hero_subtitle')}
            </Typography>
            <br/>
            <Button
              variant="contained"
              onClick={() => navigate('/request-demo')}
              endIcon={
                <RocketLaunchIcon 
                  sx={{ 
                    animation: 'bounceIcon 1.5s infinite ease-in-out',
                    transform: isAr ? 'rotate(180deg)' : 'none',
                    ml: isAr ? 0 : 1.5,
                    mr: isAr ? 1.5 : 0,
                  }} 
                />
              }
              sx={{
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                color: 'white',
                py: { xs: 1.5, md: 1.8 },
                px: { xs: 4, md: 6 },
                width: '80%',
                mb:1,
                borderRadius: '50px',
                fontSize: { xs: '1.1rem', md: '1.2rem' },
                fontWeight: 'bold',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-3px)',
                  boxShadow: '0 12px 25px rgba(0,0,0,0.3)',
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                }
              }}
            >
              {t('demo_button')}
            </Button>
           
          </Box>

          {/* العمود الأيمن: الصورة والبانر */}
          <Box 
            sx={{ 
              flex: 1, 
              display: 'flex', 
              flexDirection: 'column', // ترتيب العناصر بشكل عمودي
              alignItems: 'center',    // توسيط العناصر
              justifyContent: 'center', 
              position: 'relative', 
              width: '100%',
              gap: 4 // مسافة بين الصورة الأساسية وصورة البانر
            }}
          >
            {/* الصورة الأساسية العلوية */}
            <Box sx={{ position: 'relative', width: '70%', borderRadius: '50%', overflow: 'hidden' }}>
              <Box
                component="img"
                src={headImage}
                alt="AI Head"
                sx={{
                  width: '100%',
                  height: 'auto',
                  animation: 'attentionSequence 4s ease-in-out 1',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '30%',
                  height: '100%',
                  background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.custom.whitePure, 0.8)}, transparent)`,
                  animation: 'shinePass 1.5s ease-in-out infinite 3s',
                }}
              />
            </Box>

            {/* --- إضافة الصورة الجديدة أسفل القسم الأيمن --- */}
            <Box
              component="img"
              src={webBanner}
              alt="Web Banner"
              sx={{
                width: '90%', 
                mb:3,// يمكنك تعديل هذا العرض حسب الحاجة
                height: 'auto',
                borderRadius: '15px', // حواف دائرية للتناسق مع التصميم
                display: 'block',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)' // تأثير ظل خفيف إضافي (اختياري)
              }}
            />
          </Box>
        </Box>
      </Container>

      {/* --- الشريط المتحرك: يظهر فقط في حال كانت اللغة عربية --- */}
      {isAr && (
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            bgcolor: 'primary.main',
            color: 'white',
            py: { xs: 0.8, md: 1.2 }, 
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            zIndex: 10,
            boxShadow: `0px -2px 10px ${theme.palette.action.disabledBackground}`
          }}
        >
          <Box
            sx={{
              display: 'inline-block', 
              paddingLeft: '100%', 
              animation: 'marquee 15s linear infinite', 
              willChange: 'transform', 
            }}
          >
            <Typography
              variant="body1"
              dir="rtl"
              sx={{
                fontWeight: 'bold',
                fontSize: { xs: '1.2rem', md: '1.4rem' }, 
                display: 'inline-block'
              }}
            >
              يمكنكم تجربة خدماتنا لمدة أسبوع واحد مجاناً، لا تفوتوا الفرصة!
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};
