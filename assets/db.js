import Theme from "../public/images/theme.svg";
import Headphones from "../public/images/headphones.svg";
import Questions from "../public/images/question.svg";
import Lang from "../public/images/RU.svg";
import origin from "../public/images/origin.png";
import steam from "../public/images/steam.png";
import ubisoft from "../public/images/ubisoft.png";

export const headerIconsRight = [
  {
    id: 1,
    icon: <Theme />,
  },
  {
    id: 2,
    icon: <Headphones />,
  },
  {
    id: 3,
    icon: <Questions />,
  },
  {
    id: 4,
    icon: <Lang />,
  },
];

export const headerBtns = [
  {
    id: 1,
    buttonText: "Войти в аккаунт",
    property: "outline",
  },
  {
    id: 2,
    buttonText: "Скачать клиент",
    property: "primary",
  },
  {
    id: 3,
    buttonText: "Оформить подписку",
    property: "secondary",
  },
];

export const platformIcons = [
  {
    id: 1,
    icon: origin,
    alt: "origin",
  },
  {
    id: 2,
    icon: steam,
    alt: "steam",
  },
  {
    id: 3,
    icon: ubisoft,
    alt: "ubisoft",
  },
];

export const footerMenu = [
  {
    id: 1,
    name: "О компании",
  },
  {
    id: 2,
    name: "Условия использования",
  },
  {
    id: 3,
    name: "Промокоды",
  },
  {
    id: 4,
    name: "Политика конфиденциальности",
  },
  {
    id: 5,
    name: "Информация для правообладателей",
  },
  {
    id: 6,
    name: "Реквизиты",
  },
];
