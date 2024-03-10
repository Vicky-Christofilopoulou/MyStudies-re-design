import * as React from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Box sx={{ width: '100%', mr: 1 }}>
          <LinearProgress variant="determinate" value={props.value} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.secondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  
  LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
  };
  
  const LinearWithValueLabel = ({ currentSection }) => {
    const [progress, setProgress] = React.useState(0);
  
    React.useEffect(() => {
      setProgress(currentSection * 33.33); // Assuming each section is 33.33% progress
    }, [currentSection]);
  
    return (
      <Box sx={{ width: '100%' }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
    );
  };
  
  LinearWithValueLabel.propTypes = {
    currentSection: PropTypes.number.isRequired,
  };
  
  export default LinearWithValueLabel;