/** unsecured */
export function copyToClipboard(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
    console.error("Unable to copy to clipboard", err);
  }
  document.body.removeChild(textArea);
}

export function createCopyBtn({
  dom,
  btnName,
  btnClassName,
  targetStr: str,
  visible = true,
}: {
  dom: HTMLElement;
  btnName?: string;
  btnClassName?: string;
  targetStr?: string;
  visible?: boolean;
}) {
  const innerText = dom.innerText;
  if (!innerText) {
    return;
  }
  const copyBtn = document.createElement("button");

  copyBtn.classList.add("usy-btn");
  btnClassName && copyBtn.classList.add(btnClassName);
  if (!visible) {
    copyBtn.classList.add("display-none");
  }
  copyBtn.innerText = btnName ?? "copy";
  copyBtn.addEventListener("click", () => {
    copyToClipboard(str ?? innerText);
  });

  dom.appendChild(copyBtn);
}

export function createHiddenBtn({
  dom,
  hiddenClassName,
}: {
  dom: HTMLElement;
  hiddenClassName: string;
}) {
  let show = false;

  const hiddenBtn = document.createElement("button");
  hiddenBtn.classList.add("usy-btn");

  hiddenBtn.innerText = "显示复制按钮";
  hiddenBtn.addEventListener("click", () => {
    show = !show;
    hiddenBtn.innerText = (show ? "显示" : "隐藏") + "复制按钮";
    const targetDoms = dom.querySelectorAll("." + hiddenClassName);
    targetDoms.forEach((item) => {
      if (show) {
        item.classList.remove("display-none");
      } else {
        item.classList.add("display-none");
      }
    });
  });

  dom.appendChild(hiddenBtn);
}

export const sleep = async (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

/** 读取 table dom，转为 ts interface 格式的字符串 */
export const convertTable = (tableDom: HTMLElement) => {
  const tableRows = Array.from(tableDom.querySelectorAll<HTMLTableRowElement>("tbody tr"));
  const result = tableRows.map((row) => {
    const tds = Array.from(row.querySelectorAll("td"));

    if (tds.length === 6) {
      const fieldName = tds[0].textContent?.trim() ?? "";
      const fieldType = tds[1].textContent?.trim() ?? "";
      const fieldDesc = tds[4].querySelector(".table-desc")?.textContent?.trim() ?? "";

      return `  /** ${fieldDesc} */\n  ${fieldName}: ${fieldType};`;
    }

    return "";
  });

  const interfaceStr = `interface params {\n${result.join("\n")}\n}`;

  return interfaceStr;
};
