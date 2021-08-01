import styled from "styled-components";
import axios from "axios";

const InputField = styled.input`
    text-align: center;
    width: 50%;
    border-radius: 20px;
    border: 0px;
    background-color: pink;
`;

const HeaderText = styled.h1``;

const Feelings = styled.div`
    display: flex;
`;

function App() {
    axios.get("http://localhost:8080/getFeelings").then((response) => {
        console.log(response);
    });

    return (
        <>
            <p style={{ fontSize: "50px" }}> ☁️ </p>
            <HeaderText>how are you feeling today????</HeaderText>
            <form>
                <InputField
                    type="text"
                    placeholder="type here + press enter"
                    id="inputbox"
                    name="feeling"
                />
            </form>

            <Feelings></Feelings>
        </>
    );
}

export default App;
