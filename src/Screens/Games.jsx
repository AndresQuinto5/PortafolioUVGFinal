import React from "react"
import Slider from '../Items/Slider'
import ProjectInfo from '../Items/ProjectInfo'
import '../main.scss'

const images = [
    "https://i.imgur.com/XKlhZFx.png",
    "https://i.imgur.com/CmdlTir.png"
];

const info = [
    {
        title: " Unity plataformer game",
        description: "A plataformer and puzzle game created on unity",
        itch: "https://itch.io/jam/proyecto-libre-game-design-2021/rate/1068506",
        git: "https://github.com/uvg-cc3060/proyecto-3-grupo-3"
        
    },
    {
        title: "E-commerce project",
        description: "E-Commerce website project",
        itch: "https://proyecto2dev.stw-uvg.site/",
    },


]

export default class Games extends React.Component {
    render() {
        return (
            <div className="Games" style={{textAlign: 'center'}}>
                <h1 className="title">Game and webpage</h1>
                <Slider info={info} images={images} />
                
            </div>
        )
    }
}