import { MaterialCategoryAngularPage } from './app.po';

describe('material-category-angular App', () => {
  let page: MaterialCategoryAngularPage;

  beforeEach(() => {
    page = new MaterialCategoryAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
