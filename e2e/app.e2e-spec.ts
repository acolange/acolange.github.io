import { Acolange.Github.IoPage } from './app.po';

describe('acolange.github.io App', () => {
  let page: Acolange.Github.IoPage;

  beforeEach(() => {
    page = new Acolange.Github.IoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
