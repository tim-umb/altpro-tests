/**********************************************************************
 *
 *   Component generated by Quest
 *
 *   WARNING: By editing this component by hand, you will lose the ability to regenerate the code without conflicts.
 *   To preserve that ability, always export from Quest to regenerate this file.
 *   To setup element attributes and CSS properties, use the Quest web app
 *   Code Logic goes in the hook associated with this component
 *
 *   For help and further details refer to: https://www.quest.ai/docs
 *
 *
 **********************************************************************/

import React from 'react';
import VectorImage from 'src/assets/images/MainNav_Vector.png';
import Vector1Image from 'src/assets/images/MainNav_Vector_1.png';
import { styled } from '@mui/material/styles';
import MenuItem from 'src/components/MenuItem/MenuItem';
import { MainNavProps } from 'src/types';
import useMainNav from 'src/components/MainNav/useMainNav';

const StateOpened: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  height: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: 'fit-content',
});

const Drawer: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  width: data.isClosed ? `64px` : `256px`,
  margin: `0px`,
  cursor: `pointer`,
}));

const Frame14: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  backgroundColor: data.isClosed
    ? theme.palette['primary']['main']
    : theme.palette['background']['paper-elevation-1'],
  border: data.isClosed ? 'unset' : `1px solid rgba(0, 0, 0, 0.12)`,
  boxSizing: `border-box`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: data.isClosed ? `center` : `flex-end`,
  padding: `0px`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const IconButton: any = styled('div')({
  borderRadius: `100px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `12px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
});

const Icon1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const ChevronLeftFilled: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector: any = styled('img')({
  height: `12px`,
  width: `7.41px`,
  position: `absolute`,
  left: `8px`,
  top: `6px`,
});

const IconButton1: any = styled('div')({
  borderRadius: `100px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `12px`,
  boxSizing: `border-box`,
  margin: `0px`,
  overflow: `hidden`,
});

const Icon2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const MenuFilled: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `24px`,
  height: `24px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector1: any = styled('img')({
  height: `12px`,
  width: `18px`,
  position: `absolute`,
  left: `3px`,
  top: `6px`,
});

const Frame16: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Paper: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  backgroundColor: theme.palette['background']['paper-elevation-1'],
  border: `1px solid rgba(0, 0, 0, 0.12)`,
  boxSizing: `border-box`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: data.isClosed ? `column` : `row`,
  justifyContent: data.isClosed ? `flex-start` : `center`,
  alignItems: `flex-start`,
  padding: `0px 8px`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
  overflow: `hidden`,
}));

const Stack: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: data.isClosed ? 'unset' : `1`,
  margin: `0px`,
  alignSelf: data.isClosed ? `stretch` : 'unset',
}));

const LogoPlaceholder: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `28px 40px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const MinDims: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const MinHeight: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `1px`,
  height: `36px`,
  margin: `0px`,
  overflow: `hidden`,
});

const MinWidth: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  width: `139.08px`,
  height: `1px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Typography: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['primary'],
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `800`,
  fontSize: `51px`,
  letterSpacing: `2.5px`,
  textDecoration: `none`,
  lineHeight: `73.00000190734863%`,
  textTransform: `none`,
  height: `36px`,
  width: `140px`,
  position: `absolute`,
  left: `40px`,
  top: `28px`,
}));

const MenuItem1: any = styled(MenuItem)(({ theme }: any) => ({
  alignSelf: `stretch`,
  height: `48px`,
  margin: `8px 0px 0px 0px`,
}));

const MenuItem2: any = styled(MenuItem)(({ theme }: any) => ({
  alignSelf: `stretch`,
  height: `48px`,
  margin: `8px 0px 0px 0px`,
}));

const MenuItem3: any = styled(MenuItem)(({ theme }: any) => ({
  alignSelf: `stretch`,
  height: `48px`,
  margin: `8px 0px 0px 0px`,
}));

function MainNav(props: MainNavProps): JSX.Element {
  const { data, fns } = useMainNav();

  return (
    <StateOpened
      className={props.className}
      mainNavState={fns.handleMainNavChange}
    >
      <Drawer onClick={fns.handleMainNavChange} data={data}>
        <Frame14 data={data}>
          {!data.isClosed && (
            <IconButton>
              <Icon1>
                <ChevronLeftFilled>
                  <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
                </ChevronLeftFilled>
              </Icon1>
            </IconButton>
          )}
          {data.isClosed && (
            <IconButton1>
              <Icon2>
                <MenuFilled>
                  <Vector1 src={Vector1Image} loading="lazy" alt={'Vector'} />
                </MenuFilled>
              </Icon2>
            </IconButton1>
          )}
        </Frame14>
        <Frame16>
          <Paper data={data}>
            <Stack data={data}>
              <LogoPlaceholder>
                <MinDims>
                  <MinHeight></MinHeight>
                  <MinWidth></MinWidth>
                </MinDims>
                {!data.isClosed && <Typography>{`LOGO`}</Typography>}
              </LogoPlaceholder>
              <MenuItem1 />
              <MenuItem2 />
              <MenuItem3 />
            </Stack>
          </Paper>
        </Frame16>
      </Drawer>
    </StateOpened>
  );
}

export default MainNav;
