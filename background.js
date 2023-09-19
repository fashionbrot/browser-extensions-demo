function greetFromBackground() {
  return "Hello from background.js!";
}

let domainUrl = "http://baidu.com";

function getEnv() {
  return domainUrl;
}

function changeDev() {
  domainUrl = "http://dev.baidu.com";
}

function changeProd() {
  domainUrl = "http://prod.baidu.com";
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  let action = request.action;
  if (request.action === "getGreeting") {
    const greeting = greetFromBackground();
    sendResponse({ greeting });
  } else if (action == "getEnv") {
    sendResponse({ env: getEnv() });
  } else if (action == "changeDev") {
    changeDev();
    sendResponse({ message: "切换测试环境成功" });
  } else if (action == "changeProd") {
    changeProd();
    sendResponse({ message: "切换生产环境成功" });
  }
});
