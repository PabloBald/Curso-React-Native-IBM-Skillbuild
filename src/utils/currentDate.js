import moment from "moment";
import 'moment/locale/es'
import { capitalize } from "./capitalize";

export const currentDate = () => {
  return capitalize(moment().locale('de').format("dddd D MMMM"))
}
