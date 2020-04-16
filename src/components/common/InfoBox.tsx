import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";

interface IInfoBoxProps {
  title: string;
  content: string;
  illustration?: string;
}

class InfoBox extends React.PureComponent<IInfoBoxProps, {}> {
  render = () => {
    return (
      <StyledCard>
        <StyledCardContent>
          <StyledTitle variant="h4">{this.props.title}</StyledTitle>
          {this.props.illustration && (
            <StyledIllustration src={this.props.illustration} />
          )}
          <Typography variant="body2">{this.props.content}</Typography>
        </StyledCardContent>
      </StyledCard>
    );
  };
}

const StyledTitle: AnyStyledComponent = styled(Typography)`
  && {
    margin-bottom: 0.4rem;
  }
`;

const StyledCard: AnyStyledComponent = styled(Card)`
  && {
    border-radius: 15px;
    height: 100%;
    box-shadow: 0px 2px 24px #e3e6eb;
  }
`;

const StyledCardContent: AnyStyledComponent = styled(CardContent)`
  && {
    text-align: center;
    padding: 1.5rem 2rem 2rem 1.5rem;

    &:last-child {
      padding-bottom: 2rem;
    }
  }
`;

const StyledIllustration: AnyStyledComponent = styled.img`
  display: block;
  width: 80%;
  margin: 1rem auto 2rem;
`;

export default InfoBox;
