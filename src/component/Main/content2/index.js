import fimg1 from "../../../assets/higher-profits.svg";
import fimg2 from "../../../assets/best-selection.svg";
import fimg3 from "../../../assets/robust-scaling.svg";

export default function Content2() {
    return (
        <div style={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "100%", maxWidth: "1360px", height:"fit-content", display: "flex",padding: "100px", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "40px"}}>
                <div style={{ width: "23%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start",paddingTop:"5px" }}>
                    <img src={fimg1} style={{ width: "150px", marginBottom: "15px" }} alt="fimg1" />
                    <span style={{ fontSize: "18px", marginBottom: "10px" }}><b>Higher Profits</b></span>
                    <span style={{}}>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</span>
                </div>
                <div style={{ width: "20%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", }}>
                    <img src={fimg2} style={{ width: "150px", marginBottom: "15px" }} alt="fimg2" />
                    <span style={{ fontSize: "18px", marginBottom: "10px" }}><b>Robust Scaling</b></span>
                    <span style={{}}>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</span>
                </div>
                <div style={{ width: "20%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                    <img src={fimg3} style={{ width: "150px", marginBottom: "15px" }} alt="fimg3" />
                    <span style={{ fontSize: "18px", marginBottom: "10px" }}><b>Best Selection</b></span>
                    <span style={{}}>With 900+ products and top quality brands, you can choose the best products for your business.</span>
                </div>
            </div>
        </div>
    );
}