import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import useSWR from "swr";
import { createGlobalStyle } from "styled-components";

const InputField = styled.input`
    text-align: center;
    border-radius: 20px;
    width: 100%;
    border: 0px;
    padding: 20px 0px 20px 0px;
    background-color: white;
    margin-bottom: 20px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
        rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;

const HeaderText = styled.h1`
    text-align: center;
`;

const Input = styled.div`
    margin: auto;
    width: 50%;
`;

const Feelings = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Circle = styled.div`
    background-color: pink;
    margin-right: 20px;
    margin-bottom: 20px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #FDF6F6;
    }
`;

async function getData(path: string) {
    return await axios
        .get(path, {
            headers: {
                Authorization: "enter_auth_here",
            },
        })
        .then((response) => {
            console.log("response.data", response.data);
            return response.data.reverse();
        });
}

type Feeling = {
    id: number;
    feeling: string;
    datum: string;
};

function App() {
    const { data, error } = useSWR(
        "http://localhost:8080/getFeelings",
        getData
    );

    console.log("data", data);

    return (
        <>
            <GlobalStyle />
            <HeaderText style={{ fontSize: "50px" }}> ☁️ </HeaderText>
            <HeaderText>how are you feeling today?</HeaderText>
            <Input>
                <form>
                    <InputField
                        type="text"
                        placeholder="type here + press enter"
                        id="inputbox"
                        name="feeling"
                    />
                </form>
            </Input>

            <Feelings>
                {data &&
                    data.map((feeling: Feeling) => {
                        return <Circle> {feeling.feeling} </Circle>;
                    })}
            </Feelings>
        </>
    );
}

export default App;
