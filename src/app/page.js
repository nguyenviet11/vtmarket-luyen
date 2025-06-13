'use client'
import styles from "./page.module.css";
import circel from "../../public/R-tron.png";
import image from "../../public/image.png";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const handleClick = () => {
      window.location.href = "/vtmarket-connecting"; 
  }

  return (
    <div
      // onClick={handleClick}
      // onMouseMove={handleClick}
    >
      <main className={styles.main}>
       Một trong những thách thức lớn mà ngành lúa gạo Việt Nam đang đối mặt là mức phát thải trong sản xuất. Hiện tại, mức phát thải từ sản xuất lúa gạo của Việt Nam chiếm 0,9% tổng phát thải toàn cầu, cao hơn các quốc gia xuất khẩu gạo lớn như Philippines, Thái Lan và Trung Quốc. Chính vì vậy, hướng đi phát triển “Gạo Việt xanh, phát thải thấp” được xem là giải pháp quan trọng không chỉ để nâng cao giá trị kinh tế mà còn góp phần bảo vệ môi trường và đáp ứng các tiêu chuẩn khắt khe của thị trường quốc tế.

Bên cạnh đó, vai trò của các hợp tác xã (HTX) cũng được nhấn mạnh là yếu tố then chốt trong việc hiện thực hóa mục tiêu này. Ông Trần Minh Hải, Phó Hiệu trưởng Trường Chính sách công và Phát triển nông thôn, nhận định rằng HTX chính là nền tảng cốt lõi để xây dựng chuỗi giá trị lúa gạo bền vững. Tuy nhiên, ông cũng chỉ ra rằng, các HTX tại Việt Nam hiện vẫn còn quy mô khá nhỏ, với trung bình chỉ 80 thành viên/HTX tại ĐBSCL – thấp hơn đáng kể so với mức trung bình cả nước (200 thành viên/HTX) và các quốc gia như Thái Lan (1.500 thành viên/HTX).

Theo ông Hải, để phát triển mạnh mẽ, các HTX cần có đủ năng lực và bản lĩnh để liên kết chặt chẽ với doanh nghiệp, thực hiện các hoạt động sản xuất, mua bán theo hướng chuyên nghiệp hơn. Các mô hình HTX thành công tại ĐBSCL, như HTX Tân Hưng hay Phú Thạnh, được đánh giá cao nhờ khả năng đáp ứng các tiêu chuẩn xuất khẩu, áp dụng công nghệ hiện đại như máy gặt đập liên hợp và tổ chức hiệu quả các dịch vụ thu hoạch, vận chuyển. Khi các HTX đủ mạnh để quản lý và điều phối sản xuất, chúng sẽ đóng vai trò quan trọng trong việc thúc đẩy chất lượng gạo Việt Nam, đồng thời nâng cao đời sống kinh tế cho người nông dân.

Dù còn nhiều thách thức, nhưng với những tín hiệu tích cực từ đề án 1 triệu ha lúa chất lượng cao và phát thải thấp, ngành lúa gạo Việt Nam đang cho thấy tiềm năng phát triển mạnh mẽ. Trong tương lai, việc nhân rộng các mô hình sản xuất bền vững, xây dựng thương hiệu gạo xanh, giảm phát thải và cải thiện chuỗi giá trị là nhiệm vụ quan trọng để đưa gạo Việt Nam trở thành biểu tượng uy tín trên thị trường toàn cầu. Với giá xuất khẩu bình quân đạt 626 USD/tấn trong 10 tháng qua – mức cao nhất từ trước đến nay, gạo Việt đang từng bước khẳng định vị thế vượt trội, không chỉ về chất lượng mà còn về giá trị kinh tế, so với các quốc gia xuất khẩu hàng đầu thế giới như Thái Lan, Ấn Độ và Pakistan.
      </main>
    </div>
    
  );
}