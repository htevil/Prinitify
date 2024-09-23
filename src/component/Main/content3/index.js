import Himg1 from "../../../assets/Gemini_Generated_Image_ppuk8jppuk8jppuk.jpeg"
import next from "../../../assets/next.png";

export default function Content3() {
    return (
        <>
            <div class="v-shape-container"></div>
            <div style={{ width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" }}>
                <div style={{ width: "100%", maxWidth: "1360px", display: "flex", justifyContent: "center", alignItems: "center", padding: "100px", backgroundColor: "#f5f5f5" }}>
                    <img src={Himg1} style={{ width: "35%", borderRadius: "6px" }} alt="Himg1" />
                    <div style={{ width: "35%", display: "flex", flexDirection: "column", alignItems: "flex-start", marginTop: "0px", backgroundColor: "#ffffff", padding: "80px 0px 80px 160px", borderRadius: "0px 20px 20px 0px" }}>
                        <p style={{ fontSize: "28px", fontWeight: "650", textAlign: "left", marginBottom: "10px", marginTop: "0px" }}>Easily add your design to a <br />wide range of products</p>
                        <span style={{ width: "75%", marginBottom: "10px" }}>With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.</span>
                        <p style={{ color: "#3fb65f", fontWeight: "500" }}>All products <img src={next} style={{ width: "15px" }} alt="next.log" />  </p>
                    </div>
                </div>
            </div>
        </>
    );
}