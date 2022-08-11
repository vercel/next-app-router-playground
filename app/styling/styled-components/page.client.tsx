import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  width: 200px;
  height: 200px;
`;

const Text = styled.div`
  margin: auto 12px 12px;
  text-transform: uppercase;
  font-size: 14px;
  line-height: 1.6;
  color: #fff;
  align-self: flex-start;
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
`;

const Logo = styled.div`
  flex: 1 0 0;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 48px;

  & span {
    margin: 0 8px;
  }
`;

export default function Page() {
  return (
    <Container>
      <Logo>
        <span>{`<`}</span>
        <span>{`💅`}</span>
        <span>{`>`}</span>
      </Logo>

      <Text>
        <div>styled</div>
        <div>components</div>
      </Text>
    </Container>
  );
}
