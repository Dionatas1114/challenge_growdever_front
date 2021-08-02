import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: '#e16e0e',
    color: theme.palette.common.white,
    boxShadow: theme.shadows[1],
    fontSize: 16,
    padding: theme.spacing(1),
    margin: theme.spacing(2),
  },
}))(Tooltip);

export default CustomTooltip;
