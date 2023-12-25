import Header from "../layout/Header";
import Footer from "../layout/Footer";

function Shopday() {
  return (
    <main className="bg-brand">
      <Header />
      <div className="flex gap-5 p-6">
        <div>
          <img
            src="https://media-public.canva.com/MADQ5FB0hZs/1/screen.jpg"
            alt=""
            className="rounded"
          />
        </div>
        <div className="bg-white rounded-2xl p-10 prose">
          <h2 className="text-brand font-bold mb-10">Shopday</h2>
          <p>
            Chúng tôi cung cấp giải pháp phần mềm cho doanh nghiệp vừa và nhỏ.
          </p>
          <p>
            <b>Giải pháp:</b> Quảng cáo, bán sản phẩm.
          </p>
        </div>{" "}
      </div>

      <Footer />
    </main>
  );
}

export default Shopday;
