function onOpen(e) {
  SpreadsheetApp.getUi()
      .createAddonMenu()
      .addItem('Open Sidebar', 'openSidebar')
      .addToUi();
}

function openSidebar() {
  var ui = HtmlService.createHtmlOutputFromFile('index')
      .setTitle('Sidebar')
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);

  SpreadsheetApp.getUi().showSidebar(ui);
}
