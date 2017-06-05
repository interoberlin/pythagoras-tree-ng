import { BaumhausPythagorasPage } from './app.po';

describe('baumhaus-pythagoras App', () => {
  let page: BaumhausPythagorasPage;

  beforeEach(() => {
    page = new BaumhausPythagorasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
