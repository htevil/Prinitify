import logo from "../../assets/oie_transparent.png";
import facebook from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import Linkedin from "../../assets/Linkedin.svg";
import reddit from "../../assets/reddit.svg";
import Youtube from "../../assets/Youtube.svg";
import { foption1,foption2,foption3,foption4 } from "../../data/value";

export default function Footer() {
    return (
        <div style={{ width: "100vw", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center" }}>
            <div style={{width:"100%", maxWidth:"1280px", display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:"40px", marginTop:"40px"}}>
                <img src={logo} alt="logo" style={{width:"160px"}} />

                <div style={{display:"flex",gap:"20px"}}>
                    <img src={facebook} alt="logo" style={{width:"32px"}} />
                    <img src={insta} alt="logo" style={{width:"32px"}} />
                    <img src={Linkedin} alt="logo" style={{width:"32px"}} />
                    <img src={reddit} alt="logo"style={{width:"32px"}} />
                    <img src={Youtube} alt="logo" style={{width:"32px"}} />
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"row", gap:"120px", marginTop:"40px"}}>
                <div style={{display:"flex", flexDirection:"row", gap:"120px"}}>
                    <div style={{display:"flex",flexDirection:"column"  }}>
                        <span style={{paddingBottom:"12px"}}><b>Integration</b></span>
                        {foption1.map((item, index) =>  (<span key={index} id="btn" style={{ padding:"6px 0px", fontSize:"14px",fontWeight:"400"}}>{item}</span>))}
                    </div>
                    <div style={{display:"flex",flexDirection:"column"  }}>
                        <span style={{paddingBottom:"12px"}}><b>Discover</b></span>
                        {foption2.map((item, index) =>  (<span key={index} id="btn" style={{ padding:"6px 0px", fontSize:"14px", fontWeight:"400"}}>{item}</span>))}
                    </div>
                </div>
                <div style={{display:"flex", flexDirection:"row", gap:"120px"}}>
                    <div style={{display:"flex",flexDirection:"column"  }}>
                        <span style={{paddingBottom:"12px"}}><b>Start Selling</b></span>
                        {foption3.map((item, index) =>  (<span key={index} id="btn" style={{ padding:"6px 0px", fontSize:"14px", fontWeight:"400"}}>{item}</span>))}
                    </div>
                    <div style={{display:"flex",flexDirection:"column"  }}>
                        <span style={{paddingBottom:"12px"}}><b>Printify</b></span>
                        {foption4.map((item, index) =>  (<span key={index} id="btn" style={{ padding:"6px 0px", fontSize:"14px", fontWeight:"400"}}>{item}</span>))}
                    </div>
                </div>
            </div>

            <div style={{ width:"100%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", fontSize: "12.5px", padding: "40px 0px", backgroundColor: "#F5F5F5", marginTop:"60px" }}>
                <div style={{ display: "flex", gap: "20px" }}>
                    <span>Intellectual Property Policy</span>
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                    <span>Security</span>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <span>© 2024 Printify, Inc. All rights reserved.</span>
                </div>
            </div>

        </div>


    );
}