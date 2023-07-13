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
import { Divider } from '@mui/material';
import { styled } from '@mui/material/styles';
import AppBar from 'src/components/AppBar/AppBar';
import MainNav from 'src/components/MainNav/MainNav';
import Header from 'src/components/Header/Header';
import EntityContainer from 'src/components/EntityContainer/EntityContainer';
import { PageTemplateProps } from 'src/types';

const PageTemplate1: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['colors']['grey']['100'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: '100vh',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: '100vw',
}));

const AppBar1: any = styled(AppBar)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const PageContainer: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  width: '100%',
  margin: `0px`,
  overflow: `hidden`,
});

const MainNav1: any = styled(MainNav)(({ theme }: any) => ({
  height: `1032px`,
  margin: `0px`,
}));

const DividerVertical: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Box1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const Header1: any = styled(Header)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const DividerHorizontal: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Content: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  flex: `1`,
  margin: `0px`,
});

const EntityContainer1: any = styled(EntityContainer)(({ theme }: any) => ({
  height: `709px`,
  width: `1400px`,
  margin: `0px`,
}));

function PageTemplate(props: PageTemplateProps): JSX.Element {
  return (
    <PageTemplate1 className={props.className}>
      <AppBar1 />
      <PageContainer>
        <MainNav1 />
        <DividerVertical orientation="vertical" />
        <Box1>
          <Header1 />
          <DividerHorizontal orientation="horizontal" />
          <Content>
            <EntityContainer1 />
          </Content>
        </Box1>
      </PageContainer>
    </PageTemplate1>
  );
}

export default PageTemplate;
