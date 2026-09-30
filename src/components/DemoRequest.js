<<<<<<< HEAD
import React, { useState } from 'react';
import { 
  Container, Typography, Box, Button, TextField, Grid,
  Paper, Alert, CircularProgress, Snackbar, alpha
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const DemoRequest = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isAr = i18n.language === 'ar';
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  // تنسيق جديد وجميل لحقول الإدخال يدمج بين الأبيض واللون الأساسي
  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.mode === 'dark' ? alpha('#fff', 0.05) : '#f9fafb',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      '& fieldset': { 
        borderColor: theme.palette.mode === 'dark' ? alpha('#fff', 0.2) : '#e5e7eb' 
      },
      '&:hover fieldset': { 
        borderColor: alpha(theme.palette.primary.main, 0.5) 
      },
      '&.Mui-focused fieldset': { 
        borderColor: theme.palette.primary.main,
        borderWidth: '2px'
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.main, 0.1) : '#ffffff',
        boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`
      }
    },
    '& .MuiInputLabel-root.Mui-focused': { color: theme.palette.primary.main },
  };

  const validationSchema = yup.object({
    name: yup.string().required(t('val_name_req')),
    email: yup.string().email(t('val_email_valid')).required(t('val_email_req')),
    company: yup.string().required(t('val_company_req') || 'Required'),
    industry: yup.string().required(t('val_industry_req') || 'Required'),
    requirements: yup.string().min(10, t('val_msg_min')).required(t('val_req_req') || 'Required'),
  });

  const formik = useFormik({
    initialValues: { name: '', email: '', phone: '', company: '', industry: '', requirements: '' },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      
      const composedMessage = `
        **Company / Organization:** ${values.company}
        **Industry:** ${values.industry}
        **Phone:** ${values.phone || 'Not provided'}
        
        **Demo Requirements & Specifications:**
        ${values.requirements}
      `;

      try {
        await emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            to_name: 'Tech Demo Team',
            from_name: values.name,
            from_email: values.email,
            phone: values.phone || 'Not provided',
            message: composedMessage,
            reply_to: values.email,
            date: new Date().toLocaleDateString('en-US'),
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
        setSnackbarMessage(t('contact_success_msg'));
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        resetForm();
      } catch (error) {
        setSnackbarMessage(t('contact_error_msg'));
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box id="demo-request" sx={{ position: 'relative', minHeight: '100vh', bgcolor: 'background.default' }}>
      
      {/* خلفية علوية باللون الأساسي:
        هنا نستخدم اللون الأساسي كخلفية للجزء العلوي فقط لإبراز العنوان 
        وجعل اللون الأبيض للنموذج يبرز بشكل رائع 
      */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, 
          height: { xs: '45vh', md: '50vh' }, 
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          zIndex: 0,
          borderBottomLeftRadius: { xs: '30px', md: '50px' },
          borderBottomRightRadius: { xs: '30px', md: '50px' },
        }} 
      />

      {/* المحتوى الفعلي يتداخل مع الخلفية العلوية */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 10 } }}>
        
        {/* النصوص العلوية باللون الأبيض */}
        <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, color: '#ffffff' }}>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            {t('demo_page_title')}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, color: alpha('#ffffff', 0.9), maxWidth: '700px', mx: 'auto', lineHeight: 1.6 }}>
            {t('demo_page_subtitle')}
          </Typography>
        </Box>

        {/* بطاقة النموذج باللون الأبيض النقي */}
        <Paper 
          dir={isAr ? 'rtl' : 'ltr'} 
          elevation={0} 
          sx={{ 
            p: { xs: 3, sm: 5, md: 6 }, 
            borderRadius: 4, 
            bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#ffffff',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', // ظل ناعم وكبير لتبدو الورقة طافية
            borderTop: `6px solid ${theme.palette.primary.main}`, // لمسة من اللون الأساسي في أعلى البطاقة
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3.5}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth name="name" label={t('contact_label_name')} value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.name && Boolean(formik.errors.name)} sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth name="email" label={t('contact_label_email')} type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && Boolean(formik.errors.email)} sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth name="phone" label={t('contact_label_phone')} value={formik.values.phone} onChange={formik.handleChange} sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth name="company" label={t('demo_label_company')} value={formik.values.company} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.company && Boolean(formik.errors.company)} sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth name="industry" label={t('demo_label_industry')} value={formik.values.industry} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.industry && Boolean(formik.errors.industry)} sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="requirements" label={t('demo_label_reqs')} multiline rows={5} value={formik.values.requirements} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.requirements && Boolean(formik.errors.requirements)} placeholder={t('demo_placeholder_reqs')} sx={textFieldStyle} />
              </Grid>

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: isAr ? 'flex-start' : 'flex-end', mt: 2 }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  disabled={loading || !formik.isValid} 
                  startIcon={loading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : <SendIcon sx={{ transform: isAr ? 'rotate(180deg)' : 'none' }}/>} 
                  sx={{ 
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`, 
                    color: 'white', 
                    py: 1.5, 
                    px: 6, 
                    borderRadius: '30px', // شكل الزر الأسطواني الأنيق
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
                    minWidth: '200px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 12px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                    }
                  }}
                >
                  {loading ? t('contact_btn_sending') : t('demo_btn_submit')}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity={snackbarSeverity} sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
=======
import React, { useState } from 'react';
import { 
  Container, Typography, Box, Button, TextField, Grid,
  Paper, Alert, CircularProgress, Snackbar, alpha
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

export const DemoRequest = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
  const isAr = i18n.language === 'ar';
  const [loading, setLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  // تنسيق جديد وجميل لحقول الإدخال يدمج بين الأبيض واللون الأساسي
  const textFieldStyle = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: theme.palette.mode === 'dark' ? alpha('#fff', 0.05) : '#f9fafb',
      borderRadius: '8px',
      transition: 'all 0.3s ease',
      '& fieldset': { 
        borderColor: theme.palette.mode === 'dark' ? alpha('#fff', 0.2) : '#e5e7eb' 
      },
      '&:hover fieldset': { 
        borderColor: alpha(theme.palette.primary.main, 0.5) 
      },
      '&.Mui-focused fieldset': { 
        borderColor: theme.palette.primary.main,
        borderWidth: '2px'
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.mode === 'dark' ? alpha(theme.palette.primary.main, 0.1) : '#ffffff',
        boxShadow: `0 4px 12px ${alpha(theme.palette.primary.main, 0.1)}`
      }
    },
    '& .MuiInputLabel-root.Mui-focused': { color: theme.palette.primary.main },
  };

  const validationSchema = yup.object({
    name: yup.string().required(t('val_name_req')),
    email: yup.string().email(t('val_email_valid')).required(t('val_email_req')),
    company: yup.string().required(t('val_company_req') || 'Required'),
    industry: yup.string().required(t('val_industry_req') || 'Required'),
    requirements: yup.string().min(10, t('val_msg_min')).required(t('val_req_req') || 'Required'),
  });

  const formik = useFormik({
    initialValues: { name: '', email: '', phone: '', company: '', industry: '', requirements: '' },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setLoading(true);
      
      const composedMessage = `
        **Company / Organization:** ${values.company}
        **Industry:** ${values.industry}
        **Phone:** ${values.phone || 'Not provided'}
        
        **Demo Requirements & Specifications:**
        ${values.requirements}
      `;

      try {
        await emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          {
            to_name: 'Tech Demo Team',
            from_name: values.name,
            from_email: values.email,
            phone: values.phone || 'Not provided',
            message: composedMessage,
            reply_to: values.email,
            date: new Date().toLocaleDateString('en-US'),
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        );
        setSnackbarMessage(t('contact_success_msg'));
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        resetForm();
      } catch (error) {
        setSnackbarMessage(t('contact_error_msg'));
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <Box id="demo-request" sx={{ position: 'relative', minHeight: '100vh', bgcolor: 'background.default' }}>
      
      {/* خلفية علوية باللون الأساسي:
        هنا نستخدم اللون الأساسي كخلفية للجزء العلوي فقط لإبراز العنوان 
        وجعل اللون الأبيض للنموذج يبرز بشكل رائع 
      */}
      <Box 
        sx={{ 
          position: 'absolute', 
          top: 0, left: 0, right: 0, 
          height: { xs: '45vh', md: '50vh' }, 
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          zIndex: 0,
          borderBottomLeftRadius: { xs: '30px', md: '50px' },
          borderBottomRightRadius: { xs: '30px', md: '50px' },
        }} 
      />

      {/* المحتوى الفعلي يتداخل مع الخلفية العلوية */}
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, py: { xs: 8, md: 10 } }}>
        
        {/* النصوص العلوية باللون الأبيض */}
        <Box dir={isAr ? 'rtl' : 'ltr'} sx={{ textAlign: 'center', mb: { xs: 4, md: 6 }, color: '#ffffff' }}>
          <Typography variant="h3" sx={{ mb: 2, fontWeight: 800, textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
            {t('demo_page_title')}
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 400, color: alpha('#ffffff', 0.9), maxWidth: '700px', mx: 'auto', lineHeight: 1.6 }}>
            {t('demo_page_subtitle')}
          </Typography>
        </Box>

        {/* بطاقة النموذج باللون الأبيض النقي */}
        <Paper 
          dir={isAr ? 'rtl' : 'ltr'} 
          elevation={0} 
          sx={{ 
            p: { xs: 3, sm: 5, md: 6 }, 
            borderRadius: 4, 
            bgcolor: theme.palette.mode === 'dark' ? 'background.paper' : '#ffffff',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', // ظل ناعم وكبير لتبدو الورقة طافية
            borderTop: `6px solid ${theme.palette.primary.main}`, // لمسة من اللون الأساسي في أعلى البطاقة
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={3.5}>
              <Grid item xs={12} md={6}>
                <TextField fullWidth name="name" label={t('contact_label_name')} value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.name && Boolean(formik.errors.name)} sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField fullWidth name="email" label={t('contact_label_email')} type="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && Boolean(formik.errors.email)} sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth name="phone" label={t('contact_label_phone')} value={formik.values.phone} onChange={formik.handleChange} sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth name="company" label={t('demo_label_company')} value={formik.values.company} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.company && Boolean(formik.errors.company)} sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField fullWidth name="industry" label={t('demo_label_industry')} value={formik.values.industry} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.industry && Boolean(formik.errors.industry)} sx={textFieldStyle} />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth name="requirements" label={t('demo_label_reqs')} multiline rows={5} value={formik.values.requirements} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.requirements && Boolean(formik.errors.requirements)} placeholder={t('demo_placeholder_reqs')} sx={textFieldStyle} />
              </Grid>

              <Grid item xs={12} sx={{ display: 'flex', justifyContent: isAr ? 'flex-start' : 'flex-end', mt: 2 }}>
                <Button 
                  type="submit" 
                  variant="contained" 
                  disabled={loading || !formik.isValid} 
                  startIcon={loading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : <SendIcon sx={{ transform: isAr ? 'rotate(180deg)' : 'none' }}/>} 
                  sx={{ 
                    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`, 
                    color: 'white', 
                    py: 1.5, 
                    px: 6, 
                    borderRadius: '30px', // شكل الزر الأسطواني الأنيق
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    boxShadow: `0 8px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
                    minWidth: '200px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: `0 12px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                    }
                  }}
                >
                  {loading ? t('contact_btn_sending') : t('demo_btn_submit')}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={() => setOpenSnackbar(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert severity={snackbarSeverity} sx={{ borderRadius: 2, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
>>>>>>> 31f9cb48248f2759ad6ba46eeb75e3c66f4dae52
};