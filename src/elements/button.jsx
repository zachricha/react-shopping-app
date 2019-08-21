import styled from 'styled-components';
import Button from '@material-ui/core/Button';

const ElButton = styled(Button)`
    color: ${props => props.allColor ? props.allColor : "" }
    border-color: ${props => props.allColor ? props.allColor : "" }
`;

export default ElButton;