import { Selector } from 'testcafe';
import timecafe from 'timecafe';

// CRAWLER FUNCTION
//
// What crawling do you want done before each test?
//
const login = async t => {
  await t.navigateTo('http://localhost:9000/login');
  const contentArea = await Selector('.content-area').find('h1');

  await t
    .expect(contentArea.innerText)
    .contains('Login:', 'The login header is shown');
};
// END CRAWLER FUNCTION

export default login;
export const time = timecafe(login);
