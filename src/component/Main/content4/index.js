import gimg1 from "../../../assets/custom-products.png";
import gimg2 from "../../../assets/your-products.png";
import gimg3 from "../../../assets/fullfillment.png";

export default function Content4() {
    return (
    <>
        <div style={{ width: "100vw", display: "flex", justifyContent: "center", backgroundColor: "#f5f5f5" }}>
            <div style={{ width: "100%", maxWidth: "1360px", display: "flex", justifyContent: "center", alignItems: "center", gap: "50px", padding: "40px 40px 100px 40px" }}>
                {/* CREATE Section */}
                <div style={{ width: "25%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                    <img src={gimg1} style={{ width: "150px", marginBottom: "15px" }} alt="Custom products icon" />
                    <span style={{ fontSize: "18px", marginBottom: "10px" }}><b>CREATE</b></span>
                    <span style={{ fontSize: "18px", marginBottom: "10px" }}><b>custom products</b></span>
                    <span>Easily add your designs to a wide range of products using our free tools</span>
                </div>

                {/* SELL Section */}
                <div style={{ width: "25%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                    <img src={gimg2} style={{ width: "150px", marginBottom: "15px" }} alt="Your products icon" />
                    <span style={{ fontSize: "18px", marginBottom: "10px" }}><b>SELL</b></span>
                    <span style={{ fontSize: "18px", marginBottom: "10px" }}><b>on your terms</b></span>
                    <span>You choose the products, sale price, and where to sell</span>
                </div>

                {/* FULFILLMENT Section */}
                <div style={{ width: "25%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-start" }}>
                    <img src={gimg3} style={{ width: "150px", marginBottom: "15px" }} alt="Fulfillment icon" />
                    <span style={{ fontSize: "18px", marginBottom: "10px" }}><b>WE HANDLE</b></span>
                    <span style={{ fontSize: "18px", marginBottom: "10px" }}><b>fulfillment</b></span>
                    <span>Once an order is placed, we automatically handle all the printing and delivery logistics</span>
                </div>
            </div>
        </div>
        <div class="v-shape-container2" ></div>
    </>
    );
}





