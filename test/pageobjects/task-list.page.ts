import Page from './page';

class TaskListPage extends Page {

    get pageSelector() { return $('sst-tasks-list-page') }

    async waitForDisplayed() {
        return (await this.pageSelector).waitForDisplayed();
    }

    async waitForDisappear() {
      return (await this.pageSelector).waitForDisplayed({ reverse: true });
    }

    open() {
      return super.open('tasks');
    }
}

export default new TaskListPage();
