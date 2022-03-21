import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {RecItem, RecInfo} from "../style";

class Recommend extends PureComponent {
    render() {
        return(
            <RecItem>
                {
                    this.props.list.map((item) => {
                        return <RecInfo imgUrl={item.get('imgUrl')} key={item.get('id')}/>
                    })
                }
            </RecItem>
        )
    }
}
const mapState = (state) => ({
    list: state.getIn(['home', 'recommendList'])
})
export default connect(mapState, null)(Recommend);