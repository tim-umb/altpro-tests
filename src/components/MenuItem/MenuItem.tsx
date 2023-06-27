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
import VectorImage from 'src/assets/images/MenuItem_Vector.png';
import { styled } from '@mui/material/styles';
import { MenuItemProps } from 'src/types';
import useMenuItem from 'src/components/MenuItem/useMenuItem';

const StatePrimary: any = styled('div', {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: '100%',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  backgroundColor: data.onHover ? theme.palette['action']['hover'] : 'unset',
  borderRadius: data.onHover ? `4px` : 'unset',
}));

const Container: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `8px 16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
  overflow: `hidden`,
});

const LeftContent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
});

const Icon1: any = styled('div')({
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

const StarFilled: any = styled('div')({
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
  height: `19px`,
  width: `20px`,
  position: `absolute`,
  left: `2px`,
  top: `3px`,
});

const MinWidth: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  height: `0px`,
  width: `56px`,
  margin: `0px`,
});

const ListItemText: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `4px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const ListItem: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['body1'].fontStyle,
  fontFamily: theme.typography['Typography']['body1'].fontFamily,
  fontWeight: theme.typography['Typography']['body1'].fontWeight,
  fontSize: theme.typography['Typography']['body1'].fontSize,
  letterSpacing: theme.typography['Typography']['body1'].letterSpacing,
  lineHeight: theme.typography['Typography']['body1'].lineHeight,
  textDecoration: theme.typography['Typography']['body1'].textDecoration,
  textTransform: theme.typography['Typography']['body1'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Secondary: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['secondary'],
  fontStyle: theme.typography['Typography']['body2'].fontStyle,
  fontFamily: theme.typography['Typography']['body2'].fontFamily,
  fontWeight: theme.typography['Typography']['body2'].fontWeight,
  fontSize: theme.typography['Typography']['body2'].fontSize,
  letterSpacing: theme.typography['Typography']['body2'].letterSpacing,
  lineHeight: theme.typography['Typography']['body2'].lineHeight,
  textDecoration: theme.typography['Typography']['body2'].textDecoration,
  textTransform: theme.typography['Typography']['body2'].textTransform,
  alignSelf: `stretch`,
  margin: `0px`,
}));

function MenuItem(props: MenuItemProps): JSX.Element {
  const { data } = useMenuItem();

  return (
    <StatePrimary className={props.className} data={data}>
      <Container>
        <LeftContent>
          <Icon1>
            <StarFilled>
              <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
            </StarFilled>
          </Icon1>
          <MinWidth></MinWidth>
        </LeftContent>
        <ListItemText>
          <ListItem>{`List item`}</ListItem>
          {false && <Secondary>{`Secondary`}</Secondary>}
        </ListItemText>
      </Container>
    </StatePrimary>
  );
}

export default MenuItem;
