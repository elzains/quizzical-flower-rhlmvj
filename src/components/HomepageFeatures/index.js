import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Pendidikan",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Menyediakan berbagai buku pelajaran dari berbagai tingkat pendidikan,
        mulai dari sekolah dasar hingga perguruan tinggi. Ini termasuk materi
        pelajaran seperti matematika, ilmu pengetahuan, sejarah, dan lainnya.
      </>
    ),
  },
  {
    title: "Referensi",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Kumpulan buku referensi yang mencakup berbagai topik, seperti
        ensiklopedia, kamus, dan buku-buku referensi khusus lainnya yang dapat
        membantu pengguna dalam meneliti topik tertentu.
      </>
    ),
  },
  {
    title: "Fiksi dan Non-Fiksi",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Menawarkan koleksi buku fiksi dan non-fiksi dari berbagai genre,
        termasuk novel, cerita pendek, biografi, dan sebagainya, untuk memenuhi
        kebutuhan pembaca yang mencari hiburan atau pengetahuan.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
