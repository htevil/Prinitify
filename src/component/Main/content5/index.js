import jimg1 from "../../../assets/2808334.jpg"

export default function Content5() {
    return (
        <>
            <div style={{ width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",color:"white"}}>
                <div style={{ width: "100%", maxWidth: "1360px", display: "flex", justifyContent: "center", alignItems: "center", padding: "80px 80px 40px 80px" }}>
                    <div style={{ width: "27%", display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "0px", backgroundColor: "#1A3636", padding:"50px 80px", borderRadius: "20px 0px 0px 20px" }}>
                        <p style={{ fontSize: "40px", fontWeight: "650",color:"white", textAlign: "left", marginBottom: "20px", marginTop: "0px" }}>Make Money, Risk- <br />Free</p>
                        <span style={{ width: "100%", marginBottom: "25px", fontSize: "16px",color:"white" }}>You pay for fulfillment only when you make a sale</span>
                        <div style={{width:"75%",padding:"40px",backgroundColor:"rgba(0,0,0,0.4)", borderRadius:"8px", marginBottom:"25px", fontWeight:"500"}}>
                            <div style={{width:"100%",display:"flex", justifyContent:"space-between",marginBottom: "20px"}}>
                                <span style={{}}>You sell a t-shirt</span>
                                <span>$ 30</span>
                            </div>
                            <div style={{width:"100%",display:"flex", justifyContent:"space-between",marginBottom: "40px"}}>
                                <span>You pay for its production</span>
                                <span>$ 12</span>
                            </div>
                            <div style={{width:"100%",display:"flex", justifyContent:"space-between",paddingTop:"20px", borderTop:"1px solid #FFEDD8"}}>
                                <span style={{fontSize:"18px", color:"#3fb65f"}}>Your profit</span>
                                <span style={{fontSize:"18px", color:"#3fb65f"}}>$ 18</span>
                            </div>
                        </div>
                        <button style={{ fontSize: "18px", fontWeight: "500", color: "White", padding: "8px 16px", backgroundColor: "#3fb65f", borderRadius: "3px", border: "none", marginBottom:"20px" }}>Start selling</button>
                        <span style={{fontSize:"14px", color:"#3fb65f"}}>100% Free to use · 900+ Products · Largest print network</span>
                    </div>
                    <img src={jimg1} style={{ width: "38%", height:"100%", borderRadius: "6px" }} alt="Himg1" />
                </div>
            </div>
        </>
    );
}