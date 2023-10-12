import React from "react";
import location from '../../.././images/page_1/header/location.svg'
import clock from '../../.././images/page_1/header/clock.svg'
import whatsUpp from '../../.././images/page_1/header/whatsUpp.svg'
import '../../.././css/style.css'


class HeaderTop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            location: "Россия, Москва, 38КМ МКАД, 6Бс1",
            clock: "Время работы: c 08:00 до 21:00",
            whatsApp: "Whatsapp"
        }
    }

    render(){
        return(
            <div className={"header-top"}>
                <a className={"header-top-location-desc"} href={"#"}>{this.state.location}</a>
                <p className={"header-top-clock-desc"}>{this.state.clock}</p>
                <a className={"header-top-whatsupp-desc"} href={"#"}>{this.state.whatsApp}</a>
            </div>
        )
    }
}
export default HeaderTop