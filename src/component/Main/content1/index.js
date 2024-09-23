import tickmark from "../../../assets/Tickmark.svg";
import image1 from "../../../assets/7176410_3572690.svg";
export default function Content1() {
    return (
        <div style={{ width: "100vw",display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "100%", maxWidth: "1360px", display: "flex", justifyContent: "center", alignItems: "center", gap: "50px" }}>
                <div style={{ width: "50%", display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", marginTop: "0px" }}>
                    <p style={{ fontSize: "56px", fontWeight: "650", textAlign: "left", marginBottom: "20px", marginTop: "0px" }}>Create and sell <br />custom products</p>
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                        <div style={{ fontSize: "18px", fontWeight: "500", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}><img src={tickmark} style={{ width: "32px" }} alt="tick" /><span>100% Free to use</span></div>
                        <div style={{ fontSize: "18px", fontWeight: "500", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}><img src={tickmark} style={{ width: "32px" }} alt="tick" /><span>900+ High-Quality Products</span></div>
                        <div style={{ fontSize: "18px", fontWeight: "500", display: "flex", justifyContent: "center", alignItems: "center", gap: "10px" }}><img src={tickmark} style={{ width: "32px" }} alt="tick" /><span>Largest global print network</span></div>
                    </div>
                    <div style={{ display: "flex", gap: "20px", textDecoration: "none", marginTop: "20px" }}>
                        <button style={{ fontSize: "18px", fontWeight: "500", color: "White", padding: "8px 20px", backgroundColor: "#3fb65f", borderRadius: "3px", border: "none" }}>Start for free</button>
                        <button style={{ fontSize: "18px", fontWeight: "500", padding: "8px 20px", backgroundColor: "#ffffff", border: "0.2px solid rgba(0,0,0,0.3)", borderRadius: "3px" }}>How it work?</button>

                    </div>
                    <p style={{ color: "#3fb65f", fontWeight: "500" }}>Trusted by over 8M sellers around the world</p>
                </div>
                <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img src={image1} style={{ width: "100%" }} alt="image1" />
                </div>
            </div>
        </div>
    );
};