import LoginPage from  '../pageobjects/login.page';
import TaskListPage from '../pageobjects/task-list.page';
import SstUtils from '../utils/sst-utils';

describe('Login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login('user@example.com', 'password');
        await SstUtils.waitForLoaderToDismiss('login');
        await TaskListPage.waitForDisplayed();
        await SstUtils.waitForLoaderToDismiss('task_refresh');
    });
});


