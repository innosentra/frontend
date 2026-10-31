import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button, Chip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StorefrontIcon from '@mui/icons-material/Storefront';

import gitexEuropeBanner from '../images/Web_Banner_1764305239_GE26_E-ZONE_BANNERS_728x90PX.webp';
import gitexEuropeBooth from '../images/IMG_4660.webp';
import aiEverythingBanner from '../images/Email_Signature_1788511891_E-MAIL-SIGNATURE.webp';
import aiEverythingBooth from '../images/IMG_5166.webp';

export const Exhibitions = () => {
  const { t } = useTranslation();

  const exhibitions = [
    {
      id: 1,
      title: t('exh_gitex_europe_title', 'GITEX EUROPE Berlin 2026'),
      status: 'past',
      date: t('exh_gitex_europe_date', '30 June - 01 July 2026'),
      location: t('exh_gitex_europe_location', 'Messe Berlin, Germany'),
      booth: 'H4.2-G61',
      description: t('exh_gitex_europe_desc', 'شاركنا في معرض جيتكس أوروبا لعرض أحدث حلول الذكاء الاصطناعي.'),
      bannerImage: gitexEuropeBanner,
      boothImage: gitexEuropeBooth
    },
    {
      id: 2,
      title: t('exh_ai_everything_title', 'Ai Everything Abu Dhabi 2026'),
      status: 'past',
      date: t('exh_ai_everything_date', '6 - 7 Oct 2026'),
      location: t('exh_ai_everything_location', 'ADNEC Centre, Abu Dhabi'),
      booth: 'H4-P185',
      description: t('exh_ai_everything_desc', 'استعرضنا تقنياتنا المبتكرة في المعرض العالمي للذكاء الاصطناعي في أبوظبي.'),
      bannerImage: aiEverythingBanner,
      boothImage: aiEverythingBooth
    }
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Typography variant="h3" fontWeight="bold" color="primary.main" gutterBottom>
            {t('exhibitions_page_title', 'المعارض والفعاليات')}
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto' }}>
            {t('exhibitions_page_subtitle', 'تعرف على مشاركاتنا في أبرز المعارض التقنية حول العالم.')}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {[...exhibitions].reverse().map((exh) => (
            <Grid item xs={12} key={exh.id}>
              <Card 
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row' }, 
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-5px)', boxShadow: 6 },
                  overflow: 'hidden',
                  width: '100%' // العرض الكامل الموحد
                }}
              >
                {/* القسم الأول: الصورة المستطيلة والنصوص */}
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
                  
                  {/* الحاوية الجديدة للصورة المستطيلة لضمان عدم تجاوز العرض */}
                  <Box sx={{ 
                    width: '100%', 
                    p: { xs: 0, md: '5px 10px 5px 0' }, // استخدام الـ padding بدلاً من margin
                    boxSizing: 'border-box' 
                  }}>
                    <Box
                      component="img"
                      src={exh.bannerImage}
                      alt={`${exh.title} Banner`}
                      sx={{
                        width: '100%', 
                        height: 'auto', 
                        display: 'block',
                        borderRadius: { xs: 0, md: 1 }
                      }}
                    />
                  </Box>
                  
                  {/* المحتوى النصي */}
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: { xs: 3, md: 2 } }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h5" fontWeight="bold">
                        {exh.title}
                      </Typography>
                      <Chip 
                        label={exh.status === 'upcoming' ? t('exh_status_upcoming', 'قادم') : t('exh_status_past', 'سابق')} 
                        color={exh.status === 'upcoming' ? "secondary" : "default"}
                        size="small"
                      />
                    </Box>
                    
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'text.secondary' }}>
                        <EventIcon fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">{exh.date}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1, color: 'text.secondary' }}>
                        <LocationOnIcon fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2">{exh.location}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2, color: 'text.secondary' }}>
                        <StorefrontIcon fontSize="small" sx={{ mr: 1 }} />
                        <Typography variant="body2" fontWeight="bold">{exh.booth}</Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary">
                        {exh.description}
                      </Typography>
                    </Box>

                    {exh.status === 'upcoming' && (
                      <Box sx={{ mt: 'auto', pt: 2 }}>
                        <Button variant="contained" color="primary" fullWidth href="/contact">
                          {t('exh_book_meeting', 'احجز موعداً')}
                        </Button>
                      </Box>
                    )}
                  </CardContent>
                </Box>

                {/* القسم الثاني: الصورة المربعة/الكبيرة للجناح */}
                <Box 
                  component="img"
                  src={exh.boothImage}
                  alt={`${exh.title} Booth`}
                  sx={{ 
                    alignSelf: 'stretch',
                    width: { xs: '100%', md: 300, lg: 350 },
                    minWidth: { md: 300, lg: 350 },
                    maxWidth: { md: 300, lg: 350 },
                    height: { xs: 350, md: 'auto' }, 
                    minHeight: { md: 400 },
                    objectFit: 'cover',
                    flexShrink: 0 
                  }}
                />

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};