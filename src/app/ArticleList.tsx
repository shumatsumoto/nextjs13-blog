import Image from "next/image";
import Link from "next/link";
import React from "react";

const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href="#">
          <Image
            src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
            alt=""
            width={1280}
            height={300}
          />
        </Link>
        <div>
          <Link href="#">Technology</Link>
          <Link href="#">Learning Next.js</Link>
          <p>By Shu.Matsumoto on 2023/12/3</p>
          <Link href="#">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque
            dolor eum perferendis officia temporibus veniam earum est,
            consequuntur nemo, unde delectus fugiat laudantium. Aliquam
            doloribus similique dicta nisi possimus est!
          </Link>
          <Link href="#">Read More</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
