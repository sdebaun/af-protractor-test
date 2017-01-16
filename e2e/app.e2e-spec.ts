import { AfTestPage } from './app.po';

describe('af-test App', function() {
  let page: AfTestPage;

  beforeEach(() => {
    page = new AfTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
