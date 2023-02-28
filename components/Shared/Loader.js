import React, { Component } from 'react';


class Loader extends Component {
    render() {
        if(this.props.loading)
        return (
            // <></>
            // <>
            //     <div className={`preloader ${this.props.loading ? '' : 'preloader-deactivate'}`}>
            //         <div id="global">
            //             <div id="top" className="mask">
            //                 <div className="plane"></div>
            //             </div>

            //             <div id="middle" className="mask">
            //                 <div className="plane"></div>
            //             </div>

            //             <div id="bottom" className="mask">
            //                 <div className="plane"></div>
            //             </div>

            //             <p><i>LOADING...</i></p>
            //         </div>
            //     </div>
            // </>
            <div style={
                this.props.loading ? 
                {position: "fixed", top: "0", left: "0", width:"100%", height:"100%", zIndex:"99999", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}
                    :
                {zIndex:"-1"}
                } className="background">
                <div>
                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <circle id="test" cx="40" cy="40" r="32"></circle>
                    </svg>
                </div>

                <div className="loader triangle">
                    <svg viewBox="0 0 86 80">
                        <polygon points="43 8 79 72 7 72"></polygon>
                    </svg>
                </div>

                <div className="loader">
                    <svg viewBox="0 0 80 80">
                        <rect x="8" y="8" width="64" height="64"></rect>
                    </svg>
                </div>

                <div style={{width:"100%", textAlign:"center", marginTop:"10px", fontSize:"17px"}}>리더스 힐링 아카데미</div>

                </div>
          </div>

        );
    }
}

export default Loader;