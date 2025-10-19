import { MissionUtils } from "@woowacourse/mission-utils";
import { calculate } from "./Calculator.js";
class App {
  async run() {
    const input = await MissionUtils.Console.readLineAsync("문자열을 입력하세요: ");
    const result = calculate(input);
    MissionUtils.Console.print(`결과 : ${result}`);
  }
}
export default App;
