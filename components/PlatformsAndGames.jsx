import styles from "../styles/PlatformsAndGames.module.css";
import { platformIcons } from "../assets";
import Image from "next/image";
import Link from "next/link";

export const PlatformsAndGames = () => {
  return (
    <section className={styles.platform}>
      <div className="container">
        <div className={styles.platform__block}>
          <div className={styles.platform__title}>
            Мы поддерживаем такие игровые платформы как Steam, Origin и UPlay
          </div>
          <div className={styles.platform__icons}>
            {platformIcons.map((item) => {
              return (
                <div className={styles.icon} key={item.id}>
                  <Link href="/">
                    <a>
                      <Image src={item.icon} alt={item.alt} />
                    </a>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.platform__text_after}>
          <div className={styles.title}>Более 1 000 игр, готовых к запуску</div>
          <div className={styles.subtitle}>
            Шутеры, стелс-игры, хорроры, стратегии и так далее – всего более 20
            жанров игр
          </div>
        </div>
      </div>
    </section>
  );
};
