import styled from "styled-components";

const Container = styled.div`
    display:flex
`;

const Panel = styled.div`
    flex: ${props => props.weight}
`;

export const SplitScreen = ({
    children,
    leftWeight: LeftWeight,
    rightWeight: RightWeight
}) => {
    const [left, right] = children;
    console.log(children);
    return (
        <Container>
            <Panel weight={LeftWeight}>
               {left}
            </Panel>
            <Panel weight={RightWeight}>
                {right}
            </Panel>
        </Container>
    );
};