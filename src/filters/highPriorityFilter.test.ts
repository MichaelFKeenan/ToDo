import { HighPriorityFilter } from './highPriorityFilter';
import { ItemData } from '../itemListItem/ItemData';

// import template from '../itemList/template.html';
// jest.mock('../itemList/template.html');
jest.mock('./template.html', () => {
  return '';
});

describe('', () => {
  it('Should throw an error when calling playSomethingCool', () => {
    const filter = new HighPriorityFilter();
    const res = filter.filter(new ItemData('some name', true, 1));
    expect(res).toBe(true);
  });
});

test('adds 1 + 2 to equal 3', () => {
  const filter = new HighPriorityFilter();
  const res = filter.filter(new ItemData('some name', true, 1));
  expect(res).toBe(true);
})