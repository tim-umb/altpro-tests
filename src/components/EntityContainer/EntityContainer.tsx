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
import { Button, Divider } from '@mui/material';
import VectorImage from 'src/assets/images/EntityContainer_Vector_2.png';
import { styled } from '@mui/material/styles';
import { EntityContainerProps } from 'src/types';
import { animated, useSpring, easings } from 'react-spring';
import useEntityContainer from 'src/components/EntityContainer/useEntityContainer';

const StateOpen: any = styled('div')(({ theme }: any) => ({
  boxShadow: theme.customShadows['elevation']['4'].boxShadow,
  borderRadius: `6px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  height: 'auto',
  width: 'fit-content',
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const Content: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `709px`,
  width: `1400px`,
  margin: `0px`,
});

const ProfileContainer: any = styled('div')({
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `400px`,
  height: `709px`,
  left: `0px`,
  top: `0px`,
});

const Body: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const ContainerHeader: any = styled('div')({
  borderRadius: `6px 0px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Frame3: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['background']['default'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Content1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `4px 0px 5px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Title: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['h5'].fontStyle,
  fontFamily: theme.typography['Typography']['h5'].fontFamily,
  fontWeight: theme.typography['Typography']['h5'].fontWeight,
  fontSize: theme.typography['Typography']['h5'].fontSize,
  letterSpacing: theme.typography['Typography']['h5'].letterSpacing,
  lineHeight: theme.typography['Typography']['h5'].lineHeight,
  textDecoration: theme.typography['Typography']['h5'].textDecoration,
  textTransform: theme.typography['Typography']['h5'].textTransform,
  margin: `0px`,
}));

const RightContent: any = styled('div')({
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

const Button1: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `0px`,
  color: theme.palette['primary']['main'],
  fontStyle: theme.typography['Components']['button-small'].fontStyle,
  fontFamily: theme.typography['Components']['button-small'].fontFamily,
  fontWeight: theme.typography['Components']['button-small'].fontWeight,
  fontSize: theme.typography['Components']['button-small'].fontSize,
  letterSpacing: theme.typography['Components']['button-small'].letterSpacing,
  lineHeight: theme.typography['Components']['button-small'].lineHeight,
  textDecoration: theme.typography['Components']['button-small'].textDecoration,
  textTransform: theme.typography['Components']['button-small'].textTransform,
}));

const DividerHorizontal: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const ProfileContent: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['background']['default'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  alignSelf: `stretch`,
  height: `646px`,
  margin: `0px`,
}));

const FormContainer: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['colors']['grey']['100'],
  display: `flex`,
  position: `absolute`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `500px`,
  height: `709px`,
  left: `400px`,
  top: `0px`,
}));

const DividerVertical: any = styled(Divider)(({ theme }: any) => ({
  height: `709px`,
  margin: `0px`,
}));

const Body1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const ContainerHeader1: any = styled('div')({
  borderRadius: `6px 0px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Frame31: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const LeftContent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 8px 0px 0px`,
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

const CloseOutlined: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `20px`,
  height: `20px`,
  margin: `0px`,
  overflow: `hidden`,
});

const Vector: any = styled('img')({
  height: `11.67px`,
  width: `11.67px`,
  position: `absolute`,
  left: `4px`,
  top: `4px`,
});

const Content2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `4px 0px 5px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Title1: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['h5'].fontStyle,
  fontFamily: theme.typography['Typography']['h5'].fontFamily,
  fontWeight: theme.typography['Typography']['h5'].fontWeight,
  fontSize: theme.typography['Typography']['h5'].fontSize,
  letterSpacing: theme.typography['Typography']['h5'].letterSpacing,
  lineHeight: theme.typography['Typography']['h5'].lineHeight,
  textDecoration: theme.typography['Typography']['h5'].textDecoration,
  textTransform: theme.typography['Typography']['h5'].textTransform,
  margin: `0px`,
}));

const FormContent: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  alignSelf: `stretch`,
  height: `652px`,
  margin: `0px`,
});

const InvestorContainer: any = animated(
  styled('div', {
    shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
  })(({ theme, data }: any) => ({
    backgroundColor: theme.palette['colors']['grey']['100'],
    display: `flex`,
    position: `absolute`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `0px`,
    boxSizing: `border-box`,
    width: `500px`,
    height: `709px`,
    left: `900px`,
    top: `0px`,
  }))
);

const DividerVertical1: any = styled(Divider)(({ theme }: any) => ({
  height: `709px`,
  margin: `0px`,
}));

const Body2: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const ContainerHeader2: any = styled('div')({
  borderRadius: `6px 0px 0px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `center`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Frame32: any = styled('div')(({ theme }: any) => ({
  backgroundColor: theme.palette['background']['default'],
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `16px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Content3: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `4px 0px 5px 0px`,
  boxSizing: `border-box`,
  flex: `1`,
  margin: `0px`,
});

const Title2: any = styled('div')(({ theme }: any) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  fontSynthesis: `none`,
  color: theme.palette['text']['primary'],
  fontStyle: theme.typography['Typography']['h5'].fontStyle,
  fontFamily: theme.typography['Typography']['h5'].fontFamily,
  fontWeight: theme.typography['Typography']['h5'].fontWeight,
  fontSize: theme.typography['Typography']['h5'].fontSize,
  letterSpacing: theme.typography['Typography']['h5'].letterSpacing,
  lineHeight: theme.typography['Typography']['h5'].lineHeight,
  textDecoration: theme.typography['Typography']['h5'].textDecoration,
  textTransform: theme.typography['Typography']['h5'].textTransform,
  margin: `0px`,
}));

const DividerHorizontal1: any = styled(Divider)(({ theme }: any) => ({
  alignSelf: `stretch`,
  margin: `0px`,
}));

const InvestorContent: any = styled('div')({
  borderRadius: `0px 0px 6px 0px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `32px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Button2: any = styled(Button, {
  shouldForwardProp: (prop: any) => !['data'].includes(prop.toString()),
})(({ theme, data }: any) => ({
  margin: `0px`,
  color: theme.palette['primary']['contrast'],
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `500`,
  fontSize: `14px`,
  letterSpacing: `0.4000000059604645px`,
  textDecoration: `none`,
  lineHeight: `24px`,
  textTransform: `uppercase`,
}));

function EntityContainer(props: EntityContainerProps): JSX.Element {
  const { data, fns } = useEntityContainer();

  const InvestorContainerStateopen = { width: `500px`, left: `900px` };
  const InvestorContainerStateclose = { width: `999px`, left: `401px` };
  const [InvestorContainerStateStyles, InvestorContainerStateApi] = useSpring(
    () => ({
      from: eval('InvestorContainer' + data.currentVariant),
      config: { duration: 1000 },
      delay: 500,
    })
  );

  const switchStateToStateopen: (
    duration: number,
    delay: number,
    easing: string
  ) => void = (
    duration: number = 0,
    delay: number = 0,
    easing: string = 'linear'
  ) => {
    InvestorContainerStateApi.start({
      ...InvestorContainerStateopen,
      delay,
      config: { duration, easing: easings[easing] },
    });
  };

  const switchStateToStateclose: (
    duration: number,
    delay: number,
    easing: string
  ) => void = (
    duration: number = 0,
    delay: number = 0,
    easing: string = 'linear'
  ) => {
    InvestorContainerStateApi.start({
      ...InvestorContainerStateclose,
      delay,
      config: { duration, easing: easings[easing] },
    });
  };
  return (
    <StateOpen className={props.className}>
      <Content>
        <ProfileContainer>
          <Body>
            <ContainerHeader>
              <Frame3>
                <Content1>
                  <Title>{`Entity`}</Title>
                </Content1>
                <RightContent>
                  <Button1
                    size={'small'}
                    color={'primary'}
                    disabled={false}
                    variant={'text'}
                    onClick={() => {
                      switchStateToStateopen(250, 0, 'easeOutQuart');
                      fns.setCurrentVariant('Stateopen');
                    }}
                    data={data}
                  >
                    {'Edit'}
                  </Button1>
                </RightContent>
              </Frame3>
              <DividerHorizontal orientation="horizontal" />
            </ContainerHeader>
            <ProfileContent></ProfileContent>
          </Body>
        </ProfileContainer>
        <FormContainer>
          <DividerVertical orientation="vertical" />
          <Body1>
            <ContainerHeader1>
              <Frame31>
                <LeftContent>
                  <Icon1>
                    <CloseOutlined
                      onClick={() => {
                        switchStateToStateclose(250, 0, 'easeOutQuart');
                        fns.setCurrentVariant('Stateclose');
                      }}
                    >
                      <Vector src={VectorImage} loading="lazy" alt={'Vector'} />
                    </CloseOutlined>
                  </Icon1>
                </LeftContent>
                <Content2>
                  <Title1>{`Edit Entity`}</Title1>
                </Content2>
              </Frame31>
            </ContainerHeader1>
            <FormContent></FormContent>
          </Body1>
        </FormContainer>
        <InvestorContainer
          data={data}
          style={{ ...InvestorContainerStateStyles }}
        >
          <DividerVertical1 orientation="vertical" />
          <Body2>
            <ContainerHeader2>
              <Frame32>
                <Content3>
                  <Title2>{`Individual`}</Title2>
                </Content3>
              </Frame32>
              <DividerHorizontal1 orientation="horizontal" />
            </ContainerHeader2>
            <InvestorContent>
              <Button2
                size={'medium'}
                color={'primary'}
                disabled={false}
                variant={'contained'}
                data={data}
              >
                {'Add Individual'}
              </Button2>
            </InvestorContent>
          </Body2>
        </InvestorContainer>
      </Content>
    </StateOpen>
  );
}

export default EntityContainer;
