import { SlideFormPage } from './app.po';

describe('slide-form App', () => {
  let page: SlideFormPage;

  beforeEach(() => {
    page = new SlideFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
