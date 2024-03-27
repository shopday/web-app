import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const Disclaimer = () => {
  const { t, i18n } = useTranslation();
  const lng = i18n.language;

  return (
    <>
      <Helmet>
        <title>
          {t("disclaimer")} | {t("site.title")}
        </title>
      </Helmet>
      <div className="prose container mx-auto p-5">
        <h1 className="">{t("disclaimer")}</h1>
        <div className="bg-white p-4 rounded-2xl">
          {lng == "en" && (
            <div>
              <p>
                Our information verification service is designed to confirm the
                accuracy of contact details, including phone numbers, email
                addresses, physical addresses, and websites.{" "}
              </p>
              <p>
                While we aim to provide reliable and current information, it's
                crucial to understand that the data is sourced from various
                available channels and may undergo changes. We do not guarantee
                the completeness, accuracy, or timeliness of the information
                provided. Users are strongly advised to independently verify the
                details obtained through our service, especially when making
                critical decisions or relying on the information for important
                matters. We disclaim any responsibility for errors, omissions,
                or inaccuracies in the data, along with any consequences arising
                from the use of our verification service.
              </p>
              <p>
                Please be aware that our service may not reveal information that
                is not publicly accessible, and we have no control over the
                availability or accuracy of third-party data. By utilizing our
                information verification service, users acknowledge and accept
                these limitations.
              </p>
            </div>
          )}
          {lng == "vi" && (
            <div>
              <p>
                Dịch vụ xác minh thông tin của chúng tôi được thiết kế để hỗ trợ
                xác nhận tính chính xác của thông tin liên lạc, bao gồm số điện
                thoại, địa chỉ email, địa chỉ vật lý và trang web.{" "}
              </p>

              <p>
                Mặc dù chúng tôi cố gắng cung cấp thông tin đáng tin cậy và cập
                nhật, nhưng quan trọng là nhận ra rằng dữ liệu thu thập dựa trên
                nhiều nguồn thông tin khác nhau và có thể thay đổi. Chúng tôi
                không đảm bảo về đầy đủ, chính xác hoặc kịp thời của thông tin
                được cung cấp. Người sử dụng được khuyến khích mạnh mẽ tự xác
                minh thông tin thu được thông qua dịch vụ của chúng tôi, đặc
                biệt là khi đưa ra các quyết định quan trọng hoặc phụ thuộc vào
                thông tin cho các vấn đề quan trọng.{" "}
              </p>
              <p>
                Chúng tôi từ chối mọi trách nhiệm đối với lỗi, thiếu sót hoặc
                không chính xác trong dữ liệu, cũng như mọi hậu quả phát sinh từ
                việc sử dụng dịch vụ xác minh của chúng tôi.{" "}
              </p>

              <p>
                Hãy lưu ý rằng dịch vụ của chúng tôi có thể không phát hiện được
                thông tin không có sẵn công khai, và chúng tôi không kiểm soát
                được sự khả dụng hoặc chính xác của dữ liệu từ bên thứ ba. Bằng
                cách sử dụng dịch vụ xác minh thông tin của chúng tôi, người sử
                dụng thừa nhận và chấp nhận những hạn chế này.
              </p>
            </div>
          )}
          <p>
            Sincerely, <br /> Hung Vu <br />
            <br /> CEO, founder
          </p>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
