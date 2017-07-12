import { OpenHandPage } from './app.po';

describe('open-hand App', () => {
  let page: OpenHandPage;

  beforeEach(() => {
    page = new OpenHandPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
