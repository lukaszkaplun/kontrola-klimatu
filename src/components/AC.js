import React, { Component } from "react";
import { Row, Col } from "reactstrap";
export default class AC extends Component {
    render() {
        return (
            <section className={" swiper-slide single-slide ac"}>
                <div className="content-wrapper">
                    <h2 className="heading">Klimatyzacja</h2>

                    <Row noGutters>

                        <Col xs={12} md={6}>
                            <h3 className="subheading">Po co montować klimatyzację?</h3>
                            <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam risus metus, lobortis eu mattis vel, viverra vel lectus. Etiam condimentum, nunc commodo egestas blandit, erat massa condimentum orci, non accumsan leo risus aliquam arcu. Nam at gravida tellus, sit amet fermentum risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris vulputate luctus elementum. Pellentesque id fermentum velit. Sed auctor a neque eget facilisis. Integer id justo quis elit interdum luctus.</p>

                        </Col>
                        <Col xs={12} md={6}>

                        </Col>
                    </Row>




                </div>
            </section>
        );
    }
}
