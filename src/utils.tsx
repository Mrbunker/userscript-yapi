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
  targetStr: str,
}: {
  dom: HTMLElement;
  btnName?: string;
  targetStr?: string;
}) {
  const innerText = dom.innerText;
  if (!innerText) {
    return;
  }
  const copyBtn = document.createElement("button");

  copyBtn.classList.add("copyBtn");
  copyBtn.innerText = btnName ?? "copy";
  copyBtn.addEventListener("click", () => {
    copyToClipboard(str ?? innerText);
  });

  dom.appendChild(copyBtn);
}
