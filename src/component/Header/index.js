import logo from "../../assets/oie_transparent.png";
import Dropbox from "../dropbox";
import { hoption1,hoption2,hoption3,hoption4 } from "../../data/value";

export default function Header() {




    return (
        <div style={{ width: "100vw", display:"flex",  justifyContent:"center", alignItems:"center", boxShadow:"0px 1px 0px rgba(0,0,0,0.1)",position:"fixed", backgroundColor:"#ffffff", zIndex:"2" }}>
            <div style={{ width:"100%", maxWidth:"1440px", display: "flex", justifyContent: "space-around", alignItems: "center", margin:"10px" }}>
                <div>
                    < img src={logo} alt="logo" style={{ width:"160px" }} />
                </div>
                <div style={{display: "flex", gap:"25px", color:"#000000"}}>
                    <span id="btn" style={{ cursor:"pointer"}} >Catalog</span>
                    <Dropbox para="How it Woks" value={hoption1}/>
                    <span id="btn" style={{ cursor:"pointer"}} >Pricing</span>
                    <span id="btn" style={{ cursor:"pointer"}} >Blog</span>
                    <Dropbox para="Service" value={hoption2}/>
                    <Dropbox para="Use-cases" value={hoption3}/>
                    <Dropbox para="need help?" value={hoption4}/>
                </div>
                <div style={{display:"flex", gap:"20px",textDecoration:"none" }}>
                    <button style={{fontSize:"16.2px",fontWeight:"500", padding:"8px 16px", backgroundColor:"#ffffff", border:"0.2px solid rgba(0,0,0,0.3)", borderRadius:"3px" }}>Log in</button>
                    <button style={{fontSize:"16.2px",fontWeight:"500", color:"White", padding:"4px 16px", backgroundColor:"#3fb65f", borderRadius:"3px", border:"none"}}>Sign Up</button>
                </div>
            </div>
        </div>

    );
}