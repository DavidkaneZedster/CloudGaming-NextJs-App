import Theme from "../public/images/theme.svg";
import Headphones from "../public/images/headphones.svg";
import Questions from "../public/images/question.svg";
import Lang from "../public/images/RU.svg";

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
    border: true,
  },
  {
    id: 2,
    buttonText: "Скачать клиент",
    property: "primary",
    border: false,
  },
  {
    id: 3,
    buttonText: "Оформить подписку",
    property: "secondary",
    border: false,
  },
];
