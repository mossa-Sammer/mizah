import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import { useTheme } from '@material-ui/core/styles';

// ICONS
import Close from './icons/Close';
import Copy from './icons/Copy';

const Icon = props => {
  // takes icon, color, width, height and customStyle as props
  // const theme = useTheme();

  const { icon, custom, color, background } = props;

  // insert styles
  const useStyles = makeStyles({
    root: {
      height: ({ height }) => height || '100%',
      width: ({ width }) => width || '100%',
      margin: ({ margin }) => margin || '0 0 0 0',
      ...custom,
    },
  });

  const classes = useStyles(props);

  const iconMap = {
    close: Close,
    copy: Copy,
  };

  const IconMap = Object.keys(iconMap).reduce((accum, curr) => {
    const IconSvg = iconMap[curr];

    if (!IconSvg) {
      throw new Error(`Icon ${curr} not found`);
    }
    // eslint-disable-next-line no-param-reassign
    accum[curr] = IconSvg;
    return accum;
  }, {});

  if (!iconMap[icon]) {
    // eslint-disable-next-line no-console
    console.warn(`<Icon /> called with invalid icon prop "${icon}"`);
    return null;
  }

  const StyledIcon = IconMap[icon];

  return (
    <StyledIcon
      {...props}
      className={classes.root}
      color={color || 'currentColor'}
      background={background || 'currentColor'}
    />
  );
};

export default Icon;
