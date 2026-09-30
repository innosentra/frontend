<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Dialog, DialogContent, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import img1 from '../images/y00.webp';
import img2 from '../images/y33.webp';
import img3 from '../images/y22.webp';
import img4 from '../images/y11.webp';

export const EdgeAnalytics = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isAr = i18n.language === 'ar';

  const [imageModalSrc, setImageModalSrc] = useState(null);
  const openImageModal = (src) => setImageModalSrc(src);
  const closeImageModal = () => setImageModalSrc(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const kpis = [
    t('products_kpi_visitors'),
    t('products_kpi_age'),
    t('products_kpi_gender'),
    t('products_kpi_dwell'),
    t('products_kpi_purchase'),
    t('products_kpi_sentiment'),
    t('products_kpi_heatmap')
  ];

  const alerts = [
    t('products_alert_cashier'),
    t('products_alert_afterhours'),
    t('products_alert_custom')
  ];

  const hardwareFeatures = [
    t('products_hw_f1'),
    t('products_hw_f2'),
    t('products_hw_f3'),
    t('products_hw_f4'),
    t('products_hw_f5')
  ];

  const softwareImages = [img2, img3, img4];

  return (
    <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ bgcolor: 'background.default', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(10,60,90,0.95) 0%, rgba(10,60,90,0.8) 100%)',
            color: 'text.white',
            borderRadius: '20px',
            p: { xs: 3, md: 5 },
            mb: 5
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: { xs: 1.5, md: 2.5 },
              flexWrap: 'wrap'
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
              {t('products_title')}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 950,
                color: 'secondary.main',
                mb: 0,
                fontSize: { xs: '1.45rem', sm: '1.6rem', md: '2rem', lg: '2.15rem' },
                lineHeight: 1.15,
                letterSpacing: { md: '0.3px' }
              }}
            >
              {t('products_no_cloud')}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 400, lineHeight: 1.8, opacity: 0.95 }}>
            {t('products_subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Hardware */}
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: 'custom.surfaceSoft', borderRadius: '16px', p: 3, border: '1px solid', borderColor: 'custom.navbarBorder' }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row-reverse' }, 
                  gap: 2.2 
                }}
              >
                {/* Hardware Image */}
                <Box sx={{ width: { xs: '100%', md: '35%' }, flexShrink: 0 }}>
                  <Box
                    component="img"
                    src={img1}
                    alt={t('products_image_alt')}
                    onClick={() => openImageModal(img1)}
                    sx={{
                      width: '100%',
                      height:'auto',
                      cursor: 'zoom-in',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      border: `1px solid ${theme.palette.custom?.navbarBorder || '#e0e0e0'}`,
                      boxShadow: theme.shadows[3]
                    }}
                  />
                </Box>

                {/* Hardware Text */}
                <Box sx={{ width: { xs: '100%', md: '65%' }, flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 900, mb: 1.5 }}>
                    {t('products_hw_title')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, mb: 2.2 }}>
                    {t('products_hw_desc')}
                  </Typography>

                  {hardwareFeatures.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.1 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'secondary.main', mt: 0.2, fontSize: 20 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Software */}
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: 'custom.surfaceSoft', borderRadius: '16px', p: 3, border: '1px solid', borderColor: 'custom.navbarBorder' }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row-reverse' }, 
                  gap: 2.2 
                }}
              >
                {/* Software Images */}
                <Box 
                  sx={{ 
                    width: { xs: '100%', md: '35%' }, 
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5
                  }}
                >
                  {softwareImages.map((img, index) => (
                    <Box
                      key={index}
                      component="img"
                      src={img}
                      alt={t('products_image_alt')}
                      onClick={() => openImageModal(img)}
                      sx={{
                        width: '100%',
                        height: {
                          xs: 190,
                          sm: 210,
                          md: 'auto'
                        },
                        aspectRatio: { xs: 'auto', md: '2 / 1' },
                        cursor: 'zoom-in',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        border: `1px solid ${theme.palette.custom?.navbarBorder || '#e0e0e0'}`,
                        boxShadow: theme.shadows[3]
                      }}
                    />
                  ))}
                </Box>

                {/* Software Text */}
                <Box sx={{ width: { xs: '100%', md: '65%' }, flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 900, mb: 1.5 }}>
                    {t('products_sw_title')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, mb: 2.2 }}>
                    {t('products_sw_desc')}
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.4 }}>
                    {t('products_kpi_title')}
                  </Typography>
                  {kpis.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.1, mb: 1.1 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'secondary.main', mt: 0.2, fontSize: 20 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}

                  <Box sx={{ height: 8 }} />

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.2 }}>
                    {t('products_ops_title')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, mb: 1.8 }}>
                    {t('products_ops_desc')}
                  </Typography>

                  {alerts.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'primary.main', mt: 0.2, fontSize: 20 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={Boolean(imageModalSrc)}
        onClose={closeImageModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            borderRadius: '16px',
            boxShadow: theme.shadows[10]
          }
        }}
      >
        <DialogContent sx={{ position: 'relative', p: 2.5 }}>
          <IconButton
            onClick={closeImageModal}
            aria-label="Close"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              bgcolor: 'rgba(0,0,0,0.35)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
            }}
          >
            <CloseIcon />
          </IconButton>

          {imageModalSrc && (
            <Box
              component="img"
              src={imageModalSrc}
              alt={t('products_image_alt')}
              sx={{
                width: 'auto',
                maxWidth: '95vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                display: 'block',
                mx: 'auto',
                borderRadius: '12px'
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
=======
import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Grid, Dialog, DialogContent, IconButton } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material/styles';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import img1 from '../images/y00.webp';
import img2 from '../images/y33.webp';
import img3 from '../images/y22.webp';
import img4 from '../images/y11.webp';

export const EdgeAnalytics = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isAr = i18n.language === 'ar';

  const [imageModalSrc, setImageModalSrc] = useState(null);
  const openImageModal = (src) => setImageModalSrc(src);
  const closeImageModal = () => setImageModalSrc(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const kpis = [
    t('products_kpi_visitors'),
    t('products_kpi_age'),
    t('products_kpi_gender'),
    t('products_kpi_dwell'),
    t('products_kpi_purchase'),
    t('products_kpi_sentiment'),
    t('products_kpi_heatmap')
  ];

  const alerts = [
    t('products_alert_cashier'),
    t('products_alert_afterhours'),
    t('products_alert_custom')
  ];

  const hardwareFeatures = [
    t('products_hw_f1'),
    t('products_hw_f2'),
    t('products_hw_f3'),
    t('products_hw_f4'),
    t('products_hw_f5')
  ];

  const softwareImages = [img2, img3, img4];

  return (
    <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ bgcolor: 'background.default', py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(10,60,90,0.95) 0%, rgba(10,60,90,0.8) 100%)',
            color: 'text.white',
            borderRadius: '20px',
            p: { xs: 3, md: 5 },
            mb: 5
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: { xs: 'flex-start', md: 'center' },
              gap: { xs: 1.5, md: 2.5 },
              flexWrap: 'wrap'
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 800, mb: 0, fontSize: { xs: '1.6rem', md: '2.2rem' } }}>
              {t('products_title')}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 950,
                color: 'secondary.main',
                mb: 0,
                fontSize: { xs: '1.45rem', sm: '1.6rem', md: '2rem', lg: '2.15rem' },
                lineHeight: 1.15,
                letterSpacing: { md: '0.3px' }
              }}
            >
              {t('products_no_cloud')}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ fontWeight: 400, lineHeight: 1.8, opacity: 0.95 }}>
            {t('products_subtitle')}
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ mt: 2 }}>
          {/* Hardware */}
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: 'custom.surfaceSoft', borderRadius: '16px', p: 3, border: '1px solid', borderColor: 'custom.navbarBorder' }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row-reverse' }, 
                  gap: 2.2 
                }}
              >
                {/* Hardware Image */}
                <Box sx={{ width: { xs: '100%', md: '35%' }, flexShrink: 0 }}>
                  <Box
                    component="img"
                    src={img1}
                    alt={t('products_image_alt')}
                    onClick={() => openImageModal(img1)}
                    sx={{
                      width: '100%',
                      height:'auto',
                      cursor: 'zoom-in',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      border: `1px solid ${theme.palette.custom?.navbarBorder || '#e0e0e0'}`,
                      boxShadow: theme.shadows[3]
                    }}
                  />
                </Box>

                {/* Hardware Text */}
                <Box sx={{ width: { xs: '100%', md: '65%' }, flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 900, mb: 1.5 }}>
                    {t('products_hw_title')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, mb: 2.2 }}>
                    {t('products_hw_desc')}
                  </Typography>

                  {hardwareFeatures.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.1 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'secondary.main', mt: 0.2, fontSize: 20 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* Software */}
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: 'custom.surfaceSoft', borderRadius: '16px', p: 3, border: '1px solid', borderColor: 'custom.navbarBorder' }}>
              <Box 
                sx={{ 
                  display: 'flex', 
                  flexDirection: { xs: 'column', md: 'row-reverse' }, 
                  gap: 2.2 
                }}
              >
                {/* Software Images */}
                <Box 
                  sx={{ 
                    width: { xs: '100%', md: '35%' }, 
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1.5
                  }}
                >
                  {softwareImages.map((img, index) => (
                    <Box
                      key={index}
                      component="img"
                      src={img}
                      alt={t('products_image_alt')}
                      onClick={() => openImageModal(img)}
                      sx={{
                        width: '100%',
                        height: {
                          xs: 190,
                          sm: 210,
                          md: 'auto'
                        },
                        aspectRatio: { xs: 'auto', md: '2 / 1' },
                        cursor: 'zoom-in',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        border: `1px solid ${theme.palette.custom?.navbarBorder || '#e0e0e0'}`,
                        boxShadow: theme.shadows[3]
                      }}
                    />
                  ))}
                </Box>

                {/* Software Text */}
                <Box sx={{ width: { xs: '100%', md: '65%' }, flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 900, mb: 1.5 }}>
                    {t('products_sw_title')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, mb: 2.2 }}>
                    {t('products_sw_desc')}
                  </Typography>

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.4 }}>
                    {t('products_kpi_title')}
                  </Typography>
                  {kpis.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.1, mb: 1.1 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'secondary.main', mt: 0.2, fontSize: 20 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}

                  <Box sx={{ height: 8 }} />

                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1.2 }}>
                    {t('products_ops_title')}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.9, mb: 1.8 }}>
                    {t('products_ops_desc')}
                  </Typography>

                  {alerts.map((item, index) => (
                    <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1 }}>
                      <CheckCircleOutlineIcon sx={{ color: 'primary.main', mt: 0.2, fontSize: 20 }} />
                      <Typography variant="body2">{item}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={Boolean(imageModalSrc)}
        onClose={closeImageModal}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            bgcolor: 'background.paper',
            borderRadius: '16px',
            boxShadow: theme.shadows[10]
          }
        }}
      >
        <DialogContent sx={{ position: 'relative', p: 2.5 }}>
          <IconButton
            onClick={closeImageModal}
            aria-label="Close"
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
              zIndex: 1,
              bgcolor: 'rgba(0,0,0,0.35)',
              color: 'white',
              '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
            }}
          >
            <CloseIcon />
          </IconButton>

          {imageModalSrc && (
            <Box
              component="img"
              src={imageModalSrc}
              alt={t('products_image_alt')}
              sx={{
                width: 'auto',
                maxWidth: '95vw',
                maxHeight: '90vh',
                objectFit: 'contain',
                display: 'block',
                mx: 'auto',
                borderRadius: '12px'
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
>>>>>>> 31f9cb48248f2759ad6ba46eeb75e3c66f4dae52
};