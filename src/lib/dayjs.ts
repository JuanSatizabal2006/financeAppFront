import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/es";

dayjs.extend(relativeTime);
dayjs.extend(utc);
dayjs.extend(timezone);
//Para manejar resultados en español
dayjs.locale("es");
//Zona horaria por defecto (Colombia)
dayjs.tz.setDefault("America/Bogota");

export const FORMAT_DATES = "YYYY-MM-DD HH:mm";

export function formatDate(date: string | Date, format = FORMAT_DATES): string {
  if (!date) {
    return "";
  }

  return dayjs(date).format(format);
}
