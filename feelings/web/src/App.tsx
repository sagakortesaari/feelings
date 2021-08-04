import styled from "styled-components";
import axios from "axios";
import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { useEffect } from "react";

const InputField = styled.input`
    text-align: center;
    width: 100%;
    border: 0px;
    padding: 20px 0px 20px 0px;
    background-color: white;
    margin-bottom: 20px;
    outline: none;
    font-family: mr-eaves-modern, sans-serif;
    font-size: 20px;
`;

const HeaderText = styled.h1`
    text-align: center;
    font-family: orpheuspro, serif;
    font-weight: 400;
    font-style: normal;
    font-size: 50px;
    color: #c84238;
    margin-bottom: 20px;
    margin-top: 20px;
    user-select: none;
`;

const Input = styled.div`
    margin: auto;
    max-width: 600px;
    margin-top: 40px;
    margin-bottom: 40px;
`;

const Feelings = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    font-family: mr-eaves-modern, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 20px;
    max-width: 1400px;
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
        background-color: #F4E4E9;
        margin-top: 40px;
    }
`;

const Emoji = styled.div`
    height: 60px;
    font-size: 50px;
    text-align: center;
    user-select: none;
`;

const CircleText = styled.div`
    text-align: center;
`;

const FeelingContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 10%;
    margin-left: 10%;
`;

type Feeling = {
    id: number;
    feeling: string;
    datum: string;
};

function generateNum(from: number, to: number) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

function App() {
    const [formText, setFormText] = useState("");
    const [feelings, setFeelings] = useState<Feeling[]>([]);
    const [emoji, setEmoji] = useState("");
    const emojis = ["❤️", "❤️‍🔥", "💔", "❤️‍🩹", "🔥", "🌈", "💌"];

    useEffect(() => {
        setEmoji(emojis[generateNum(0, emojis.length - 1)]);
        axios
            .get("http://localhost:8080/getFeelings", {
                headers: {
                    Authorization: "",
                },
            })
            .then((response) => {
                setFeelings(response.data.reverse());
            });
    }, []);

    async function addFeeling(event: React.FormEvent) {
        event.preventDefault();
        axios.post(
            "http://localhost:8080/feeling",
            { feeling: formText },
            {
                headers: { Authorization: "" },
            }
        );
        //mutate({feeling: formText})
        //data && setFeelings(data);
        const feeling: Feeling = {
            feeling: formText,
            id: 3,
            datum: "2020-01-20",
        };
        setFeelings([feeling, ...feelings]);
        setFormText("");
    }

    return (
        <>
            <GlobalStyle />
            <Emoji> {emoji} </Emoji>
            <HeaderText>how are you feeling today?</HeaderText>
            <Input>
                <form onSubmit={addFeeling}>
                    <InputField
                        type="text"
                        placeholder="type here + press enter"
                        id="feeling"
                        name="feeling"
                        onChange={(e) => setFormText(e.currentTarget.value)}
                        value={formText}
                    />
                </form>
            </Input>

            <FeelingContainer>
                <Feelings>
                    {feelings.map((feeling: Feeling) => {
                        return (
                            <Circle key={feeling.id}>
                                {" "}
                                <CircleText>
                                    {" "}
                                    {feeling.feeling}{" "}
                                </CircleText>{" "}
                            </Circle>
                        );
                    })}
                </Feelings>
            </FeelingContainer>
        </>
    );
}

export default App;
