// v1.3 - PageContainer.tsx
import React from 'react';
import { Box, Typography, Stack, SxProps, Theme } from '@mui/material';

type PageContainerProps = {
  title?: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  /** Additional styles if needed */
  sx?: SxProps<Theme>;
};

function PageContainer({ title, subtitle, icon, children, sx }: PageContainerProps) {
  return (
    <Box sx={{ p: 3, minHeight: '100vh', ...sx }}>
      {title && (
        <Stack direction="row" alignItems="center" spacing={1} mb={3}>
          {icon}
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'secondary.main' }}>
              {title}
            </Typography>
            {subtitle && (
              <Typography variant="body2" color="text.secondary">
                {subtitle}
              </Typography>
            )}
          </Box>
        </Stack>
      )}
      {children}
    </Box>
  );
}

export default PageContainer;
