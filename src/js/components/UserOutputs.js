import inputData from "../data/input-data"
import Seat from "./Seat"

export default function UserOutput(props) {
    if (!props.busData) {
        return (
            <div className="outputs-container">
                <div className="bus-info">
                    <div className="bus-title">
                        <div className="ic-wrap ic-40 ic-bus">
                            <img src="./ic-bus.svg" alt="bus icon"/>
                        </div>
                        <div className="txt --20">Tp. Hồ Chí Minh</div>
                        <div className="ic-wrap ic-24 ic-arr">
                            <img src="./ic-arr-right.svg" alt="arrow right icon"/>
                        </div>
                        <div className="txt --20">Tđ. Hà Nội</div>
                    </div>
                    <div className="bus-time">
                        <div className="ic-wrap ic-24 ic-arr">
                            <img src="./ic-clock.svg" alt="clock icon"/>
                        </div>
                        <div className="txt --20">07:00 - 01/02/2023</div>
                    </div>
                </div>
                <div className="bus-main">
                    <div className="bus-legends">
                        <div className="txt --16">Chọn vị trí ngồi và số lượng ghế</div>
                        <div className="legend-items">
                            <div className="legend-item">
                                <div className="legend-ic selected"></div>
                                <div className="txt --16">Đã chọn</div>
                            </div>
                            <div className="legend-item">
                                <div className="legend-ic"></div>
                                <div className="txt --16">Ghế trống</div>
                            </div>
                            <div className="legend-item">
                                <div className="legend-ic disable"></div>
                                <div className="txt --16">Không khả dụng</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bus-map">
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />
                    <Seat id="01" name="A15" isSelectable={true} />

                    <div className="bus-map-entry txt --16">Lối vào/ ra</div>
                    <div className="bus-map-driver txt --20">Tài xế</div>
                    <div className="bus-map-blocker"></div>
                </div>
                
                <div className="bus-register">
                    <div className="txt --28">Đăng ký thông tin</div>
                </div>
            </div>
        )
    } else {
        return
    }
    
}