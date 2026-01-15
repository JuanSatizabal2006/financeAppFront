import type { DirectiveBinding } from "vue";

const formatThousands = (
  element: HTMLElement,
  { value }: DirectiveBinding
): void => {
  const valueElement = element.innerText;

  if (valueElement === null || valueElement === undefined) return;

  const number = Number(valueElement);

  if (isNaN(number)) return;

  const numberFormatted = number.toLocaleString("de-DE");

  element.innerText = value.symbol
    ? `${value.symbol} ${numberFormatted}`
    : numberFormatted;
};

export { formatThousands };
