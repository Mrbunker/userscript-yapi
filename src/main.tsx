import { createCopyBtn, sleep } from "./utils";
import "./style.css";

const main = () => {
  const bodyTable = document.querySelector<HTMLElement>(".caseContainer>div:nth-child(5)");
  if (!bodyTable) {
    throw new Error("bodyTable element not found");
  }

  const bodyTableContent = "还没写😢";
  createCopyBtn({ dom: bodyTable, btnName: "复制 Body 参数", targetStr: bodyTableContent });
  const nameTds = bodyTable.querySelectorAll<HTMLElement>("tbody>tr>td:nth-child(1)");
  const remarkTds = bodyTable.querySelectorAll<HTMLElement>("tbody>tr>td:nth-child(5)");

  [...nameTds, ...remarkTds].forEach((item) => createCopyBtn({ dom: item }));

  /** 是否已添加按钮 */
  let copyBtnAdded = false;
  const resTable = document.querySelector<HTMLElement>(".caseContainer>div:nth-child(7)");
  resTable?.addEventListener("click", async () => {
    if (copyBtnAdded) {
      return;
    }
    await sleep(20);
    const nameTds = document.querySelectorAll<HTMLElement>(
      "tbody>tr.ant-table-row-level-1>td:nth-child(1)",
    );
    const remarkTds = document.querySelectorAll<HTMLElement>(
      "tbody>tr.ant-table-row-level-1>td:nth-child(5)",
    );

    if (nameTds.length === 0) {
      return;
    }

    copyBtnAdded = true;
    [...nameTds, ...remarkTds].forEach((item) => createCopyBtn({ dom: item }));
  });
};

setTimeout(main, 380);
