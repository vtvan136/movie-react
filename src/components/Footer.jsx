import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="w-full max-w-[980px] mx-auto  mt-[70px] px-[4%] text-[grey]">
        <div className="flex mb-[1rem] justify-items-stretch">
          <FaFacebookF className="mr-4" style={{ fill: "white" }} size={20} />
          <FaInstagram className="mr-4" style={{ fill: "white" }} size={20} />
          <FaTwitter className="mr-4" style={{ fill: "white" }} size={20} />
          <FaYoutube className="mr-4" style={{ fill: "white" }} size={20} />
        </div>
        <ul className="mb-[14px] text-[13px] lg:grid-cols-4 gap-4 grid  md:grid-cols-2 ">
          <li>
            <a href="/movie-react-clone">Mô tả âm thanh</a>
          </li>
          <li>
            <a href="/movie-react-clone">Trung tâm trợ giúp</a>
          </li>
          <li>
            <a href="/movie-react-clone">Thẻ quà tặng</a>
          </li>
          <li>
            <a href="/movie-react-clone">Trung tâm đa phương tiện</a>
          </li>
          <li>
            <a href="/movie-react-clone">Quan hệ với nhà đầu tư</a>
          </li>
          <li>
            <a href="/movie-react-clone">Việc làm</a>
          </li>
          <li>
            <a href="/movie-react-clone">Điều khoản sử dụng</a>
          </li>
          <li>
            <a href="/movie-react-clone">Quyền riêng tư</a>
          </li>
          <li>
            <a href="/movie-react-clone">Thông báo pháp lý</a>
          </li>
          <li>
            <a href="/movie-react-clone">Tùy chọn cookie</a>
          </li>
          <li>
            <a href="/movie-react-clone">Thông tin doanh nghiệp</a>
          </li>
          <li>
            <a href="/movie-react-clone">Liên hệ với chúng tôi</a>
          </li>
        </ul>

        <button className="rounded-sm border-gray-500 border px-2 mb-5 py-2 text-[13px]">
          Mã dịch vụ
        </button>
      </div>
    </>
  );
};

export default Footer;
