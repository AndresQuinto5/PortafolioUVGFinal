import React from "react"
import '../main.scss'
import Showcase from '../Items/Showcase'

export default class RecentAchievements extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center', marginBottom:'2em'}}>
                <h1 className="title">Contact Me</h1>
                <div className="cardSpace">
                    <Showcase title='Email'
                        imgUrl='../../resources/images/logo.png'
                        description='Qui18288@uvg.edu.gt'/>
                    <Showcase
                        title='Social Networks'
                        imgUrl='../../resources/images/logo.png'
                        description='Contact me in direct messege with detailed info of what you want.'/>
                </div>
            </div>
        )
    }
}