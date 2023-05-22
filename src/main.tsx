import { createCopyBtn } from "./utils";
import "./style.css";

setTimeout(() => {
  const bodyTable = document.querySelector<HTMLElement>(".caseContainer>div:nth-child(5)");
  if (!bodyTable) {
    throw new Error("bodyTable element not found");
  }
  const resTable = document.querySelector<HTMLElement>(".caseContainer>div:nth-child(7)");
  if (!resTable) {
    throw new Error("returnTable element not found");
  }
  // !todo
  const bodyTableContent = "还没写😢";

  createCopyBtn({ dom: bodyTable, btnName: "复制 Body 参数", targetStr: bodyTableContent });

  const nameTds = [
    ...bodyTable.querySelectorAll<HTMLElement>("tbody>tr>td:nth-child(1)"),
    ...resTable.querySelectorAll<HTMLElement>("tbody>tr>td:nth-child(1)"),
  ];

  const remarkTd = [
    ...bodyTable.querySelectorAll<HTMLElement>("tbody>tr>td:nth-child(5)"),
    ...resTable.querySelectorAll<HTMLElement>("tbody>tr>td:nth-child(5)"),
  ];

  nameTds.forEach((item) => createCopyBtn({ dom: item }));
  remarkTd.forEach((item) => createCopyBtn({ dom: item }));
}, 350);
