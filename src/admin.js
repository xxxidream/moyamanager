import React from 'react'
import {Row,Col} from 'antd'
import './style/common.less'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'
export default class Admin extends React.Component{

    render(){
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft></NavLeft>
                </Col>
                <Col span="20" className="main">
                    <Header></Header>
                    <Row className="content">
                        {/*{this.props.children}*/}
                       content
                    </Row>
                    <Footer></Footer>
                </Col>
            </Row>
        );
    }
}