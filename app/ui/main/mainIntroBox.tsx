"use client"

import styled from "styled-components";

type MainIntroBox_type = {
    title:string,
    info:string,
    url:string
}

export default function MainIntroBox({
    title,info,url
}:MainIntroBox_type){

    return(
        <ContainerTotal>
            <ContainerMain url={url}>
                        <ContainerBox>
                               
                        </ContainerBox>
                       
            </ContainerMain>
            <ContainerText>
                <span className="text-xl font-bold text-white">
                    {title}
                </span>
                <span className="text-sm font-light text-white">
                    {info}
                </span>
            </ContainerText>
        </ContainerTotal>
    )
}
const ContainerTotal = styled.div`
    max-width: 360px;
    max-height: 360px;
    width: 24vw;
    height: 24vw;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 2px 4px 12px #00000014;
    transition: all 0.5s;
    cursor: pointer;
    &:hover{
        scale: 1.02;
        box-shadow: 2px 4px 12px #0000007a;
        &>div:first-child{
            scale: 1.2;
            filter: blur(5px);
        }
    }
    @media (max-width: 1024px) {

        max-width: 80vw;
        max-height: calc(80vw * 0.475);
        width: 80vw;
        height: calc(80vw * 0.625);
        
    }
`
const ContainerMain = styled.div<{ url: string }>`
    position: relative;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    border: 1px solid #1d3a444e;
    box-shadow: 5px 10px 20px #1d3a4446;
    background-image: url(${props => props.url});
    background-repeat:no-repeat;
    background-position: center;
    background-size:cover;
    overflow: hidden;
    border-radius: 6px;
    transition: all 0.5s;
`;

const ContainerBox = styled.div`
    background-color: #0000008c;
    cursor: pointer;
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
`;

const ContainerText = styled.div`

    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

`