import React, { Component } from "react";
import './withFadeInWhenInView.css'
const withFadeInWhenInView = WrappedComponent => {
   // Viết code ở đây sao cho khi người dùng cuộn chuột trên trang,
  // và WrappedComponent đi từ ngoài vào trong cửa sổ trình duyệt
  // thì nó sẽ hiện ra từ từ với animation speed là 2s (hiệu ứng fadein)
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        opacity: 0
      };
      this.wrapperRef=React.createRef()
      this.handleScroll = this.handleScroll.bind(this);
    }
    handleScroll() {
      //console.log(document.documentElement.scrollTop);
      //this.setState({opacity:0.5})
      let wrapper=this.wrapperRef.current;
      //wrapper.classList.toggle('faded')
     // wrapper.classList.remove('faded')
      if (document.documentElement.scrollTop>700) {wrapper.classList.add('faded')}
      else wrapper.classList.remove('faded')
      console.log(document.documentElement.scrollTop)
    //   this.setState({
    //     opacity:
    //       1 -
    //       document.documentElement.scrollTop /
    //         document.documentElement.offsetHeight
    //   });
     // console.log(document.documentElement.scrollTop, this.state.opacity);wrapper.offsetTop,
    }
    componentDidMount() {
      window.addEventListener("scroll", this.handleScroll);
    }
    render() {
      let opa=this.state.opacity
      return (
        <div className='fadein' ref={this.wrapperRef}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
 
};

export default withFadeInWhenInView;
