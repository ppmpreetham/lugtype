import * as UpdateConfig from "../../config";
import * as TestLogic from "../../test/test-logic";
import * as ManualRestart from "../../test/manual-restart-tracker";

const commands: MonkeyTypes.Command[] = [
  {
    id: "changeMode",
    display: "Mode...",
    icon: "fa-bars",
    subgroup: {
      title: "Change mode...",
      configKey: "mode",
      list: [
        {
          id: "changeModeTime",
          display: "time",
          configValue: "time",
          exec: (): void => {
            UpdateConfig.setMode("time");
            TestLogic.restart();
          },
        },
        {
          id: "changeModeWords",
          display: "words",
          configValue: "words",
          exec: (): void => {
            UpdateConfig.setMode("words");
            TestLogic.restart();
          },
        },
        {
          id: "changeModeQuote",
          display: "quote",
          configValue: "quote",
          exec: (): void => {
            UpdateConfig.setMode("quote");
            TestLogic.restart();
          },
        },
        {
          id: "changeModeCustom",
          display: "custom",
          configValue: "custom",
          exec: (): void => {
            UpdateConfig.setMode("custom");
            TestLogic.restart();
          },
        },
        {
          id: "changeModeZen",
          display: "zen",
          configValue: "zen",
          exec: (): void => {
            UpdateConfig.setMode("zen");
            ManualRestart.set();
            TestLogic.restart();
          },
        },
        {
          id: "changeModeEasy",
          display: "easy",
          configValue: "easy",
          exec: (): void => {
            UpdateConfig.setMode("easy");
            UpdateConfig.setWordCount(10);
            TestLogic.restart();
          },
        },
        {
          id: "changeModeMedium",
          display: "medium",
          configValue: "medium",
          exec: (): void => {
            UpdateConfig.setMode("medium");
            TestLogic.restart();
          },
        },
        {
          id: "changeModeOneRandom",
          display: "onerandom",
          configValue: "onerandom",
          exec: (): void => {
            UpdateConfig.setMode("onerandom");
            TestLogic.restart();
          },
        },
      ],
    },
  },
];

export default commands;
