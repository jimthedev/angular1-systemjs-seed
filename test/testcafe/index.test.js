import { Selector } from 'testcafe';
import {time} from './login';

// NOTE IMPORTANT MAKE SURE THAT YOU PUT IN AN EXACT URL AND NOT ONE THAT REDIRECT
// OTHERWISE THE PAGE WILL REDIRECT AND BE BLOWN AWAY
//
// Notice that we return to the login url before each test
//
fixture `Admin Testing`
  .page `http://localhost:9000/login`
  .beforeEach(time.start());

test('App builder', async t => {
  // Action
  await t.click('a[ui-sref="admin"]').click('a[ui-sref="admin.builder"]');

  // Query
  const subHeader = await Selector('.content-area').find('ui-view').find('h5');

  // Test
  await t
    .expect(subHeader.innerText)
    .contains('app builder', 'The app builder header is displayed');

  // Always return to the login screen (manually this time) when done to stop the counter
  await time.finish(t);
});
