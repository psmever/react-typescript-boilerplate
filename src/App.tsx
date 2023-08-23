import { TextStyles } from '@Styles';
import TestComponent from '@Component/TestComponent';

const {
    Main: { Container, Hello, EtcWapper },
} = TextStyles;

const App = () => {
    return (
        <Container>
            <Hello>
                <p>Hello, World!!!</p>
            </Hello>
            <EtcWapper>
                <TestComponent />
            </EtcWapper>
        </Container>
    );
};

export default App;
