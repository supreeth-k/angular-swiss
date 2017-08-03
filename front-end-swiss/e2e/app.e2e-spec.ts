import { FrontEndSwissPage } from './app.po';

describe('front-end-swiss App', () => {
  let page: FrontEndSwissPage;

  beforeEach(() => {
    page = new FrontEndSwissPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
