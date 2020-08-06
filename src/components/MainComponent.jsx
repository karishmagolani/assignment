import React, { Component } from "react";
import PropTypes from "prop-types";
import * as TempComponents from "./InnerComponents/index";

class MainComponent extends Component {
  render() {
    const { data } = this.props;
    console.log("data", data);
    return (
      <div>
        {data &&
          data.length > 0 &&
          data.map((item, i) => {
            // const { component, prop } = item;
            console.log("item---", item, <item.component />);
            const TempComponent = TempComponents[item.component];
            console.log("TEMPPP", TempComponent, <item.component />);
            return (
              //   <Section>shjhjhj</Section>
              <div key={i}>
                {/* <item.component /> */}
                {TempComponent && <TempComponent key={i} data={item.props} />}
                {/* <div></div> */}
              </div>
            );
          })}
      </div>
    );
  }
}

MainComponent.propTypes = {};

export default MainComponent;
