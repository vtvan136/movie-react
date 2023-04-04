import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
      <div className={style.footer}>
        <div className={style.footer__icon}>
          <FaFacebookF className={style.icon} style={{ fill: "white" }} size={20} />
          <FaInstagram className={style.icon} style={{ fill: "white" }} size={20} />
          <FaTwitter   className={style.icon} style={{ fill: "white" }} size={20} />
          <FaYoutube   className={style.icon} style={{ fill: "white" }} size={20} />
        </div>
        <ul className={style.list}>
          {list_footer.map((key, id) => (
            <li key={id}>
              <a href="/movie-react">{key}</a>
            </li>
          ))}
        </ul>
        <button className={style.button}>Mã dịch vụ</button>
      </div>
  );
};

export default Footer;

const list_footer = [
  "Mô tả âm thanh",
  "Trung tâm trợ giúp",
  "Thẻ quà tặng",
  "Trung tâm đa phương tiện",
  "Quan hệ với nhà đầu tư",
  "Việc làm",
  "Điều khoản sử dụng",
  "Quyền riêng tư",
  "Thông báo pháp lý",
  "Tùy chọn cookie",
  "Thông tin doanh nghiệp",
  "Liên hệ với chúng tôi",
];

const style = {
  icon:"mr-4",
  button: "rounded-sm border-gray-500 border px-2 mb-5 py-2 text-[13px]",
  footer__icon: "flex mb-[1rem] justify-items-stretch",
  footer: "w-full max-w-[980px] mx-auto  mt-[70px] px-[4%] text-[grey]",
  list: "mb-[14px] text-[13px] lg:grid-cols-4 gap-4 grid  md:grid-cols-2 ",
};
