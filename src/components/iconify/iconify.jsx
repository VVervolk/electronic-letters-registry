import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { Box } from '@mui/material';

// ----------------------------------------------------------------------

const Iconify = forwardRef(({ icon, width = 20, sx, ...other }, ref) => (
  <Box
    ref={ref}
    component={icon}
    className="component-iconify"
    sx={{ width, height: width, ...sx }}
    {...other}
  />
));

Iconify.propTypes = {
  icon: PropTypes.elementType,
  sx: PropTypes.object,
  width: PropTypes.number,
};

export default Iconify;
