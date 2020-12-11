import styled from 'styled-components/native';
import { rsize } from '../../utils/size'

export const Container = styled.View`
    height: ${rsize(25)}px;
    width: ${rsize(46)}px;
    background-color: #E2E2E2;
    align-items: center;
    justify-content: center;
    border-radius: ${rsize(13)}px;
    padding-left: ${rsize(3)}px;
    padding-right: ${rsize(3)}px;
`;
